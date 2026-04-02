"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CallFloat = () => {
  return (
    <div className="fixed bottom-22 right-6 z-50 flex flex-col items-end gap-3">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block bg-[#1E3A8A] text-white px-4 py-2 rounded-lg shadow-lg text-sm"
      >
        Call Now
      </motion.div>

      {/* Button */}
      <motion.a
        href="tel:9321715392"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#1E3A8A] text-white shadow-xl hover:scale-110 transition"
      >
        <FaPhoneAlt size={20} />

        {/* Pulse Effect */}
        <span className="absolute w-full h-full rounded-full bg-[#1E3A8A]/40 animate-ping"></span>
      </motion.a>
    </div>
  );
};

export default CallFloat;
