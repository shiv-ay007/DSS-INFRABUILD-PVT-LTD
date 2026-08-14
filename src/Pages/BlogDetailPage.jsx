import React, { useEffect } from "react";
import BlogDetailView from "../Components/BlogsComponents/BlogDetailView";

const BlogDetailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <BlogDetailView />;
};

export default BlogDetailPage;
