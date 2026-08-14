import React from "react";
import ServicesHero from "../Components/ServicesComponents/ServicesHero";
import ServicesGrid from "../Components/ServicesComponents/ServicesGrid";
import AboutCTA from "../Components/AboutComponents/AboutCTA";

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <AboutCTA />
    </div>
  );
};

export default ServicesPage;
