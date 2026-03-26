import ContactSection from "@/Components/ContactSection";

import Hero from "@/Components/Hero";
import ProductSection from "@/Components/ProductSection";
import ProjectsGallery from "@/Components/ProjectsGallery";
import WhatsAppFloat from "@/Components/WhatsappFloat";
import WhyChooseUs from "@/Components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <WhyChooseUs />
      <ProjectsGallery />
      <ContactSection />
      <WhatsAppFloat />
    </>
  );
};

export default page;
