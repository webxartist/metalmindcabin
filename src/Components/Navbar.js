"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1E3A8A]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* 🔥 INCREASE HEIGHT */}
      <div className="w-full flex items-center justify-between px-4 md:px-10 h-[100px] md:h-[110px]">
        {/* ✅ BIG RESPONSIVE LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logoo.png"
            alt="logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white/80 hover:text-white transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-white text-[#1E3A8A] font-semibold hover:bg-gray-200 transition"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1E3A8A] px-6 pb-6"
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block py-3 text-white border-b border-white/20 hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block mt-4 bg-white text-[#1E3A8A] text-center py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Get Quote
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
