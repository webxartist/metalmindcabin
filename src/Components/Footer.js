"use client";

import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] text-white pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            <img src="/logoo.png" alt="" height={100} width={100} />
            MetalMind<span className="text-gray-400">Cabin</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Premium manufacturer of portable cabins, modular containers, and
            industrial solutions built for durability, strength, and modern use.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Products", link: "/products" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-white transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            Our Products
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">
              Portable Office Cabin
            </li>
            <li className="hover:text-white transition">
              Site Office Container
            </li>
            <li className="hover:text-white transition">
              Security Guard Cabin
            </li>
            <li className="hover:text-white transition">
              Portable Toilet Cabin
            </li>
            <li className="hover:text-white transition">
              Modular Container House
            </li>
            <li className="hover:text-white transition">Storage Container</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            Contact Info
          </h3>

          {/* Phone */}
          <p className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition">
            <FaPhoneAlt /> +91 9321715392
          </p>

          {/* WhatsApp */}
          <p className="flex items-center gap-2 mt-3 text-gray-400 text-sm hover:text-white transition">
            <FaWhatsapp /> WhatsApp Support Available
          </p>

          {/* Address 1 */}
          <div className="mt-5">
            <p className="flex items-start gap-2 text-gray-400 text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <b className="text-white">Head Office:</b> <br />
                Plot No.7, Khotari Compound , Near Nahar Amrit Sakti, Behind
                Rahmani Hotel, Khairani Road Sakinaka Mumbai 400 072{" "}
              </span>
            </p>
          </div>

          {/* Address 2 */}
          <div className="mt-4">
            <p className="flex items-start gap-2 text-gray-400 text-sm">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                <b className="text-white">Factory:</b> <br />
                Plot no 51/A, Autoline Industrial park Private Limited, Near
                Pune polymers, Mahalunge,Talegoan-Chakan Road,pune-410501.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MetalMind Cabin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
