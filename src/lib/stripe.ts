import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "./supabase";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "",
);

export { stripePromise };

// Create a checkout session for subscription
export async function createCheckoutSession(priceId: string, userId: string) {
  try {
    const { data, error } = await supabase.functions.invoke(
      "create-checkout-session",
      {
        body: { priceId, userId },
      },
    );

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
}

// Create a portal session for managing subscription
export async function createPortalSession(customerId: string) {
  try {
    const { data, error } = await supabase.functions.invoke(
      "create-portal-session",
      {
        body: { customerId },
      },
    );

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error creating portal session:", error);
    throw error;
  }
}

// Get subscription details for a user
export async function getSubscriptionDetails(userId: string) {
  try {
    const { data, error } = await supabase.functions.invoke(
      "get-subscription",
      {
        body: { userId },
      },
    );

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error getting subscription details:", error);
    throw error;
  }
}
