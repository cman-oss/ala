import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@12.18.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const endpointSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseKey);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("No signature provided", { status: 400 });
  }

  try {
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret,
    );

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionChange(subscription);
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
});

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session,
) {
  // Get the customer ID from the session
  const customerId = session.customer as string;
  const userId = session.metadata?.userId;

  if (!userId) {
    console.error("No userId found in session metadata");
    return;
  }

  // Update the user with the Stripe customer ID if not already set
  await supabase
    .from("users")
    .update({ stripe_customer_id: customerId })
    .eq("id", userId);
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  // Get the customer ID from the subscription
  const customerId = subscription.customer as string;

  // Get the product details
  const priceId = subscription.items.data[0].price.id;
  const product = await stripe.products.retrieve(
    subscription.items.data[0].price.product as string,
  );

  // Get the tier from the product metadata
  const tier = product.metadata.tier || "free";

  // Get project limit based on tier
  let projectLimit = 3; // Default for free tier
  if (tier === "pro") {
    projectLimit = 15;
  } else if (tier === "enterprise") {
    projectLimit = 999; // Effectively unlimited
  }

  // Find the user with this customer ID
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  if (userError) {
    console.error("Error finding user:", userError);
    return;
  }

  // Calculate expiration date based on subscription period
  const expiresAt = new Date(
    subscription.current_period_end * 1000,
  ).toISOString();

  // Update the user's subscription in our database
  await supabase.from("subscriptions").upsert({
    user_id: userData.id,
    tier,
    project_limit: projectLimit,
    expires_at: expiresAt,
    stripe_subscription_id: subscription.id,
    stripe_price_id: priceId,
    status: subscription.status,
    cancel_at_period_end: subscription.cancel_at_period_end,
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  // Get the customer ID from the subscription
  const customerId = subscription.customer as string;

  // Find the user with this customer ID
  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .single();

  if (userError) {
    console.error("Error finding user:", userError);
    return;
  }

  // Reset the user's subscription to free tier
  await supabase
    .from("subscriptions")
    .update({
      tier: "free",
      project_limit: 3,
      stripe_subscription_id: null,
      stripe_price_id: null,
      status: "inactive",
      cancel_at_period_end: false,
    })
    .eq("user_id", userData.id);
}
