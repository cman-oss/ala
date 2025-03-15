import { supabase } from "./supabase";

export interface Project {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
  user_id: string;
}

export async function getProjects(userId: string) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return { data, error };
}

export async function getProject(id: string) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function createProject(
  project: Omit<Project, "id" | "created_at">,
) {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  return { data, error };
}

export async function updateProject(
  id: string,
  updates: Partial<Omit<Project, "id" | "created_at" | "user_id">>,
) {
  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  return { data, error };
}

export async function deleteProject(id: string) {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  return { error };
}

export async function duplicateProject(id: string, userId: string) {
  // First get the project to duplicate
  const { data: projectToDuplicate, error: fetchError } = await getProject(id);

  if (fetchError || !projectToDuplicate) {
    return { data: null, error: fetchError };
  }

  // Create a new project with the same data but a different name
  const newProject = {
    name: `${projectToDuplicate.name} (Copy)`,
    description: projectToDuplicate.description,
    image_url: projectToDuplicate.image_url,
    user_id: userId,
  };

  return await createProject(newProject);
}
