import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ArrowUpRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SubscriptionBannerProps {
  tier?: "free" | "basic" | "premium" | "enterprise";
  projectsUsed?: number;
  projectLimit?: number;
  daysRemaining?: number;
  onUpgrade?: () => void;
}

const SubscriptionBanner = ({
  tier = "free",
  projectsUsed = 2,
  projectLimit = 3,
  daysRemaining = 30,
  onUpgrade = () => console.log("Upgrade clicked"),
}: SubscriptionBannerProps) => {
  // Calculate percentage of projects used
  const projectsPercentage = Math.min(
    Math.round((projectsUsed / projectLimit) * 100),
    100,
  );

  // Determine badge color based on tier
  const getBadgeVariant = () => {
    switch (tier) {
      case "basic":
        return "secondary";
      case "premium":
        return "default";
      case "enterprise":
        return "destructive";
      default:
        return "outline";
    }
  };

  // Format tier name for display
  const formatTierName = (tierName: string) => {
    return tierName.charAt(0).toUpperCase() + tierName.slice(1);
  };

  return (
    <div className="w-full py-3 px-4 bg-white border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Badge variant={getBadgeVariant()} className="capitalize">
          {formatTierName(tier)} Tier
        </Badge>

        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">
            Projects: {projectsUsed}/{projectLimit}
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Number of projects you can create on your current plan</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="hidden sm:flex items-center space-x-2 w-48">
          <Progress value={projectsPercentage} className="h-2" />
          <span className="text-xs text-gray-500">{projectsPercentage}%</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {tier !== "enterprise" && (
          <div className="text-sm text-gray-600 hidden md:block">
            {daysRemaining} days remaining in current billing cycle
          </div>
        )}

        {tier !== "enterprise" && (
          <Button size="sm" onClick={onUpgrade} className="flex items-center">
            Upgrade
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionBanner;
