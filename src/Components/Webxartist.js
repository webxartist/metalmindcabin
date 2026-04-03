"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGoogle,
  FaSearch,
  FaServer,
  FaCode,
  FaBullhorn,
  FaPaintBrush,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaGoogle />,
    title: "Google Search Console",
    desc: "Setup & verification for Google indexing.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Meta tags, sitemap & basic SEO setup.",
  },
  {
    icon: <FaServer />,
    title: "Final Deployment",
    desc: "Website goes live with full testing.",
  },
];

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern websites using MERN & Next.js.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Meta Ads, SEO & business growth.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    desc: "Creative branding & social media design.",
  },
];

const PaymentAndPromo = () => {
  const redirect = "https://webxartist.com";

  return (
    <section className="overflow-x-hidden">
      {/* ================= PAYMENT SECTION ================= */}
      <div className="bg-[#F5E6D3] py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A]">
              Complete Your Website Setup
            </h2>
            <p className="mt-4 text-gray-700">
              Finish your remaining payment to activate final setup & go live.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border border-[#1E3A8A]/10 text-center"
              >
                <div className="text-3xl text-[#1E3A8A] mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1E3A8A]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Payment Box */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#1E3A8A]/20 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">
              Remaining Payment Required
            </h3>

            <p className="mt-3 text-gray-600">
              Once payment is completed, we will instantly activate all services
              and make your website live on Google.
            </p>

            <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
              {[
                "Google Search Console Setup",
                "Website Indexing",
                "SEO Optimization",
                "Final Launch",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[#1E3A8A]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href={redirect}
              target="_blank"
              className="inline-block mt-8 px-8 py-3 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-[#172554] transition"
            >
              Complete Payment
            </a>
          </div>
        </div>
      </div>

      {/* ================= ADS SECTION ================= */}
      <div className="bg-[#1E3A8A] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Learn & Grow with{" "}
              <span className="text-[#F5E6D3]">WebXArtist</span>
            </h2>

            <p className="mt-6 text-gray-200">
              Join our professional courses or grow your business with our
              digital services.
            </p>

            {/* Courses */}
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ Full Stack Development (MERN)</li>
              <li>✔ Digital Marketing</li>
              <li>✔ Graphic Design</li>
              <li>✔ Computer Courses</li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <a
                href={redirect}
                target="_blank"
                className="px-6 py-3 bg-[#F5E6D3] text-[#1E3A8A] font-semibold rounded-full hover:bg-white transition"
              >
                Join Now
              </a>

              <a
                href={redirect}
                target="_blank"
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#1E3A8A] transition"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-md"
              >
                <div className="text-2xl text-[#F5E6D3] mb-2">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{item.desc}</p>
              </div>
            ))}

            {/* Highlight */}
            <div className="col-span-2 bg-[#F5E6D3] text-[#1E3A8A] p-6 rounded-xl text-center">
              <h3 className="font-bold">100+ Students & Projects Completed</h3>
              <p className="text-sm mt-2">
                Start your journey with real-world skills & live projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentAndPromo;
