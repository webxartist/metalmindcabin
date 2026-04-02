"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
};

const AboutSection = () => {
  return (
    <section className="relative bg-[#F5E6D3] py-24 px-6 overflow-hidden">
      {/* Soft Blue Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1E3A8A]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
            About <span className="text-[#1E3A8A]">MetalMind Cabin</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg">
            MetalMind Cabin is a trusted manufacturer of portable cabins, office
            containers, and modular solutions designed for modern industrial and
            commercial needs.
          </p>

          <p className="mt-4 text-gray-700">
            We focus on delivering durable, high-quality structures with modern
            design, fast execution, and customer satisfaction.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            {[
              "Premium industrial materials",
              "Custom cabin design solutions",
              "Fast delivery & installation",
              "Trusted by multiple industries",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-[#1E3A8A]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-[#1E3A8A]">
                <Counter target={100} />
              </h3>
              <p className="text-gray-600 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1E3A8A]">
                <Counter target={50} />
              </h3>
              <p className="text-gray-600 text-sm">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1E3A8A]">
                <Counter target={5} />
              </h3>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-[#172554] transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="/metalabout.png"
            alt="About MetalMind Cabin"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-lg border border-[#1E3A8A]/20 shadow-lg">
            <p className="text-[#1E3A8A] text-sm font-semibold">
              ✔ 100+ Successful Projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
