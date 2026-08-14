import React from "react";
import PageHero from "../Common/PageHero";

const ServicesHero = () => {
  return (
    <PageHero
      title="What"
      highlightWord="We Do"
      subtitle="Comprehensive construction solutions tailored to your needs"
      breadcrumbs={[{ name: "Services" }]}
      bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1920&auto=format&fit=crop&q=85"
    />
  );
};

export default ServicesHero;
