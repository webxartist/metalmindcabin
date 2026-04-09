"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const GSTBanner = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 text-sm md:text-base font-medium">
          <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            GST No: <span className="font-semibold">27BNNPK5442H1ZQ</span>
          </span>

          <span className="hidden md:block text-white/70">
            | Trusted Portable Cabin Manufacturer
          </span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 text-sm md:text-base">
          {/* Location */}
          <div className="flex items-center gap-2 text-white/90">
            <FaMapMarkerAlt className="text-xs" />
            <span>Thane, Navi-Mumbai</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-5 bg-white/30"></div>

          {/* Phone */}
          <a
            href="tel:9321715392"
            className="flex items-center gap-2 bg-white text-[#1E3A8A] px-4 py-1.5 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <FaPhoneAlt className="text-xs" />
            Call Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GSTBanner;
