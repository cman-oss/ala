import { supabase } from "./supabase";
import { User, Session } from "@supabase/supabase-js";

export type AuthUser = User;

export async function signUp(
  email: string,
  password: string,
  metadata: { full_name: string },
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
      emailRedirectTo: window.location.origin,
      // Set this to false to disable email confirmation requirement
      emailConfirmationRequired: false,
    },
  });

  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user;
}

export async function getCurrentSession() {
  const { data } = await supabase.auth.getSession();
  return data?.session;
}

export function onAuthStateChange(callback: (user: User | null) => void) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null);
  });
}
