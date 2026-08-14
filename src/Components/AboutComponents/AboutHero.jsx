import React from "react";
import PageHero from "../Common/PageHero";

const AboutHero = () => {
  return (
    <PageHero
      title="About"
      highlightWord="DSS Infrabuild"
      subtitle="18+ years of engineering excellence — creating landmarks, industrial parks, and luxury living spaces across India."
      breadcrumbs={[{ name: "About Us" }]}
      bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
    />
  );
};

export default AboutHero;
