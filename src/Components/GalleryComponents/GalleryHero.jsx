import React from "react";
import PageHero from "../Common/PageHero";

const GalleryHero = () => {
  return (
    <PageHero
      title="Project"
      highlightWord="Gallery"
      subtitle="A visual retrospective of structural landmarks, heavy steel assemblies, and bespoke architectural finishes built by DSS Infrabuild."
      breadcrumbs={[{ name: "Gallery" }]}
      bgImage="/assets/projects_media/project_media_19.jpg"
    />
  );
};

export default GalleryHero;
