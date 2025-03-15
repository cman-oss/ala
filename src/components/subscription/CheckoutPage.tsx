import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import StripeCheckout from "./StripeCheckout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const priceMappings = {
  free: { id: "price_free", amount: 0 },
  pro: { id: "price_pro", amount: 1999 }, // $19.99
  enterprise: { id: "price_enterprise", amount: 4999 }, // $49.99
};

const tierNames = {
  free: "Free",
  pro: "Professional",
  enterprise: "Enterprise",
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [tier, setTier] = useState<string>("pro");

  useEffect(() => {
    const tierParam = searchParams.get("tier");
    if (tierParam && ["free", "pro", "enterprise"].includes(tierParam)) {
      setTier(tierParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!loading && !user) {
      navigate("/login?redirect=/checkout");
    }
  }, [user, loading, navigate]);

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  const handleCancel = () => {
    navigate("/subscription");
  };

  if (loading || !user) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Free tier doesn't need checkout
  if (tier === "free") {
    return (
      <div className="container mx-auto py-10 px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Free Plan Selected</CardTitle>
            <CardDescription>
              You've selected the Free plan which doesn't require payment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Your account is already on the Free plan with access to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-1">
              <li>3 projects</li>
              <li>Basic synthesis pathways</li>
              <li>Standard visualization</li>
              <li>PNG exports</li>
            </ul>
            <Button onClick={() => navigate("/dashboard")} className="w-full">
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/subscription")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Plans
        </Button>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              Checkout - {tierNames[tier as keyof typeof tierNames]} Plan
            </CardTitle>
            <CardDescription>
              Complete your subscription to access premium features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-md">
              <div>
                <h3 className="font-medium">
                  {tierNames[tier as keyof typeof tierNames]} Plan
                </h3>
                <p className="text-sm text-gray-500">Monthly subscription</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">
                  $
                  {(
                    priceMappings[tier as keyof typeof priceMappings].amount /
                    100
                  ).toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">per month</p>
              </div>
            </div>

            <StripeCheckout
              priceId={priceMappings[tier as keyof typeof priceMappings].id}
              tier={tierNames[tier as keyof typeof tierNames]}
              onSuccess={handleSuccess}
              onCancel={handleCancel}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutPage;
