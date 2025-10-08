"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E2E] mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your packaging needs? Get in touch with our team of
            experts. We&aposre here to provide you with the best polythene film
            solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
                Get in Touch
              </h2>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#3E5879] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">Address</h3>
                  <p className="text-[#333333]">
                    Simplast Polypacks Pvt Ltd
                    <br />
                    16 BONFIELD LANE, 2ND LANE
                    <br />
                    KOLKATA - 700001, WEST BENGAL, INDIA
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#C6A664] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-[#333333]">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#1F3A5F] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">Phone</h3>
                  <p className="text-[#333333]">+91 6289755617</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3E5879] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2E2E2E] mb-2">Email</h3>
                  <p className="text-[#333333]">simplastpolypacks@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-fit"
          >
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#333333]">
                  Thank you for contacting us. We&aposll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[#3E5879] hover:text-[#C6A664] font-medium"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                action="https://formspree.io/f/movknwrv" // replace with your actual Formspree URL
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#2E2E2E] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full  text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#2E2E2E] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full   text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#2E2E2E] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full  text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#2E2E2E] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us about your packaging needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1F3A5F] text-white px-8 py-3 rounded-lg font-medium border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#1F3A5F] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <div className="mt-16"></div>
      <Footer />
    </div>
  );
};

export default Contact;
