import React from "react";
import PageHero from "../Common/PageHero";

const CareersHero = () => {
  return (
    <PageHero
      title="Careers at"
      highlightWord="DSS Infrabuild"
      subtitle="Shape India's skyline with a team that values engineering ingenuity, site safety, and continuous professional growth."
      breadcrumbs={[{ name: "About", path: "/about" }, { name: "Careers" }]}
      bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1920&q=80"
    />
  );
};

export default CareersHero;
