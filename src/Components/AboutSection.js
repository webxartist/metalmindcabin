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
    <section className="relative bg-[#0F172A] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F97316]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            About <span className="text-[#F97316]">MetalMind Cabin</span>
          </h2>

          <p className="mt-6 text-[#CBD5F5] text-lg">
            MetalMind Cabin is a trusted manufacturer of portable cabins, office
            containers, and modular solutions designed for modern industrial and
            commercial needs.
          </p>

          <p className="mt-4 text-[#CBD5F5]">
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
              <div key={i} className="flex items-center gap-3 text-[#CBD5F5]">
                <FaCheckCircle className="text-[#F97316]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-[#F97316]">
                <Counter target={100} />
              </h3>
              <p className="text-[#CBD5F5] text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#F97316]">
                <Counter target={50} />
              </h3>
              <p className="text-[#CBD5F5] text-sm">Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#F97316]">
                <Counter target={5} />
              </h3>
              <p className="text-[#CBD5F5] text-sm">Years Experience</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/contact"
            className="inline-block mt-10 px-8 py-3 bg-[#F97316] text-white rounded-full font-semibold hover:bg-[#FB923C] transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="/metalabout.png"
            alt="About MetalMind Cabin"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-[#1E293B] px-5 py-3 rounded-lg border border-white/10 shadow-lg">
            <p className="text-white text-sm font-semibold">
              ✔ 100+ Successful Projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
