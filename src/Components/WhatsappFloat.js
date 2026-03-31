"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919321715392"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl shadow-lg hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;
