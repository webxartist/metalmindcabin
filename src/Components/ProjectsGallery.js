"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    title: "Site Office Cabin",
    location: "Mumbai",
    img: "/images/project1.jpg",
  },
  {
    title: "Portable Security Cabin",
    location: "Navi Mumbai",
    img: "/images/project2.jpg",
  },
  {
    title: "Container Office Setup",
    location: "Pune",
    img: "/images/project3.jpg",
  },
  {
    title: "Modular Cabin Project",
    location: "Thane",
    img: "/images/project4.jpg",
  },
  {
    title: "Portable Toilet Setup",
    location: "Panvel",
    img: "/images/project5.jpg",
  },
  {
    title: "Storage Container",
    location: "Raigad",
    img: "/images/project6.jpg",
  },
];

const ProjectsGallery = () => {
  return (
    <section className="bg-[#0F172A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Projects
          </h2>
          <p className="mt-4 text-[#CBD5F5]">
            Real work. Real results. Trusted by clients across locations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#CBD5F5]">{item.location}</p>

                {/* Button */}
                <a
                  href="https://wa.me/918689970832"
                  target="_blank"
                  className="mt-3 inline-flex items-center gap-2 text-sm px-4 py-2 bg-[#F97316] text-white rounded-full w-fit hover:bg-[#FB923C] transition-all duration-300"
                >
                  <FaWhatsapp /> Get Similar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
