"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    title: "Portable Office Cabin",
    img: "/site.png",
    desc: "Perfect for construction sites, startups & temporary offices.",
    material: "MS Steel Structure, Insulated Panels",
    size: "10x20 ft (Customizable)",
  },
  {
    title: "Site Office Container",
    img: "/site.png",
    desc: "Ideal for site management with modern office setup.",
    material: "Heavy Duty Steel + Glass + Interior Finish",
    size: "Custom Sizes Available",
  },
  {
    title: "Security Guard Cabin",
    img: "/security.png",
    desc: "Compact cabin for security personnel with clear visibility.",
    material: "Powder Coated Steel",
    size: "4x4 ft / 6x6 ft",
  },
  {
    title: "Portable Toilet Cabin",
    img: "/toilet.png",
    desc: "Hygienic and easy-to-maintain portable sanitation solution.",
    material: "FRP / Steel Hybrid",
    size: "Standard & Custom",
  },
  {
    title: "Modular Container House",
    img: "/Modularhouse.png",
    desc: "Luxury modular homes built using containers.",
    material: "Premium Insulated Steel Panels",
    size: "Fully Customizable",
  },
  {
    title: "Storage Container",
    img: "/storage.png",
    desc: "Secure storage solution for materials & goods.",
    material: "Heavy Duty Cargo Steel",
    size: "20ft / 40ft",
  },
];

export default function ProductSection() {
  const [selected, setSelected] = useState(null);

  const phone = "919321715392";

  const generateWhatsAppLink = (product) => {
    const message = `Hello MetalMindCabin 👋

I want quotation for:

📦 Product: ${product.title}
📏 Size: ${product.size}
🧱 Material: ${product.material}

Please share full details, price & delivery timeline.

Thank you!`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-[#0F172A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Premium Cabin Solutions
          </h2>
          <p className="mt-4 text-[#CBD5F5]">
            Designed for durability, flexibility, and modern usage.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              className="cursor-pointer relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#111827] text-white rounded-2xl max-w-lg w-full p-6 relative">
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={selected.img}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>

              <p className="text-gray-300 mb-4">{selected.desc}</p>

              <div className="text-sm text-gray-400 space-y-1 mb-5">
                <p>
                  <b>Material:</b> {selected.material}
                </p>
                <p>
                  <b>Size:</b> {selected.size}
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={generateWhatsAppLink(selected)}
                target="_blank"
                className="w-full flex justify-center items-center gap-2 bg-[#F97316] hover:bg-[#FB923C] py-3 rounded-lg font-semibold transition"
              >
                <FaWhatsapp /> Get Quotation on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
