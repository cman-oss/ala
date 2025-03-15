import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

interface SubscriptionTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  projectLimit: number | "Unlimited";
  recommended?: boolean;
}

interface UpgradeModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  currentTier?: string;
  onSelectTier?: (tierId: string) => void;
  onClose?: () => void;
}

const UpgradeModal = ({
  open = true,
  onOpenChange = () => {},
  currentTier = "free",
  onSelectTier = () => {},
  onClose = () => {},
}: UpgradeModalProps) => {
  const [selectedTier, setSelectedTier] = useState<string>(currentTier);

  const subscriptionTiers: SubscriptionTier[] = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      description: "Basic features for chemistry students and hobbyists",
      features: [
        "3 projects",
        "Basic synthesis pathways",
        "Standard visualization",
        "Export as PNG",
      ],
      projectLimit: 3,
    },
    {
      id: "pro",
      name: "Professional",
      price: "$19.99",
      description: "Advanced features for research chemists",
      features: [
        "15 projects",
        "Advanced synthesis algorithms",
        "Enhanced visualization tools",
        "Export in multiple formats",
        "Reaction optimization suggestions",
      ],
      projectLimit: 15,
      recommended: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$49.99",
      description: "Complete solution for research labs and companies",
      features: [
        "Unlimited projects",
        "Premium synthesis algorithms",
        "Advanced visualization and modeling",
        "All export formats",
        "Reaction optimization",
        "Team collaboration features",
        "Priority support",
      ],
      projectLimit: "Unlimited",
    },
  ];

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
  };

  const handleUpgrade = () => {
    // Instead of just closing, we'll redirect to the checkout page
    window.location.href = `/checkout?tier=${selectedTier}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Upgrade Your Subscription
          </DialogTitle>
          <DialogDescription>
            Choose the plan that best fits your chemical synthesis research
            needs.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subscriptionTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`relative cursor-pointer transition-all duration-200 ${selectedTier === tier.id ? "ring-2 ring-blue-500" : "hover:shadow-md"}`}
                onClick={() => handleSelectTier(tier.id)}
              >
                {tier.recommended && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 right-4 bg-blue-100 text-blue-800"
                  >
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tier.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-medium flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-500" />
              All plans include:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <li className="text-sm flex items-center">
                <Check className="h-3 w-3 mr-2 text-green-500" />
                Chemical structure visualization
              </li>
              <li className="text-sm flex items-center">
                <Check className="h-3 w-3 mr-2 text-green-500" />
                Basic reaction predictions
              </li>
              <li className="text-sm flex items-center">
                <Check className="h-3 w-3 mr-2 text-green-500" />
                Project saving and loading
              </li>
              <li className="text-sm flex items-center">
                <Check className="h-3 w-3 mr-2 text-green-500" />
                Email support
              </li>
            </ul>
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center">
          <Button variant="outline" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button
            onClick={handleUpgrade}
            disabled={selectedTier === currentTier}
          >
            Upgrade Now
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
