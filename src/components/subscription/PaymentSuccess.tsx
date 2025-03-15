import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

interface PaymentSuccessProps {
  tier: string;
  onContinue: () => void;
}

const PaymentSuccess = ({ tier, onContinue }: PaymentSuccessProps) => {
  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <CardTitle className="text-2xl">Payment Successful!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Thank you for subscribing to our {tier} plan. Your account has been
          upgraded and you now have access to all the features included in your
          subscription.
        </p>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <h3 className="font-medium mb-2">Your {tier} Plan Includes:</h3>
          {tier === "Professional" ? (
            <ul className="text-sm text-left list-disc pl-5 space-y-1">
              <li>15 projects</li>
              <li>Advanced synthesis algorithms</li>
              <li>Enhanced visualization tools</li>
              <li>Multiple export formats</li>
              <li>Reaction optimization suggestions</li>
            </ul>
          ) : tier === "Enterprise" ? (
            <ul className="text-sm text-left list-disc pl-5 space-y-1">
              <li>Unlimited projects</li>
              <li>Premium synthesis algorithms</li>
              <li>Advanced visualization and modeling</li>
              <li>All export formats</li>
              <li>Team collaboration features</li>
              <li>Priority support</li>
            </ul>
          ) : (
            <p className="text-sm">Basic features included in your plan</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onContinue} className="w-full">
          Continue to Dashboard
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentSuccess;
