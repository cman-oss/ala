import { supabase } from "./supabase";

export type SubscriptionTier = "free" | "pro" | "enterprise";

export interface Subscription {
  id: string;
  user_id: string;
  tier: SubscriptionTier;
  project_limit: number;
  expires_at: string;
  created_at: string;
}

export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .single();

  return { data, error };
}

export async function updateSubscription(
  userId: string,
  tier: SubscriptionTier,
) {
  // Get the project limit based on tier
  const projectLimit = getProjectLimitByTier(tier);

  // Calculate expiration date (30 days from now)
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  const { data, error } = await supabase
    .from("subscriptions")
    .upsert({
      user_id: userId,
      tier,
      project_limit: projectLimit,
      expires_at: expiresAt.toISOString(),
    })
    .select()
    .single();

  return { data, error };
}

// Helper function to get project limit based on tier
export function getProjectLimitByTier(tier: SubscriptionTier): number {
  switch (tier) {
    case "free":
      return 3;
    case "pro":
      return 15;
    case "enterprise":
      return 999; // Effectively unlimited
    default:
      return 3;
  }
}

// Helper function to get days remaining in subscription
export function getDaysRemaining(expiresAt: string): number {
  const expiration = new Date(expiresAt);
  const now = new Date();
  const diffTime = expiration.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}
