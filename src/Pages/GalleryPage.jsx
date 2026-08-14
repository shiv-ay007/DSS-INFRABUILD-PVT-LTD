import React from "react";
import GalleryHero from "../Components/GalleryComponents/GalleryHero";
import GalleryGrid from "../Components/GalleryComponents/GalleryGrid";

const GalleryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  );
};

export default GalleryPage;
