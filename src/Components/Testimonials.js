"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Construction Contractor, Mumbai",
    review: "Cabin quality top class hai. Finishing premium hai.",
  },
  {
    name: "Imran Khan",
    role: "Site Supervisor",
    review: "Delivery time pe mila aur installation smooth tha.",
  },
  {
    name: "Amit Patel",
    role: "Warehouse Owner",
    review: "Storage container strong hai aur weather resistant bhi.",
  },
  {
    name: "Sanjay Yadav",
    role: "Security Agency Owner",
    review: "Security cabin ka design professional lagta hai.",
  },
  {
    name: "Faizan Sheikh",
    role: "Developer",
    review: "Modular house ne client ko impress kar diya.",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#F5E6D3] py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#1E3A8A]">
          Trusted by Clients Across India
        </h2>
        <p className="text-gray-600 mt-2">Real experiences. Real results.</p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white border border-[#1E3A8A]/10 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              {/* Review */}
              <p className="text-gray-700 text-sm mb-4">“{item.review}”</p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-bold">
                  {item.name[0]}
                </div>

                <div>
                  <h4 className="text-[#1E3A8A] text-sm font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
