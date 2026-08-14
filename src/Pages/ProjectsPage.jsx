import React from "react";
import ProjectsHero from "../Components/ProjectsComponents/ProjectsHero";
import ProjectsStatsBar from "../Components/ProjectsComponents/ProjectsStatsBar";
import ProjectsGrid from "../Components/ProjectsComponents/ProjectsGrid";

const ProjectsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <ProjectsHero />
      <ProjectsStatsBar />
      <ProjectsGrid />
    </div>
  );
};

export default ProjectsPage;
