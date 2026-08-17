import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { blogsList, blogCategories } from "../../data/blogsData";

const BlogsGrid = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogsList.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Search & Category Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200"
      >
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {blogCategories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "bg-[#f5f5f5] text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Search Box */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f5f5f5] border border-gray-300 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#e05609]"
          />
          <svg
            className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredBlogs.map((blog) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={blog.id}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#e05609] shadow-sm transition-colors duration-200 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Blog Image */}
              <div className="h-52 w-full overflow-hidden relative bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      blog.fallback ||
                      "/assets/projects_media/project_media_16.jpg";
                  }}
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  {blog.category}
                </div>
              </div>

              {/* Blog Text */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#e05609]">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#e05609] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    By {blog.author}
                  </span>
                  <span className="text-xs font-bold text-[#e05609] flex items-center space-x-1">
                    <span>Read Article</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BlogsGrid;
