import React from "react";
import PageHero from "../Common/PageHero";

const ProjectsHero = () => {
  return (
    <PageHero
      title="Our Built"
      highlightWord="Portfolio"
      subtitle="1.2M+ sq. ft. of structural milestones delivered across residential, commercial, industrial, and heavy infrastructure sectors."
      breadcrumbs={[{ name: "Projects" }]}
      bgImage="/assets/projects_media/project_media_18.jpg"
    />
  );
};

export default ProjectsHero;
