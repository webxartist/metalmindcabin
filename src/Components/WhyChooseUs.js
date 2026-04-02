"use client";

import { motion } from "framer-motion";
import { FaIndustry, FaClock, FaShieldAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaIndustry />,
    title: "High Quality Materials",
    desc: "We use durable and industry-grade materials for long-lasting performance.",
  },
  {
    icon: <FaClock />,
    title: "Fast Delivery",
    desc: "Quick manufacturing and on-time delivery for all your projects.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted & Reliable",
    desc: "100+ successful projects with satisfied clients across industries.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc: "Experienced professionals delivering precision and excellence.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5E6D3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-700">
            We deliver quality, speed, and trust for every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white p-6 rounded-xl text-center border border-[#1E3A8A]/10 shadow-md hover:shadow-xl hover:border-[#1E3A8A]/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-[#1E3A8A] mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
