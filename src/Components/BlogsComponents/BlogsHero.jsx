import React from "react";
import PageHero from "../Common/PageHero";

const BlogsHero = () => {
  return (
    <PageHero
      title="Industry Insights &"
      highlightWord="Engineering Articles"
      subtitle="Expert analyses, structural technology guides, and architectural best practices authored by DSS Infrabuild leaders."
      breadcrumbs={[{ name: "Blogs" }]}
      bgImage="/assets/projects_media/project_media_17.jpg"
    />
  );
};

export default BlogsHero;
