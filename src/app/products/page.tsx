"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Product } from "../../types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "1",
      name: "HDPE LINERS",
      image: "/hdpe_liners.jpg", // image in public/products/
      description:
        "HDPE liners are high-density polyethylene sheets used as durable, impermeable barriers for water, waste, and chemical containment. Resistant to chemicals, UV, and corrosion, they prevent leakage in landfills, ponds, and industrial applications. Flexible and long-lasting, they are typically installed over prepared surfaces and joined via thermal welding for secure containment.",
    },
    {
      id: "2",
      name: "HDPE ROLLS",
      image: "/Hdpe_rolls.jpg",
      description:
        "HDPE rolls are flexible, durable rolls of High-Density Polyethylene (HDPE) plastic, known for their strength, chemical, moisture, and abrasion resistance, making them ideal for packaging, protective liners, and industrial applications.",
    },
    {
      id: "3",
      name: "HDPE SHRINK ROLLS",
      image: "/Hdpe_Shrink_Rolls.jpg",
      description:
        "HDPE shrink film is a strong, rigid, and durable plastic wrap known for its exceptional moisture, gas, and chemical resistance, offering excellent product protection and a secure, tamper-evident seal when heat is applied. While less flexible and clear than LDPE films, its high tensile strength and durability make it ideal for heavy-duty applications like industrial packaging, bundling heavy items, and wrapping pallet loads, providing a robust barrier against damage",
    },
    {
      id: "4",
      name: "MULCH Films",
      image: "/Mulch_Films.jpg",
      description:
        "Benefit of mulch films in agriculture. What are the uses of Mulch ...Mulch film is a protective agricultural sheeting, typically made of polyethylene, that covers the soil around plants to regulate temperature, conserve moisture by reducing evaporation, suppress weeds by blocking light, and prevent soil erosion. It is available in various colors like black, silver-black, and transparent to achieve different benefits, such as soil warming, moisture retention, and insect deterrence, and can be standard or biodegradable.",
    },
    {
      id: "5",
      name: "LDPE LINERS",
      image: "/Ldpe_liner.jpg",
      description:
        "LDPE liners are flexible, durable plastic bags or films made from low-density polyethylene. They offer excellent resistance to moisture, chemicals, and punctures, making them ideal for a wide range of packaging, storage, and agricultural applications. LDPE liners are versatile, cost-effective, and provide a hygienic, protective barrier for various products, from food and chemicals to bulk items, ensuring their safety and integrity during transport and storage. ",
    },
    {
      id: "6",
      name: "LDPE SHOP BAGS",
      image: "/Ldpe_shop_bags.jpg",
      description:
        "Custom Printed HDPE LDPE Plastic Carry Shopping BagsLDPE shopping bags are flexible, lightweight bags made from low-density polyethylene, known for their softness, clarity, and stretchability compared to stiffer HDPE bags. They are suitable for lighter items and offer ease of opening due to their higher ductility, making them popular for general retail, food packaging, and as attractive, easily customizable shopping bags.",
    },
  ];

  const toggleExpand = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 w-full"
      >
        <div className="relative h-[30rem] w-full overflow-hidden mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("/company_images/img29.jpeg")',
            }}
          />
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Our Products
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Discover our comprehensive range of high-quality polythene films
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full max-w-sm
                         transition-shadow duration-500 hover:shadow-lg hover:scale-103 transform"
            >
              {/* Product Image */}
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-103"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">
                  {product.name}
                </h3>
                <button
                  onClick={() => toggleExpand(product.id)}
                  className="flex items-center justify-between w-full bg-[#1F3A5F] text-white px-4 py-2 rounded-lg font-medium border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#1F3A5F] transition-all duration-300"
                >
                  <span>Learn More</span>
                  {expandedProduct === product.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {expandedProduct === product.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-200 bg-[#F5F5F5]"
                  >
                    <div className="p-6">
                      <p className="text-[#333333] leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 bg-white p-8 rounded-lg shadow-sm border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-[#2E2E2E] mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-[#333333] mb-6">
            Contact our team to discuss your specific requirements and get
            customized polythene film solutions.
          </p>
          <a
            href="/contact"
            className="bg-[#1F3A5F] text-white px-8 py-3 rounded-lg font-medium border-2 border-[#C6A664] hover:bg-[#C6A664] hover:text-[#1F3A5F] transition-all duration-300 inline-block"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
