// import ContactSection from "@/Components/ContactSection";

import AboutSection from "@/Components/AboutSection";
import Hero from "@/Components/Hero";
import ProductSection from "@/Components/ProductSection";
// import ProjectsGallery from "@/Components/ProjectsGallery";
import TestimonialSlider from "@/Components/Testimonials";
import WhyChooseUs from "@/Components/WhyChooseUs";
import ContactSection from "@/Components/ContactSection";
import ProductAbout from "@/Components/ProductAbout";
import React from "react";
import GSTBanner from "@/Components/GSTBanner";
// import QuatationMaker from "../Components/QuatationMaker";

const page = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseUs />
      <AboutSection />
      <GSTBanner />
      <ProductAbout />
      {/* <ProjectsGallery /> */}
      {/* <ContactSection /> */}
      <TestimonialSlider />
      <ContactSection />
      {/* <QuatationMaker /> */}
    </>
  );
};

export default page;
