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
          backgroundImage: "url('/herooo.png')", // 👉 add your image in public/images
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/80"></div>

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
          <span className="text-[#F97316]">Built for Strength & Style</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[#CBD5F5]"
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
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F97316] text-white font-semibold hover:bg-[#FB923C] transition"
          >
            <FaWhatsapp /> WhatsApp Now
          </a>

          {/* Call */}
          <a
            href="tel:9321715392"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-[#CBD5F5] text-sm"
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
