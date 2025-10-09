"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "../../types";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const products: (Product & { images: string[] })[] = [
    {
      id: "1",
      name: `HDPE & LDPE LINERS`,
      images: [
        "/products/hdpe_liner_1.jpeg",
        "/products/hdpe_liner_2.jpeg",
        "/products/hdpe_liner_3.jpeg",
        "/products/ldpe_liner_1.jpeg",
      ],
      description:
        "HDPE (High-Density Polyethylene) liners are rigid, durable, and resistant to tears and punctures, making them ideal for heavy-duty applications like large ponds, reservoirs, landfills, and chemical containment. In contrast, LDPE (Low-Density Polyethylene) liners are more flexible, malleable, and less expensive, though less durable, and are better suited for smaller ponds, irregular shapes, and situations where cost-effectiveness is a priority.",
    },
    {
      id: "2",
      name: "HDPE ROLLS",
      images: [
        "/products/hdpe_roll_1.jpeg",
         "/products/hdpe_roll_2.jpeg",
      ],
      description:
        "HDPE rolls are flexible, durable rolls of high-density polyethylene plastic, ideal for packaging, liners, and industrial use.",
    },
    {
      id: "3",
      name: "HDPE SHRINK ROLLS",
      images: [
        "/products/hdpe_shrink_1.jpeg",
        "/products/hdpe_shrink_2.jpeg",
        "/products/hdpe_shrink_3.jpeg",
        "/products/hdpe_shrink_4.jpeg",
      ],
      description:
        "HDPE shrink film provides strong, moisture-resistant wrapping for industrial packaging and pallet loads.",
    },
    {
      id: "4",
      name: "MULCH FILMS",
      images: [
        "/products/ldpe_bag_1.jpeg",
        "/products/ldpe_bag_2.jpeg",
        "/products/mulch_films_3.jpeg",
      ],
      description:
        "Mulch film regulates soil temperature, retains moisture, and prevents weed growth — vital for modern agriculture.",
    },
    {
      id: "5",
      name: "GOVERNMENT PDS ROLLS",
      images: [
        "/products/gov_pds_1.jpeg",
        "/products/gov_pds_2.jpeg",
      ],
      description:
        "Government PDS (Public Distribution System) packaging rolls are typically made from plastic-based, multilayered, and heat-sealed laminated films. The specific materials used can vary, but the main goal is to protect food grains and other essential commodities from moisture, pests, and contamination during transport and storage. These rolls are custom-made for the filling and sealing machines used by different government agencies.",
    },
    {
      id: "6",
      name: "LDPE SHOPPING BAGS",
      images: [
         "/products/ldpe_bag_3.jpeg",
          "/products/ldpe_bag_4.jpeg",
      ],
      description:
        "LDPE shopping bags are soft, flexible, and customizable — perfect for retail and packaging uses.",
    },
  ];

  const toggleExpand = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const nextImage = (productId: string, images: string[]) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % images.length,
    }));
  };

  const prevImage = (productId: string, images: string[]) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]:
        (prev[productId] || 0) === 0 ? images.length - 1 : (prev[productId] || 0) - 1,
    }));
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product, index) => {
            const activeIndex = currentImageIndex[product.id] || 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full max-w-sm transition-shadow duration-500 hover:shadow-lg hover:scale-[1.03] transform"
              >
                {/* Product Image Carousel */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.images[activeIndex]}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500"
                  />
                  {/* Arrows */}
                  <button
                    onClick={() => prevImage(product.id, product.images)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-1 rounded-full"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => nextImage(product.id, product.images)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-1 rounded-full"
                  >
                    <ChevronRight size={20} />
                  </button>
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
            );
          })}
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
