import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogReaderModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 select-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-10 relative space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          ✕
        </button>

        <div className="h-64 sm:h-80 rounded-xl overflow-hidden shadow">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-xs font-bold text-[#e05609]">
            <span className="bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
              {blog.category}
            </span>
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-gray-950 leading-tight">
            {blog.title}
          </h1>
          <div className="text-xs text-gray-500 pt-1">
            Authored by <strong className="text-gray-800">{blog.author}</strong> ({blog.authorRole})
          </div>
        </div>

        <div className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed space-y-4 border-t border-gray-100 pt-4">
          <p className="font-medium text-gray-900">{blog.excerpt}</p>
          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-gray-700">
            {blog.content}
          </div>
        </div>

        {/* Footer action */}
        <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-gray-400 font-semibold">
            Share this article: #DSSInfrabuild #Engineering
          </span>
          <div className="flex space-x-2">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
            >
              Back to Articles
            </button>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-md bg-[#e05609] hover:bg-[#c94905] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Consult Our Team ➔
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogReaderModal;
