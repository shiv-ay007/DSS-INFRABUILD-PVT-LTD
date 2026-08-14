import React from "react";
import AboutHero from "../Components/AboutComponents/AboutHero";
import OurJourney from "../Components/AboutComponents/OurJourney";
import MissionVision from "../Components/AboutComponents/MissionVision";
import CoreValues from "../Components/AboutComponents/CoreValues";
import AboutStats from "../Components/AboutComponents/AboutStats";
import AboutCTA from "../Components/AboutComponents/AboutCTA";
import ProjectGallery from "../Components/HomeComponents/ProjectGallery";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <AboutHero />
      <OurJourney />
      <MissionVision />
      <CoreValues />
      <AboutStats />
      <ProjectGallery/>
      <AboutCTA /> 
    </div>
  );
};

export default AboutPage;
