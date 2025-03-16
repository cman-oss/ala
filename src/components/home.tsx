import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  Beaker,
  TestTube,
  FlaskConical,
  ArrowRight,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import Header from "./layout/Header";
import SubscriptionBanner from "./dashboard/SubscriptionBanner";
import ProjectsGrid from "./dashboard/ProjectsGrid";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";
import UpgradeModal from "./subscription/UpgradeModal";
import VideoModal from "./ui/VideoModal";
import { Button } from "./ui/button";

interface HomeProps {
  isAuthenticated?: boolean;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  subscriptionTier?: "free" | "basic" | "premium" | "enterprise";
  projectsUsed?: number;
  projectLimit?: number;
  daysRemaining?: number;
}

const Home = ({
  isAuthenticated = false,
  userName = "John Doe",
  userEmail = "john.doe@example.com",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=chemistry",
  subscriptionTier = "free",
  projectsUsed = 2,
  projectLimit = 3,
  daysRemaining = 30,
}: HomeProps) => {
  const { user, loading: authLoading, signOut } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(isAuthenticated);

  // Update dashboard visibility when auth state changes
  useEffect(() => {
    if (!authLoading) {
      setShowDashboard(!!user);
    }
  }, [user, authLoading]);

  // Sample projects data
  const projects = [
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
  ];

  // Handlers
  const handleLogin = () => {
    setShowLoginModal(false);
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // The actual signup is handled by the AuthContext
    // The modal will be closed by the SignupModal component
    console.log("User signed up:", { email, name });
  };

  const handleLogout = async () => {
    await signOut();
    setShowDashboard(false);
  };

  const handleUpgradeClick = () => {
    setShowUpgradeModal(true);
  };

  const handleCreateProject = () => {
    if (projectsUsed >= projectLimit) {
      setShowUpgradeModal(true);
    } else {
      console.log("Create new project");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Authentication Modals */}
      {showLoginModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          onSignupInstead={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}

      {showSignupModal && (
        <SignupModal
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          onSignup={handleSignup}
          onLoginInstead={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}

      {/* Upgrade Subscription Modal */}
      {showUpgradeModal && (
        <UpgradeModal
          open={showUpgradeModal}
          onOpenChange={setShowUpgradeModal}
          currentTier={subscriptionTier}
          onClose={() => setShowUpgradeModal(false)}
        />
      )}

      {/* Header */}
      <Header
        userName={user?.user_metadata?.full_name || userName}
        userEmail={user?.email || userEmail}
        userAvatar={userAvatar}
        isAuthenticated={showDashboard}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {showDashboard ? (
          <>
            {/* Subscription Banner */}
            <SubscriptionBanner
              tier={subscriptionTier}
              projectsUsed={projectsUsed}
              projectLimit={projectLimit}
              daysRemaining={daysRemaining}
              onUpgrade={handleUpgradeClick}
            />

            {/* Projects Grid */}
            <ProjectsGrid
              projects={projects}
              projectLimit={projectLimit}
              onCreateProject={handleCreateProject}
            />
          </>
        ) : (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
              <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      AI-Powered Chemical Synthesis Pathways
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Revolutionize your chemical research with our advanced AI
                      technology that predicts optimal synthesis pathways for
                      any compound.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <VideoModal
                        videoSrc="https://player.vimeo.com/video/1066236343?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        videoTitle="Revolutionizing Chemistry with AI"
                        buttonText="Watch Demo"
                        buttonVariant="outline"
                        buttonSize="lg"
                      />
                      <Button size="lg" asChild>
                        <Link to="/pricing">View Pricing</Link>
                      </Button>
                    </div>
                    <div className="mt-8 flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      No credit card required for free tier
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&q=80"
                      alt="Chemical synthesis visualization"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">
                    Powerful Features for Chemical Researchers
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our platform combines cutting-edge AI with intuitive design
                    to accelerate your research workflow.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-blue-50 p-8 rounded-xl">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Beaker className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Structure Visualization
                    </h3>
                    <p className="text-gray-600">
                      Interactive 3D models of chemical structures with
                      real-time manipulation and analysis tools.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-xl">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <TestTube className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      AI-Powered Predictions
                    </h3>
                    <p className="text-gray-600">
                      Generate accurate synthesis pathways with our advanced
                      machine learning algorithms trained on millions of
                      reactions.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-xl">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <FlaskConical className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      Reaction Optimization
                    </h3>
                    <p className="text-gray-600">
                      Automatically optimize reaction conditions and identify
                      alternative pathways for improved yields.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive solutions for chemical research and
                    development
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">
                      Bespoke Consulting Services
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Helping businesses and researchers leverage automation,
                      AI, and machine learning for tailored chemical solutions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom AI model development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Process optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Research workflow automation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">
                      Electronic Laboratory Notebook (ELN) Implementation
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Streamlining data management and research collaboration
                      through secure, digital workflows.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Secure data storage and sharing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Collaborative research tools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Compliance with industry standards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Our Future Vision
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Cutting-Edge Solutions
                      </h3>
                      <p className="text-gray-600">
                        Developing cutting-edge, affordable solutions for
                        chemical and material synthesis and data-driven
                        research. We're committed to democratizing access to
                        advanced research tools.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Revolutionizing Scientific Workflows
                      </h3>
                      <p className="text-gray-600">
                        Revolutionizing scientific workflows with machine
                        learning, real-time monitoring, and automation to
                        enhance efficiency, scalability, and sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-gray-50">
              <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">
                    Simple, Transparent Pricing
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose the plan that fits your research needs, from
                    individual researchers to enterprise labs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Free</h3>
                    <p className="text-gray-500 mb-4">
                      For students and hobbyists
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$0</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>3 projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic synthesis pathways</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Standard visualization</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/pricing">Learn More</Link>
                    </Button>
                  </div>

                  <div className="bg-white p-8 rounded-xl border-2 border-blue-500 shadow-lg relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Professional</h3>
                    <p className="text-gray-500 mb-4">For research chemists</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$19.99</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>15 projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced synthesis algorithms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Enhanced visualization tools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Export in multiple formats</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/pricing">Learn More</Link>
                    </Button>
                  </div>

                  <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-gray-500 mb-4">
                      For research labs and companies
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$49.99</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unlimited projects</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Premium synthesis algorithms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced visualization and modeling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Team collaboration features</span>
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/pricing">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-white">
              <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Everything you need to know about ChemSynth AI
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <button className="flex justify-between items-center w-full text-left">
                      <h3 className="text-lg font-medium">
                        How accurate are the synthesis predictions?
                      </h3>
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="mt-4 text-gray-600">
                      Our AI model has been trained on millions of published
                      reactions and achieves over 92% accuracy for common
                      organic synthesis pathways. For novel compounds, accuracy
                      varies but typically exceeds 85% for feasible routes.
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <button className="flex justify-between items-center w-full text-left">
                      <h3 className="text-lg font-medium">
                        Can I export my synthesis pathways?
                      </h3>
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="mt-4 text-gray-600">
                      Yes, all plans allow exporting your synthesis pathways.
                      The free tier supports PNG exports, while paid tiers offer
                      additional formats including PDF, SVG, and
                      machine-readable formats like JSON and XML.
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <button className="flex justify-between items-center w-full text-left">
                      <h3 className="text-lg font-medium">
                        Is my research data secure?
                      </h3>
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="mt-4 text-gray-600">
                      Absolutely. We employ end-to-end encryption for all data,
                      and your research remains private. We never share your
                      data with third parties, and enterprise plans include
                      additional security features like SSO and audit logs.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-blue-50">
              <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Transform Your Chemical Research?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of researchers who are accelerating their
                  discoveries with ChemSynth AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">ChemSynth</h2>
                  <p className="text-xs text-gray-400">AI Synthesis Pathways</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing chemical synthesis research with advanced AI
                technology.
              </p>
              <p className="text-gray-400 text-sm">
                © 2023 ChemSynth AI. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="text-gray-400 hover:text-white"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-gray-400 hover:text-white">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
