import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your research needs, from individual
            researchers to enterprise labs.
          </p>
        </div>
      </div>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-gray-500 mb-4">For students and hobbyists</p>
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
              <Button className="w-full" variant="outline">
                Learn More
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
              <Button className="w-full" variant="outline">
                Learn More
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
              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer tailored packages for specific research needs and larger
              organizations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Bespoke Services
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team can create custom solutions tailored to your specific
                  research requirements and organizational needs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom AI model training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom reporting and analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">
                  Contact Us for a Quote
                </h4>
                <p className="text-gray-600 mb-6">
                  Reach out to discuss your specific needs and get a customized
                  quote for your organization.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                    <span>
                      Email:{" "}
                      <a
                        href="mailto:contact@chemsynth.ai"
                        className="text-blue-600 hover:underline"
                      >
                        contact@chemsynth.ai
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Phone: (123) 456-7890</span>
                  </div>
                  <Button className="mt-4">Request a Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Bespoke Consulting Services
              </h3>
              <p className="text-gray-600 mb-4">
                Helping businesses and researchers leverage automation, AI, and
                machine learning for tailored chemical solutions.
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

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Electronic Laboratory Notebook (ELN) Implementation
              </h3>
              <p className="text-gray-600 mb-4">
                Streamlining data management and research collaboration through
                secure, digital workflows.
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

          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Our Future Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Cutting-Edge Solutions
                </h3>
                <p className="text-gray-600">
                  Developing cutting-edge, affordable solutions for chemical and
                  material synthesis and data-driven research. We're committed
                  to democratizing access to advanced research tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Revolutionizing Scientific Workflows
                </h3>
                <p className="text-gray-600">
                  Revolutionizing scientific workflows with machine learning,
                  real-time monitoring, and automation to enhance efficiency,
                  scalability, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Chemical Research?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our solutions can help accelerate
            your discoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
