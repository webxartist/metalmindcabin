"use client";

import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const specifications = [
  {
    title: "Base Frame",
    items: [
      'Bottom Frame: 100mm x 50mm "I" Channel',
      "Top Frame: 50mm x 50mm MS Square Pipe",
      'Stiffener Bottom: 100mm x 50mm "I" Channel',
      "Stiffener Top: 40mm x 20mm MS Square Pipe",
      "Side Posts: 75mm x 75mm MS Square Pipe (2.8mm Thick)",
    ],
  },
  {
    title: "Side & End Walls",
    items: [
      "GI Sheet (Essar / Uttam / Posco)",
      "ACP / Prelaminated / PVC Panels",
      "Corrosion Resistant Sheets",
    ],
  },
  {
    title: "Flooring System",
    items: ["18mm Cement Fiber Board", "Vinyl Carpet Finish"],
  },
  {
    title: "Roof",
    items: ["Waterproof GI Sheet", "False Ceiling ACP / PVC"],
  },
  {
    title: "Paint",
    items: ["Phosphate Treatment", "1 Coat Epoxy Primer", "2 Coat Epoxy Paint"],
  },
  {
    title: "Insulation",
    items: ["50mm Glass Wool (16kg/m³)"],
  },
  {
    title: "Doors & Windows",
    items: [
      "Godrej Lock System Door",
      "Sliding Aluminum Windows",
      "Safety Grills",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Concealed Copper Wiring",
      "220-240V AC Supply",
      "AC Provision Available",
      "Earthing System",
    ],
  },
];

const features = [
  "Impact Resistant",
  "Fire Resistant",
  "Moisture Resistant",
  "Weather Resistant",
  "Asbestos Free",
];

export default function ProductSpecification() {
  return (
    <section className="bg-[#F5E6D3] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
            Portable Office Cabin Specifications
          </h2>
          <p className="text-gray-700 mt-3">
            Built with strong materials and industrial-grade finishing
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="/site.png"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />

            <div className="absolute bottom-0 left-0 w-full bg-[#1E3A8A] p-4 rounded-b-2xl">
              <h3 className="text-white text-xl font-bold">
                Portable Office Cabin
              </h3>
            </div>
          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-white border border-[#1E3A8A]/20 rounded-xl p-5 hover:shadow-lg transition"
              >
                <h3 className="text-[#1E3A8A] font-semibold mb-3 text-sm">
                  {spec.title}
                </h3>

                <ul className="space-y-2 text-gray-700 text-xs">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#1E3A8A]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2 rounded-full text-sm"
            >
              <FaCheckCircle />
              {f}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/919321715392?text=Hello%20I%20want%20quotation%20for%20Portable%20Office%20Cabin"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#172554] px-8 py-3 rounded-full text-white font-semibold transition"
          >
            <FaWhatsapp /> Get Quotation
          </a>
        </div>
      </div>
    </section>
  );
}
