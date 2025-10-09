import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/company_img.png" // ✅ Correct filename
                alt="Simplast Polypacks Logo"
                fill
                className="object-contain"
              />
               </div>
              <div>
                <span className="text-lg font-bold text-[#C6A664]">Simplast Polypacks</span>
                <p className="text-xs text-gray-300 -mt-1">Pvt. Ltd.</p>
              </div>
               </Link>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Leading manufacturer of plain and printed polythene films with a monthly capacity of 600 tonnes.
            </p>
            <p className="text-xs text-[#C6A664] font-medium">
              Manufacturers of Plain and Polythene Printed Films
            </p>
          </div>
 

 
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#C6A664] mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                Home
              </Link>
              <Link href="/products" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                Products
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-[#C6A664] mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-300 hover:text-[#C6A664] transition-colors duration-200">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Simplast Polypacks Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;