"use client";

import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            MetalMind<span className="text-[#F97316]">Cabin</span>
          </h2>
          <p className="mt-4 text-[#CBD5F5] text-sm">
            We provide high-quality portable cabins, containers, and modular
            solutions for modern businesses.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#CBD5F5]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Products</h3>
          <ul className="space-y-2 text-[#CBD5F5] text-sm">
            <li>Portable Cabins</li>
            <li>Office Containers</li>
            <li>Security Cabins</li>
            <li>Toilet Cabins</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="flex items-center gap-2 text-[#CBD5F5]">
            <FaPhoneAlt /> 9321715392
          </p>

          <p className="flex items-center gap-2 mt-2 text-[#CBD5F5]">
            <FaWhatsapp /> WhatsApp Available
          </p>

          <p className="flex items-center gap-2 mt-2 text-[#CBD5F5]">
            <FaMapMarkerAlt /> Mumbai / Navi Mumbai
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-[#CBD5F5] text-sm">
        © {new Date().getFullYear()} MetalMind Cabin. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
