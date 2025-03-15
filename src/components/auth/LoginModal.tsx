import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Mail, Lock, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "../ui/alert";

interface LoginModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onLogin?: () => void;
  onSignupInstead?: () => void;
}

const LoginModal = ({
  isOpen = true,
  onClose = () => console.log("Close login modal"),
  onLogin = () => console.log("Login"),
  onSignupInstead = () => console.log("Switch to signup"),
}: LoginModalProps) => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const { success, error } = await signIn(email, password);

      if (success) {
        onLogin();
      } else if (error) {
        setError(error);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Welcome to ChemSynth AI
          </DialogTitle>
          <DialogDescription className="text-center">
            Sign in to access your chemical synthesis projects
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center my-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=200&q=80"
              alt="Chemistry Logo"
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-center text-lg">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing in..." : "Sign in"}
              </Button>

              <p className="text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={onSignupInstead}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign up
                </button>
              </p>
            </CardFooter>
          </Card>
        </form>

        <DialogFooter className="flex flex-col space-y-2 sm:space-y-0 mt-4">
          <p className="text-xs text-center text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
