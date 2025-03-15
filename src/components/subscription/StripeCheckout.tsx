import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe";
import { useAuth } from "@/context/AuthContext";
import { createCheckoutSession } from "@/lib/stripe";
import CheckoutForm from "./CheckoutForm";
import PaymentSuccess from "./PaymentSuccess";
import { Loader2 } from "lucide-react";

interface StripeCheckoutProps {
  priceId: string;
  tier: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const StripeCheckout = ({
  priceId,
  tier,
  onSuccess,
  onCancel,
}: StripeCheckoutProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (!user) return;

    const initializeCheckout = async () => {
      try {
        setLoading(true);
        // For a real implementation, you would create a checkout session on your server
        // and redirect to Stripe Checkout or use the client secret with Elements
        const session = await createCheckoutSession(priceId, user.id);

        if (session.url) {
          // Redirect to Stripe Checkout
          window.location.href = session.url;
        } else if (session.clientSecret) {
          // Use Elements for inline checkout
          setClientSecret(session.clientSecret);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error initializing checkout:", err);
        setError("Failed to initialize checkout. Please try again.");
        setLoading(false);
      }
    };

    initializeCheckout();
  }, [priceId, user]);

  const handleSuccess = () => {
    setSucceeded(true);
    if (onSuccess) {
      // Allow animation to complete before calling onSuccess
      setTimeout(onSuccess, 500);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
        <p>Initializing checkout...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (succeeded) {
    return <PaymentSuccess tier={tier} onContinue={onSuccess || (() => {})} />;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        priceId={priceId}
        onSuccess={handleSuccess}
        onCancel={onCancel}
      />
    </Elements>
  );
};

export default StripeCheckout;
