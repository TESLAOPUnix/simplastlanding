"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Target, Eye, Heart, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  const sections = [
    {
      id: "who-we-are",
      title: "Who We Are",
      content:
        "Simplast Polypacks Pvt. Ltd. is a leading manufacturer of plain and printed polythene films, delivering high-quality products with a robust monthly production capacity of 600 tonnes. Utilizing state-of-the-art multilayer, ABA, and mono-layer plants, we ensure precision, consistency, and reliability to meet the diverse needs of industries across the nation.",
    },
    {
      id: "our-story",
      title: "Our Story",
      content:
        "At Simplast, we go beyond manufacturing. From plain and printed films to tailored solutions, our team ensures seamless, client-focused experiences. Timely delivery, responsive support, and uncompromising quality have made us a trusted partner for businesses seeking innovative and reliable packaging solutions.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To provide superior polythene film solutions that exceed customer expectations through innovation, quality, and sustainability.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To redefine industry standards by being a trusted partner for clients, delivering sustainable and reliable packaging solutions that make a difference.",
    },
    {
      icon: Heart,
      title: "Ethical Business Practices",
      description:
        "Integrity, honesty, and transparency guide our operations. We adhere to fair labor practices, respect human rights, and commit to environmental sustainability.",
    },
  ];

  const whyChooseUs = [
    "Consistent quality and reliability in every product",
    "Advanced facilities with cutting-edge technology",
    "Skilled professionals with years of expertise",
    "Commitment to sustainability and environmental responsibility",
    "Trusted partner for packaging solutions",
    "Comprehensive quality assurance processes",
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[36rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/company_images/img18.jpeg")',
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Leading the way in polythene film manufacturing
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Introduction Sections */}
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6 flex items-center">
                  <Factory className="w-8 h-8 text-[#3E5879] mr-3" />
                  {section.title}
                </h2>
                <p className="text-lg text-[#333333] leading-relaxed">
                  {section.content}
                </p>
              </div>

              <div
                className={`grid grid-cols-2 gap-4 ${
                  index % 2 === 1 ? "lg:order-first" : ""
                }`}
              >
                <Image
                  src={
                    index === 0
                      ? "/company_images/img23.jpeg"
                      : "/company_images/img10.jpeg"
                  }
                  alt={`${section.title} - Image 1`}
                  width={400}
                  height={200}
                  className="w-full h-72 object-cover rounded-lg shadow-sm"
                />
                <Image
                  src={
                    index === 0
                      ? "/company_images/img6.jpeg"
                      : "/company_images/img11.jpeg"
                  }
                  alt={`${section.title} - Image 2`}
                  width={400}
                  height={200}
                  className="w-full h-72 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </motion.section>
        ))}

        {/* Mission, Vision, and Ethics */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#2E2E2E] mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-[#3E5879] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-[#2E2E2E] mb-12">
              Why Choose Us
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-[#C6A664] mr-3" />
                  <h3 className="text-2xl font-bold text-[#2E2E2E]">Our Commitment</h3>
                </div>
                <p className="text-lg text-[#333333] leading-relaxed mb-8">
                  We deliver consistent quality, reliability, and sustainability. With skilled professionals and advanced facilities, your business gains a trusted partner in packaging solutions.
                </p>
                <div className="grid md:grid-cols-1 gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-[#F5F5F5] rounded-lg"
                    >
                      <div className="w-2 h-2 bg-[#3E5879] rounded-full flex-shrink-0"></div>
                      <p className="text-[#333333]">{reason}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="/company_images/img24.jpeg"
                  alt="Quality assurance"
                  width={400}
                  height={400}
                  className="w-full h-[346px] object-cover rounded-lg shadow-sm"
                />
                <Image
                  src="/company_images/img14.jpeg"
                  alt="Manufacturing excellence"
                  width={200}
                  height={200}
                  className="w-full h-[346px] object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Production Capacity Highlight */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-[#2E2E2E] text-white p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#C6A664]">600 Tonnes</h2>
          <p className="text-xl mb-6">Monthly Production Capacity</p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our state-of-the-art facilities, including multilayer, ABA, and mono-layer plants, ensure we meet the highest production standards while maintaining exceptional quality.
          </p>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
