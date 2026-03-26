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
    <section className="bg-[#0F172A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-[#CBD5F5]">
            We deliver quality, speed, and trust for every project.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-[#1E293B] p-6 rounded-xl text-center border border-white/10 hover:border-[#F97316] transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-[#F97316] mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              {/* Desc */}
              <p className="mt-3 text-[#CBD5F5] text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
