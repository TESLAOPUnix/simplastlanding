"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import Image from "next/image";

const Home: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasCheckedIntro, setHasCheckedIntro] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const clients = [
  { name: "Client A", logo: "/logos/amust1.jpeg" },
  { name: "Client B", logo: "/logos/aqd1.jpeg" },
  { name: "Client C", logo: "/logos/imerys1.jpeg" },
  { name: "Client D", logo: "/logos/irctc.jpeg" },
  { name: "Client E", logo: "/logos/marico1.jpeg" },
  { name: "Client F", logo: "/logos/prabhuji.jpeg" },
   { name: "Client G", logo: "/logos/baileys.jpg" },  
     { name: "Clien H", logo: "/logos/bud.png" },
];

  const whyChooseUs = [
    {
      image: "/company_images/img22.jpeg",
      title: "Unwavering Commitment to Quality",
      description: "Every film we produce meets stringent quality benchmarks, ensuring superior performance and reliability."
    },
    {
      image: "/company_images/img26.jpeg",
      title: "Advanced Manufacturing Infrastructure",
      description: "Equipped with multilayer, ABA, and monolayer plants to produce precise and consistent results at scale."
    },
    {
      image: "/company_images/img20.jpeg",
      title: "Reliable and Timely Delivery",
      description: "We understand downtime costs — our logistics and operations ensure your orders arrive as promised."
    },
    {
      image: "/company_images/img12.jpeg",
      title: "Sustainability-Driven Approach",
      description: "We actively minimize our environmental footprint through sustainable materials and efficient processes."
    },
    {
      image: "/company_images/cus-cen.jpeg",
      title: "Customer-Centric Support",
      description: "From customization to logistics, our dedicated team ensures a seamless and client-focused experience."
    },
    {
      image: "/company_images/img30.jpeg",
      title: "Ethical and Transparent Operations",
      description: "We prioritize integrity, honesty, and transparency — building partnerships based on trust and respect."
    },
  ];


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

  useEffect(() => {
  console.log("✅ useEffect running...");
  if (typeof window !== "undefined") {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    console.log("hasSeenIntro:", hasSeenIntro);
    if (!hasSeenIntro) {
      console.log("➡️ Showing intro");
      setShowIntro(true);
    }
    setHasCheckedIntro(true);
  }
}, []);


  const handleIntroComplete = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  // ✅ Don’t render anything until we’ve checked sessionStorage
  if (!hasCheckedIntro) return null;

  // ✅ Show intro only once
  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  const itemWidth = 192; // 12rem = 192px
  const totalWidth = clients.length * itemWidth;

  return (
    <div className="bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-800"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/company_images/img22.jpeg")',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Leading Manufacturer of Plain and Printed Polythene Films
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Delivering excellence, innovation, and sustainability with a monthly capacity of 600 tonnes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="bg-[#1F3A5F] text-white px-8 py-3 rounded-lg font-medium border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#1F3A5F] transition-all duration-300"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-3 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-[#1F3A5F] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
       <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#2E2E2E] mb-12"
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -totalWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: clients.length * 3,
                ease: "linear",
              },
            }}
            className="flex space-x-4 sm:space-x-6 md:space-x-8"
            style={{ width: `${totalWidth * 2}px` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="bg-[#F5F5F5] h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48 rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

      {/* Who We Are / Our Story */}
       <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#2E2E2E] mb-12"
        >
          Our Story
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-lg text-[#333333] leading-relaxed">
              Simplast Polypacks Pvt. Ltd. is a leading manufacturer of plain and printed polythene films, 
              equipped with state-of-the-art multilayer, ABA, and monolayer plants that ensure precision and quality. 
              With a robust production capacity of 600 tonnes per month, we deliver innovative, reliable, 
              and customized packaging solutions to meet diverse industry needs. 
              Our commitment to excellence, quality assurance, and timely delivery has made us a trusted partner for businesses across sectors. 
              At Simplast, customer satisfaction isn’t just a promise — it’s our core value.
            </p>
            <Link
              href="/about"
              className="bg-[#1F3A5F] text-white px-8 py-3 rounded-lg font-medium border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#1F3A5F] transition-all duration-300 inline-block"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="w-full h-56 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/company_images/img12.jpeg" // Replace with your image in public folder
                alt="Manufacturing facility"
                width={800} // original image width or desired
                height={400} // original image height or desired
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-56 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/company_images/img18.jpeg"
                alt="Production line"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Mission, Vision, Ethics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#3E5879]"
            >
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Our Mission</h3>
              <p className="text-[#333333] leading-relaxed">
                To deliver superior polythene film solutions that exceed customer expectations while 
                upholding sustainability, innovation, and integrity in every process. We aim to build 
                lasting relationships founded on trust, reliability, and mutual respect.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#C6A664]"
            >
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Our Vision</h3>
              <p className="text-[#333333] leading-relaxed">
                To redefine plastic film manufacturing by driving sustainability and innovation. 
                We aspire to create a future where our products serve as catalysts for positive change — 
                not just fulfilling packaging needs but promoting responsible, ethical, and forward-thinking industry practices.
              </p>
            </motion.div>

            {/* Ethics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#F5F5F5] p-8 rounded-lg border-l-4 border-[#1F3A5F]"
            >
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Ethical Business Practices</h3>
              <p className="text-[#333333] leading-relaxed">
                Integrity, honesty, and transparency lie at the heart of our operations. 
                We uphold fair labor practices, respect human rights, and adhere to stringent environmental standards, 
                ensuring every product reflects our commitment to responsible growth and ethical excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#2E2E2E] mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
                <Image
                  src={item.image} // should be from public folder e.g. "/images/img1.jpeg"
                  alt={item.title}
                  width={600} // actual image width
                  height={200} // actual image height
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">{item.title}</h3>
              <p className="text-[#333333] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#333333]">
              Contact us today to discuss your packaging needs and get a customized solution.
            </p>
          </motion.div>

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
                                className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200"
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
                                className="w-full  text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200"
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
                              className="w-full  text-black px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3E5879] focus:border-transparent transition-colors duration-200 resize-vertical"
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
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#F5F5F5] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-[#2E2E2E] leading-relaxed"
          >
            <span className="text-[#C6A664] text-6xl leading-none">&quot;</span>
            We uphold integrity, honesty, and transparency in every interaction — ensuring our customers can trust us implicitly. 
            Guided by strong ethics, we respect people, protect the planet, and build business relationships founded on reliability and respect.
            <span className="text-[#C6A664] text-6xl leading-none">&quot;</span>
          </motion.blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
