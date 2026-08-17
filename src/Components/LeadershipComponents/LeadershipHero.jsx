import React from "react";
import PageHero from "../Common/PageHero";

const LeadershipHero = () => {
  return (
    <PageHero
      title="Our"
      highlightWord="Leadership Team"
      subtitle="Visionaries, structural engineers, and veteran project heads driving India's infrastructure forward."
      breadcrumbs={[{ name: "About", path: "/about" }, { name: "Leadership Team" }]}
      bgImage="/assets/projects_media/project_media_18.jpg"
    />
  );
};

export default LeadershipHero;
