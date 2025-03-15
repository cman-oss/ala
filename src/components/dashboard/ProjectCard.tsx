import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash, Copy, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id?: string;
  name?: string;
  createdAt?: string;
  imageUrl?: string;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
}

const ProjectCard = ({
  id = "project-1",
  name = "Acetylsalicylic Acid Synthesis",
  createdAt = "2023-10-15T14:30:00Z",
  imageUrl = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
  onClick = () => console.log("Project clicked"),
  onEdit = () => console.log("Edit project"),
  onDelete = () => console.log("Delete project"),
  onDuplicate = () => console.log("Duplicate project"),
}: ProjectCardProps) => {
  // Format date to be more readable
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="w-[350px] h-[280px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div
        className="h-32 bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={onClick}
      />
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg truncate" title={name}>
            {name}
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onClick}>
                <ExternalLink className="mr-2 h-4 w-4" />
                <span>Open Project</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onEdit}>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onDuplicate}>
                <Copy className="mr-2 h-4 w-4" />
                <span>Duplicate</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={onDelete}
                className="text-red-600 focus:text-red-600"
              >
                <Trash className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground">
          Created on {formattedDate}
        </p>
        <p className="text-sm mt-2 line-clamp-2 text-muted-foreground">
          Chemical synthesis pathway project for creating acetylsalicylic acid
          from salicylic acid.
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={onClick}
        >
          Open Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
