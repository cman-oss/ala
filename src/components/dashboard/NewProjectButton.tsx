import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";

interface NewProjectButtonProps {
  projectLimit?: number;
  currentProjects?: number;
  onCreateProject?: () => void;
}

const NewProjectButton = ({
  projectLimit = 3,
  currentProjects = 2,
  onCreateProject = () => {},
}: NewProjectButtonProps) => {
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const hasReachedLimit = currentProjects >= projectLimit;

  const handleClick = () => {
    if (hasReachedLimit) {
      setShowUpgradeDialog(true);
    } else {
      onCreateProject();
    }
  };

  return (
    <>
      <Card className="w-full h-full min-h-[280px] flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-all duration-200 bg-white border-dashed border-2 border-gray-200">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
          <div className="rounded-full bg-blue-100 p-4 mb-4">
            <Plus className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {hasReachedLimit ? "Upgrade to Create More" : "Create New Project"}
          </h3>
          <p className="text-gray-500 mb-4">
            {hasReachedLimit
              ? `You've reached your limit of ${projectLimit} projects`
              : "Start a new chemical synthesis pathway"}
          </p>
        </CardContent>
        <CardFooter className="pb-6">
          <Button
            onClick={handleClick}
            variant={hasReachedLimit ? "outline" : "default"}
            className={hasReachedLimit ? "text-blue-600 border-blue-600" : ""}
          >
            {hasReachedLimit ? (
              <>
                Upgrade Plan <ArrowUpRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Create Project"
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Upgrade Dialog - This would normally link to the UpgradeModal component */}
      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upgrade Your Subscription</DialogTitle>
            <DialogDescription>
              Upgrade your plan to create more chemical synthesis projects and
              unlock additional features.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Current Plan: Free</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">✓ {projectLimit} projects</li>
                <li className="flex items-center">
                  ✓ Basic synthesis pathways
                </li>
                <li className="flex items-center">✓ Standard visualization</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium mb-2">Premium Plan</h4>
              <ul className="text-sm space-y-2">
                <li className="flex items-center">✓ Unlimited projects</li>
                <li className="flex items-center">
                  ✓ Advanced synthesis algorithms
                </li>
                <li className="flex items-center">
                  ✓ Enhanced visualization tools
                </li>
                <li className="flex items-center">
                  ✓ Export in multiple formats
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setShowUpgradeDialog(false)}
            >
              Cancel
            </Button>
            <Button>Upgrade Now</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewProjectButton;
