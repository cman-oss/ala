import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services or pricing? We're here to help.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team is ready to answer your questions and discuss how our
                solutions can help your research or business needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:contact@chemsynth.ai"
                        className="text-blue-600 hover:underline"
                      >
                        contact@chemsynth.ai
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday-Friday, 9AM-5PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Chemistry Lane
                      <br />
                      Boston, MA 02110
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Bespoke Consulting Services
              </h3>
              <p className="text-gray-600">
                Helping businesses and researchers leverage automation, AI, and
                machine learning for tailored chemical solutions. Our expert
                team works closely with you to understand your specific needs
                and develop customized strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Electronic Laboratory Notebook (ELN) Implementation
              </h3>
              <p className="text-gray-600">
                Streamlining data management and research collaboration through
                secure, digital workflows. Our ELN solutions help you organize,
                store, and share your research data efficiently while
                maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Future Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Future Vision
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Cutting-Edge Solutions
              </h3>
              <p className="text-gray-600">
                Developing cutting-edge, affordable solutions for chemical and
                material synthesis and data-driven research. We're committed to
                making advanced technology accessible to researchers and
                businesses of all sizes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Revolutionizing Scientific Workflows
              </h3>
              <p className="text-gray-600">
                Revolutionizing scientific workflows with machine learning,
                real-time monitoring, and automation to enhance efficiency,
                scalability, and sustainability. Our vision is to transform how
                research is conducted, making it more efficient, collaborative,
                and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">
                How do I get started with your consulting services?
              </h3>
              <p className="text-gray-600">
                Simply reach out to us via email or the contact form on this
                page. We'll schedule an initial consultation to understand your
                needs and discuss how we can help.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">
                Do you offer custom pricing for academic institutions?
              </h3>
              <p className="text-gray-600">
                Yes, we offer special pricing for academic institutions and
                research labs. Contact us for more information about our
                academic pricing options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-2">
                Can you integrate your solutions with our existing systems?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our solutions are designed to be flexible and can
                integrate with most existing laboratory and research systems.
                During our consultation, we'll discuss your current setup and
                how we can best integrate our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
