"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    title: "Portable Office Cabin",
    img: "/images/cabin1.jpg",
  },
  {
    title: "Site Office Container",
    img: "/images/cabin2.jpg",
  },
  {
    title: "Security Guard Cabin",
    img: "/images/cabin3.jpg",
  },
  {
    title: "Portable Toilet Cabin",
    img: "/images/cabin4.jpg",
  },
  {
    title: "Modular Container House",
    img: "/images/cabin5.jpg",
  },
  {
    title: "Storage Container",
    img: "/images/cabin6.jpg",
  },
];

const ProductSection = () => {
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
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Button */}
                <a
                  href="https://wa.me/918689970832"
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-2 text-sm px-4 py-2 bg-[#F97316] text-white rounded-full w-fit hover:bg-[#FB923C] transition"
                >
                  <FaWhatsapp /> Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
