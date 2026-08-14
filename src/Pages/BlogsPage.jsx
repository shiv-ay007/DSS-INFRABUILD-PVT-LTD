import React from "react";
import BlogsHero from "../Components/BlogsComponents/BlogsHero";
import BlogsGrid from "../Components/BlogsComponents/BlogsGrid";

const BlogsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <BlogsHero />
      <BlogsGrid />
    </div>
  );
};

export default BlogsPage;
