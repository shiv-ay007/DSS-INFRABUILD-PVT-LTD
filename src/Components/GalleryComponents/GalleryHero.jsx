import React from "react";
import PageHero from "../Common/PageHero";

const GalleryHero = () => {
  return (
    <PageHero
      title="Project"
      highlightWord="Gallery"
      subtitle="A visual retrospective of structural landmarks, heavy steel assemblies, and bespoke architectural finishes built by DSS Infrabuild."
      breadcrumbs={[{ name: "Gallery" }]}
      bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
    />
  );
};

export default GalleryHero;
