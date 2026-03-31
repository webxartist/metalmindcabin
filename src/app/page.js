// import ContactSection from "@/Components/ContactSection";

import AboutSection from "@/Components/AboutSection";
import Hero from "@/Components/Hero";
import ProductSection from "@/Components/ProductSection";
// import ProjectsGallery from "@/Components/ProjectsGallery";
import TestimonialSlider from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs";
import ContactSection from "@/Components/ContactSection";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseUs />
      <AboutSection />
      {/* <ProjectsGallery /> */}
      {/* <ContactSection /> */}
      <TestimonialSlider />
      <ContactSection />
    </>
  );
};

export default page;
