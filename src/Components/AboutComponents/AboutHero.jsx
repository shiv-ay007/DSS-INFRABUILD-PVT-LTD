import React from "react";
import PageHero from "../Common/PageHero";

const AboutHero = () => {
  return (
    <PageHero
      title="About"
      highlightWord="DSS Infrabuild"
      subtitle="18+ years of engineering excellence — creating landmarks, industrial parks, and luxury living spaces across India."
      breadcrumbs={[{ name: "About Us" }]}
      bgImage="/assets/projects_media/project_media_3.jpg"
    />
  );
};

export default AboutHero;
