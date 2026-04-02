"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroo.png')",
        }}
      />

      {/* Blue Overlay instead of dark black */}
      <div className="absolute inset-0 bg-[#1E3A8A]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Premium Portable Cabins <br />
          <span className="text-[#F5E6D3]">
            Built for Strength & Durability
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          We design and manufacture high-quality portable cabins, office
          containers, and site solutions for modern businesses.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/919321715392"
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1E3A8A] font-semibold hover:bg-gray-200 transition"
          >
            <FaWhatsapp /> WhatsApp Now
          </a>

          {/* Call */}
          <a
            href="tel:9321715392"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#1E3A8A] transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-gray-200 text-sm"
        >
          <span>✔ 100+ Projects Completed</span>
          <span>✔ High Quality Materials</span>
          <span>✔ Fast Delivery</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
