import React from "react";
import PageHero from "../Common/PageHero";

const ServicesHero = () => {
  return (
    <PageHero
      title="What"
      highlightWord="We Do"
      subtitle="Comprehensive construction solutions tailored to your needs"
      breadcrumbs={[{ name: "Services" }]}
      bgImage="/assets/projects_media/project_media_50.jpg"
    />
  );
};

export default ServicesHero;
