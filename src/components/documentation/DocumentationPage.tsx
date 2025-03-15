import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="sticky top-20 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search documentation..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-sm">Getting Started</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="#introduction"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    href="#account-setup"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Account Setup
                  </a>
                </li>
                <li>
                  <a
                    href="#dashboard"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Dashboard Overview
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-sm">Core Features</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="#projects"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Project Management
                  </a>
                </li>
                <li>
                  <a
                    href="#synthesis"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Synthesis Pathways
                  </a>
                </li>
                <li>
                  <a
                    href="#visualization"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Structure Visualization
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-sm">Subscription</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="#plans"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Subscription Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#billing"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Billing & Payments
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <h3 className="font-medium text-sm">API Reference</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    href="#api-overview"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    API Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#authentication"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Authentication
                  </a>
                </li>
                <li>
                  <a
                    href="#endpoints"
                    className="block py-1.5 px-2 rounded-md hover:bg-gray-100"
                  >
                    Endpoints
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold mb-4" id="introduction">
                ChemSynth AI Documentation
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to the official documentation for ChemSynth AI, your
                platform for AI-powered chemical synthesis pathway generation.
              </p>

              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="overview"
                  className="p-4 border rounded-md mt-2"
                >
                  <h3 className="text-lg font-medium mb-2">
                    What is ChemSynth AI?
                  </h3>
                  <p className="mb-4">
                    ChemSynth AI is a revolutionary platform that helps chemists
                    predict synthesis pathways for chemical compounds using
                    advanced AI technology. Our system combines machine learning
                    algorithms trained on millions of chemical reactions with
                    intuitive visualization tools to accelerate your research
                    workflow.
                  </p>
                  <h3 className="text-lg font-medium mb-2">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>AI-powered synthesis pathway generation</li>
                    <li>Interactive 3D structure visualization</li>
                    <li>Reaction optimization suggestions</li>
                    <li>Project management with tiered access</li>
                    <li>Export capabilities in multiple formats</li>
                  </ul>
                </TabsContent>
                <TabsContent
                  value="quickstart"
                  className="p-4 border rounded-md mt-2"
                >
                  <h3 className="text-lg font-medium mb-2">
                    Getting Started in 3 Steps
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <strong>Create an account</strong> - Sign up for a free
                      account to get started with basic features.
                    </li>
                    <li>
                      <strong>Create your first project</strong> - From your
                      dashboard, click "Create New Project" and give it a name.
                    </li>
                    <li>
                      <strong>Input your chemical structure</strong> - Use our
                      structure editor to draw or import your target compound.
                    </li>
                  </ol>
                  <div className="mt-4">
                    <Button>Create Your First Project</Button>
                  </div>
                </TabsContent>
                <TabsContent value="faq" className="p-4 border rounded-md mt-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        How accurate are the synthesis predictions?
                      </h3>
                      <p className="text-gray-600">
                        Our AI model has been trained on millions of published
                        reactions and achieves over 92% accuracy for common
                        organic synthesis pathways. For novel compounds,
                        accuracy varies but typically exceeds 85% for feasible
                        routes.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        Can I export my synthesis pathways?
                      </h3>
                      <p className="text-gray-600">
                        Yes, all plans allow exporting your synthesis pathways.
                        The free tier supports PNG exports, while paid tiers
                        offer additional formats including PDF, SVG, and
                        machine-readable formats like JSON and XML.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">
                        Is my research data secure?
                      </h3>
                      <p className="text-gray-600">
                        Absolutely. We employ end-to-end encryption for all
                        data, and your research remains private. We never share
                        your data with third parties, and enterprise plans
                        include additional security features like SSO and audit
                        logs.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <Separator />

            <div id="account-setup">
              <h2 className="text-2xl font-bold mb-4">Account Setup</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Registration</h3>
                  <p className="mb-4">
                    Creating an account with ChemSynth AI is simple and
                    straightforward. You can sign up using your email address
                    and a secure password.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Registration Steps:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>
                          Click the "Sign Up" button in the top-right corner of
                          the homepage
                        </li>
                        <li>
                          Enter your full name, email address, and create a
                          password
                        </li>
                        <li>
                          Agree to the terms of service and privacy policy
                        </li>
                        <li>Click "Create Account" to complete registration</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Login</h3>
                  <p className="mb-4">
                    Once registered, you can log in to your account using your
                    email and password. Your session will remain active until
                    you log out or the session expires.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Login Steps:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>
                          Click the "Login" button in the top-right corner of
                          the homepage
                        </li>
                        <li>Enter your email address and password</li>
                        <li>Click "Sign In" to access your account</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator />

            <div id="dashboard">
              <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
              <p className="mb-6">
                After logging in, you'll be directed to your dashboard, which
                serves as the central hub for managing your projects and account
                settings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Subscription Banner</h3>
                    <p className="text-sm text-gray-600">
                      Located at the top of your dashboard, this banner displays
                      your current subscription tier, project usage, and days
                      remaining in your billing cycle. Click "Upgrade" to access
                      more features.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Projects Grid</h3>
                    <p className="text-sm text-gray-600">
                      The main section of your dashboard displays all your
                      projects in a grid layout. Each project card shows the
                      name, creation date, and a preview image. Use the search
                      and filter options to organize your projects.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Create New Project</h3>
                    <p className="text-sm text-gray-600">
                      The "Create New Project" card allows you to start a new
                      chemical synthesis project. If you've reached your project
                      limit, you'll be prompted to upgrade your subscription.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">User Menu</h3>
                    <p className="text-sm text-gray-600">
                      Access your profile, account settings, and logout option
                      through the user menu in the top-right corner of the
                      header.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            <div id="projects">
              <h2 className="text-2xl font-bold mb-4">Project Management</h2>
              <p className="mb-6">
                Projects are the core organizational unit in ChemSynth AI. Each
                project represents a chemical synthesis pathway that you're
                working on.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Creating a Project
                  </h3>
                  <p className="mb-4">
                    To create a new project, click the "Create New Project" card
                    on your dashboard or the "New Project" button in the
                    top-right corner.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">
                        Project Creation Steps:
                      </h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Click "Create New Project"</li>
                        <li>Enter a name for your project</li>
                        <li>Add an optional description</li>
                        <li>Click "Create" to initialize your project</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Managing Projects
                  </h3>
                  <p className="mb-4">
                    Each project card in your dashboard provides options to
                    open, edit, duplicate, or delete the project.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Project Actions:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <strong>Open:</strong> Click on the project card or
                          the "Open Project" button
                        </li>
                        <li>
                          <strong>Edit:</strong> Click the menu icon and select
                          "Edit" to modify project details
                        </li>
                        <li>
                          <strong>Duplicate:</strong> Create a copy of the
                          project with all its data
                        </li>
                        <li>
                          <strong>Delete:</strong> Permanently remove the
                          project (cannot be undone)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Project Limits</h3>
                  <p className="mb-4">
                    The number of projects you can create depends on your
                    subscription tier:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      <strong>Free:</strong> 3 projects
                    </li>
                    <li>
                      <strong>Professional:</strong> 15 projects
                    </li>
                    <li>
                      <strong>Enterprise:</strong> Unlimited projects
                    </li>
                  </ul>
                  <p>
                    If you reach your project limit, you'll need to upgrade your
                    subscription or delete existing projects to create new ones.
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div id="synthesis">
              <h2 className="text-2xl font-bold mb-4">Synthesis Pathways</h2>
              <p className="mb-6">
                The core functionality of ChemSynth AI is generating and
                optimizing synthesis pathways for chemical compounds.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Creating a Synthesis Pathway
                  </h3>
                  <p className="mb-4">
                    After creating a project, you can generate a synthesis
                    pathway by following these steps:
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Open your project</li>
                        <li>
                          Use the structure editor to draw or import your target
                          compound
                        </li>
                        <li>
                          Set any constraints or preferences for the synthesis
                        </li>
                        <li>
                          Click "Generate Pathway" to start the AI analysis
                        </li>
                        <li>Review the generated synthesis routes</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    AI Algorithm Features
                  </h3>
                  <p className="mb-4">
                    Our AI synthesis algorithm offers several advanced features:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">
                          Multi-step Synthesis Planning
                        </h4>
                        <p className="text-sm text-gray-600">
                          Generate complete synthesis routes with multiple
                          reaction steps, starting from commercially available
                          precursors.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">
                          Reaction Conditions
                        </h4>
                        <p className="text-sm text-gray-600">
                          Suggested reaction conditions including solvents,
                          catalysts, temperature, and reaction time for each
                          step.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Yield Prediction</h4>
                        <p className="text-sm text-gray-600">
                          Estimated yields for each reaction step based on
                          similar published reactions in our database.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Alternative Routes</h4>
                        <p className="text-sm text-gray-600">
                          Multiple synthesis pathways ranked by efficiency,
                          cost, and feasibility to give you options.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Pathway Optimization
                  </h3>
                  <p className="mb-4">
                    Premium tiers offer advanced optimization features to
                    improve your synthesis pathways:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Reaction Condition Optimization:</strong>{" "}
                      Fine-tune conditions for maximum yield
                    </li>
                    <li>
                      <strong>Green Chemistry Alternatives:</strong> Suggestions
                      for more environmentally friendly reagents and solvents
                    </li>
                    <li>
                      <strong>Cost Optimization:</strong> Find more economical
                      routes using less expensive reagents
                    </li>
                    <li>
                      <strong>Scale-up Considerations:</strong> Adjustments for
                      industrial-scale synthesis
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            <div id="visualization">
              <h2 className="text-2xl font-bold mb-4">
                Structure Visualization
              </h2>
              <p className="mb-6">
                ChemSynth AI provides powerful visualization tools for chemical
                structures and reactions.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Structure Editor</h3>
                  <p className="mb-4">
                    Our interactive structure editor allows you to draw chemical
                    structures or import them from various formats.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Editor Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Draw structures using a comprehensive toolkit of atoms
                          and bonds
                        </li>
                        <li>
                          Import structures from SMILES, MOL, or SDF files
                        </li>
                        <li>Automatic structure validation and correction</li>
                        <li>3D structure preview with rotation and zooming</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Reaction Visualization
                  </h3>
                  <p className="mb-4">
                    View complete reaction pathways with interactive
                    visualizations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Step-by-Step View:</strong> See each reaction step
                      individually with detailed information
                    </li>
                    <li>
                      <strong>Full Pathway View:</strong> Visualize the entire
                      synthesis route from starting materials to target compound
                    </li>
                    <li>
                      <strong>Mechanism View:</strong> (Premium feature)
                      Animated reaction mechanisms showing electron movement
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">Export Options</h3>
                  <p className="mb-4">
                    Export your structures and pathways in various formats:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Free Tier</h4>
                        <ul className="list-disc pl-5 text-sm">
                          <li>PNG image export</li>
                          <li>Basic PDF report</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Premium Tiers</h4>
                        <ul className="list-disc pl-5 text-sm">
                          <li>High-resolution PNG, SVG, and TIFF</li>
                          <li>Detailed PDF reports with conditions</li>
                          <li>MOL and SDF chemical structure files</li>
                          <li>JSON and XML data exports</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div id="plans">
              <h2 className="text-2xl font-bold mb-4">Subscription Plans</h2>
              <p className="mb-6">
                ChemSynth AI offers several subscription tiers to meet the needs
                of different users, from individual researchers to large
                organizations.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Available Plans</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Free</h4>
                        <p className="text-xl font-bold mb-2">
                          $0
                          <span className="text-sm font-normal text-gray-500">
                            /month
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          For students and hobbyists
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>3 projects</li>
                          <li>Basic synthesis pathways</li>
                          <li>Standard visualization</li>
                          <li>PNG exports</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200 shadow-md">
                      <CardContent className="p-4">
                        <div className="absolute -top-2 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                          Popular
                        </div>
                        <h4 className="font-medium mb-1">Professional</h4>
                        <p className="text-xl font-bold mb-2">
                          $19.99
                          <span className="text-sm font-normal text-gray-500">
                            /month
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          For research chemists
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>15 projects</li>
                          <li>Advanced synthesis algorithms</li>
                          <li>Enhanced visualization tools</li>
                          <li>Multiple export formats</li>
                          <li>Reaction optimization suggestions</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">Enterprise</h4>
                        <p className="text-xl font-bold mb-2">
                          $49.99
                          <span className="text-sm font-normal text-gray-500">
                            /month
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          For research labs and companies
                        </p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>Unlimited projects</li>
                          <li>Premium synthesis algorithms</li>
                          <li>Advanced visualization and modeling</li>
                          <li>All export formats</li>
                          <li>Team collaboration features</li>
                          <li>Priority support</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Upgrading Your Plan
                  </h3>
                  <p className="mb-4">
                    You can upgrade your subscription at any time from your
                    account settings or by clicking the "Upgrade" button in the
                    subscription banner.
                  </p>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Upgrade Steps:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>
                          Click the "Upgrade" button in the subscription banner
                        </li>
                        <li>Select your desired plan</li>
                        <li>Enter your payment information</li>
                        <li>Confirm your subscription upgrade</li>
                      </ol>
                      <p className="text-sm text-gray-600 mt-4">
                        Your new subscription will be activated immediately, and
                        you'll have access to all the features of your new plan.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
