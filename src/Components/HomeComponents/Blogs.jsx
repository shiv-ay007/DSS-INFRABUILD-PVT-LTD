import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogsList } from "../../data/blogsData";

// --- Custom Inline SVG Icons ---
const CalendarIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const Blogs = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const totalBlogs = blogsList.length;

  // Responsive screen view handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalBlogs - itemsPerView);

  // Next Slide Handler
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Prev Slide Handler
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto Slider Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section className="relative w-full py-12 sm:py-14 lg:py-16 bg-[#f8f8f8] overflow-hidden font-sans border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* 1. TOP HEADER ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-9 gap-4"
        >
          {/* Left Text Box */}
          <div className="space-y-1.5 text-left">
            {/* Top Tag */}
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
              <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                INSIGHTS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-gray-950 tracking-tight leading-tight">
              Latest <span className="text-[#e05609]">Articles</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-xs sm:text-sm font-normal">
              Expert insights from the construction industry
            </p>
          </div>

          {/* Right: View All Button */}
          <div className="self-start md:self-auto">
            <Link
              to="/blogs"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="inline-flex items-center space-x-1.5 border border-[#e05609] text-[#e05609] hover:bg-[#e05609] hover:text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-sm cursor-pointer"
            >
              <span>View All</span>
              <ArrowRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* 2. AUTO-PLAYING BLOG CAROUSEL */}
        <div
          className="relative w-full group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Overflow Track Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex -mx-2.5 sm:-mx-3 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {blogsList.map((blog) => (
                <div
                  key={blog.id}
                  className="w-full sm:w-1/2 lg:w-1/3 min-w-full sm:min-w-[50%] lg:min-w-[33.333333%] px-2.5 sm:px-3 flex-shrink-0"
                >
                  <div
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    className="group/card h-full bg-white rounded-xl border border-gray-200/80 hover:border-orange-300 shadow-sm transition-colors duration-150 overflow-hidden flex flex-col justify-between cursor-pointer"
                  >
                    {/* Top: Blog Image */}
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            blog.fallback ||
                            "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
                      />

                      {/* Category Tag */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-white/20 shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Middle: Content Box */}
                    <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3 text-left">
                      <div className="space-y-1.5">
                        {/* Date */}
                        <div className="flex items-center space-x-1.5 text-[#e05609] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                          <CalendarIcon className="w-3.5 h-3.5" />
                          <span>{blog.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-950 font-bold text-[15px] sm:text-[16px] leading-snug tracking-tight group-hover/card:text-[#e05609] transition-colors line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed line-clamp-2 font-normal">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Bottom: Read More Link Button */}
                      <div className="pt-2 border-t border-gray-100">
                        <span className="inline-flex items-center space-x-1.5 text-[#e05609] hover:text-[#c94905] font-bold text-xs sm:text-sm tracking-wide transition-colors group/link">
                          <span>Read More</span>
                          <span className="transform transition-transform duration-150 group-hover/link:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Left Control Arrow */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handlePrev}
            aria-label="Previous blog slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/65 hover:bg-[#e05609] text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-150 z-20 focus:outline-none cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Floating Right Control Arrow */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleNext}
            aria-label="Next blog slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/65 hover:bg-[#e05609] text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-150 z-20 focus:outline-none cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;