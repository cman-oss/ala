import React, { createContext, useContext, useEffect, useState } from "react";
import {
  AuthUser,
  getCurrentUser,
  onAuthStateChange,
  signIn,
  signOut,
  signUp,
} from "@/lib/auth";

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    name: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session on mount
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser || null);
      } catch (error) {
        console.error("Error checking user session:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Subscribe to auth changes
    const { data: authListener } = onAuthStateChange((updatedUser) => {
      setUser(updatedUser);
      setLoading(false);
    });

    // Cleanup subscription
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignUp = async (
    email: string,
    password: string,
    name: string,
  ) => {
    try {
      const { data, error } = await signUp(email, password, {
        full_name: name,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      // Auto sign in after signup
      if (data?.user) {
        setUser(data.user);
      }

      return { success: true };
    } catch (error) {
      console.error("Error during sign up:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { data, error } = await signIn(email, password);

      if (error) {
        return { success: false, error: error.message };
      }
      
      // Update user state after successful login
      if (data?.user) {
        setUser(data.user);
      }

      return { success: true };
    } catch (error) {
      console.error("Error during sign in:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  const value = {
    user,
    loading,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
