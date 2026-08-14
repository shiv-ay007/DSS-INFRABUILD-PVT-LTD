import React from "react";
import PageHero from "../Common/PageHero";

const ProjectsHero = () => {
  return (
    <PageHero
      title="Our Built"
      highlightWord="Portfolio"
      subtitle="1.2M+ sq. ft. of structural milestones delivered across residential, commercial, industrial, and heavy infrastructure sectors."
      breadcrumbs={[{ name: "Projects" }]}
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    />
  );
};

export default ProjectsHero;
