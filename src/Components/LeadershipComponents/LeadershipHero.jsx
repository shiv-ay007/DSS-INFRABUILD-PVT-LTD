import React from "react";
import PageHero from "../Common/PageHero";

const LeadershipHero = () => {
  return (
    <PageHero
      title="Our"
      highlightWord="Leadership Team"
      subtitle="Visionaries, structural engineers, and veteran project heads driving India's infrastructure forward."
      breadcrumbs={[{ name: "About", path: "/about" }, { name: "Leadership Team" }]}
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    />
  );
};

export default LeadershipHero;
