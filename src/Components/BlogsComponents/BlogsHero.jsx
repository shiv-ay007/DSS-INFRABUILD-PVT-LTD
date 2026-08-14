import React from "react";
import PageHero from "../Common/PageHero";

const BlogsHero = () => {
  return (
    <PageHero
      title="Industry Insights &"
      highlightWord="Engineering Articles"
      subtitle="Expert analyses, structural technology guides, and architectural best practices authored by DSS Infrabuild leaders."
      breadcrumbs={[{ name: "Blogs" }]}
      bgImage="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1920&q=80"
    />
  );
};

export default BlogsHero;
