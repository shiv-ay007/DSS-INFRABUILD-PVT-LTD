import React from "react";
import PageHero from "../Common/PageHero";

const CareersHero = () => {
  return (
    <PageHero
      title="Careers at"
      highlightWord="DSS Infrabuild"
      subtitle="Shape India's skyline with a team that values engineering ingenuity, site safety, and continuous professional growth."
      breadcrumbs={[{ name: "About", path: "/about" }, { name: "Careers" }]}
      bgImage="/assets/projects_media/project_media_17.jpg"
    />
  );
};

export default CareersHero;
