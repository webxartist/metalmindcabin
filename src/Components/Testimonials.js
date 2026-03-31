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
    <section className="bg-black py-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#F97316]">
          Trusted by Clients Across India
        </h2>
        <p className="text-gray-400 mt-2">Real experiences. Real results.</p>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:scale-105 transition"
            >
              <p className="text-gray-300 text-sm mb-4">“{item.review}”</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-black font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
