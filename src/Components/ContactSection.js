"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919321715392";

    const text = `Hello, 
Name: ${form.name}
Phone: ${form.phone}
Requirement: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#0F172A] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get Your Cabin Today
          </h2>

          <p className="mt-4 text-[#CBD5F5]">
            Contact us for high-quality portable cabins, containers, and custom
            solutions.
          </p>

          {/* Call Button */}
          <a
            href="tel:9321715392"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-full font-semibold hover:bg-[#FB923C] transition-all duration-300"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#1E293B] p-8 rounded-xl shadow-lg border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send Inquiry
          </h3>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0F172A] text-white border border-gray-700 focus:outline-none focus:border-[#F97316]"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0F172A] text-white border border-gray-700 focus:outline-none focus:border-[#F97316]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Requirement"
            rows="4"
            onChange={handleChange}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-[#0F172A] text-white border border-gray-700 focus:outline-none focus:border-[#F97316]"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#FB923C] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
