import React, { useState } from "react";
import { Search, Filter, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ProjectCard from "./ProjectCard";
import NewProjectButton from "./NewProjectButton";

interface Project {
  id: string;
  name: string;
  createdAt: string;
  imageUrl: string;
  description: string;
}

interface ProjectsGridProps {
  projects?: Project[];
  projectLimit?: number;
  onCreateProject?: () => void;
  onProjectClick?: (id: string) => void;
  onProjectEdit?: (id: string) => void;
  onProjectDelete?: (id: string) => void;
  onProjectDuplicate?: (id: string) => void;
}

const ProjectsGrid = ({
  projects = [
    {
      id: "project-1",
      name: "Acetylsalicylic Acid Synthesis",
      createdAt: "2023-10-15T14:30:00Z",
      imageUrl:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80",
      description:
        "Chemical synthesis pathway project for creating acetylsalicylic acid from salicylic acid.",
    },
    {
      id: "project-2",
      name: "Methamphetamine Synthesis",
      createdAt: "2023-11-05T09:15:00Z",
      imageUrl:
        "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&q=80",
      description:
        "Analysis of synthetic routes for methamphetamine production with alternative precursors.",
    },
  ],
  projectLimit = 3,
  onCreateProject = () => console.log("Create new project"),
  onProjectClick = (id) => console.log(`Open project ${id}`),
  onProjectEdit = (id) => console.log(`Edit project ${id}`),
  onProjectDelete = (id) => console.log(`Delete project ${id}`),
  onProjectDuplicate = (id) => console.log(`Duplicate project ${id}`),
}: ProjectsGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="w-full h-full bg-gray-50 p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">My Projects</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full sm:w-[250px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort by" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={() => onCreateProject()}
              className="hidden md:flex"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 && searchQuery !== "" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-gray-100 p-4 mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn't find any projects matching "{searchQuery}". Try a
            different search term or clear your search.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSearchQuery("")}
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              createdAt={project.createdAt}
              imageUrl={project.imageUrl}
              onClick={() => onProjectClick(project.id)}
              onEdit={() => onProjectEdit(project.id)}
              onDelete={() => onProjectDelete(project.id)}
              onDuplicate={() => onProjectDuplicate(project.id)}
            />
          ))}
          <NewProjectButton
            projectLimit={projectLimit}
            currentProjects={projects.length}
            onCreateProject={onCreateProject}
          />
        </div>
      )}

      {/* Mobile Create Button */}
      <div className="fixed bottom-6 right-6 md:hidden">
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg p-0"
          onClick={() => onCreateProject()}
        >
          <PlusCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsGrid;
