import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- 5 Featured Projects Data ---
const projectsData = [
  {
    id: 1,
    title: "Apex Corporate Landmark Towers",
    category: "Commercial Construction",
    location: "Gomti Nagar, Lucknow",
    href: "/project/1",
    image:
      "/assets/projects_media/project_media_21.jpg",
    fallback:
      "/assets/projects_media/project_media_22.jpg",
  },
  {
    id: 2,
    title: "The Grand Royal Villa Enclave",
    category: "Residential Architecture",
    location: "Sultanpur Road, Lucknow",
    href: "/project/2",
    image:
      "/assets/projects_media/project_media_23.jpg",
    fallback:
      "/assets/projects_media/project_media_24.jpg",
  },
  {
    id: 3,
    title: "Varanasi Mega Logistics & PEB Park",
    category: "Industrial Construction",
    location: "Varanasi Corridor",
    href: "/project/3",
    image:
      "/assets/projects_media/project_media_25.jpg",
    fallback:
      "/assets/projects_media/project_media_26.jpg",
  },
  {
    id: 7,
    title: "Steel Manufacturing Plant",
    category: "Steel Fabrication & Works",
    location: "Kanpur, UP",
    href: "/project/7",
    image:
      "/assets/projects_media/project_media_27.jpg",
    fallback:
      "/assets/projects_media/project_media_26.jpg",
  },
  {
    id: 4,
    title: "TechMatrix Hub Workspace Interior",
    category: "Interior Design & Fitout",
    location: "Vibhuti Khand, Lucknow",
    href: "/project/4",
    image:
      "/assets/projects_media/project_media_28.jpg",
    fallback:
      "/assets/projects_media/project_media_29.jpg",
  },
];

const FutureProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null); // 'prev' | 'next' | null

  const totalProjects = projectsData.length;

  // Responsive screen view handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1); // 1 card on mobile & tablet
      } else {
        setItemsPerView(2); // 2 cards on desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalProjects - itemsPerView);

  // Next Slide Handler
  const handleNext = (manual = false) => {
    if (manual) setActiveBtn("next");
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Prev Slide Handler
  const handlePrev = (manual = false) => {
    if (manual) setActiveBtn("prev");
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto Slider Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext(false);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  return (
    <section className="relative w-full py-10 sm:py-12 bg-[#f5f5f5] overflow-hidden font-sans border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER ROW (TAG, TITLE, SUBTITLE & SLIDER CONTROLS)                */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-7 gap-4"
        >
          {/* Left Text Box */}
          <div className="space-y-1.5">
            {/* Tagline */}
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
              <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                OUR WORK
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-gray-950 tracking-tight leading-tight">
              Featured <span className="text-[#e05609]">Projects</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-xs sm:text-sm font-normal">
              Exploring excellence through every project we undertake
            </p>
          </div>

          {/* Right: Dynamic Interactive Slider Control Buttons */}
          <div className="flex items-center space-x-2 self-end md:self-auto">
            {/* Prev Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => handlePrev(true)}
              aria-label="Previous project"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                activeBtn === "prev"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "bg-gray-200/80 text-gray-700 hover:bg-[#e05609] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => handleNext(true)}
              aria-label="Next project"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                activeBtn === "next"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "bg-gray-200/80 text-gray-700 hover:bg-[#e05609] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. AUTO-PLAYING PROJECT SLIDER                                            */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex -mx-2 sm:-mx-2.5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="w-full lg:w-1/2 min-w-full lg:min-w-[50%] px-2 sm:px-2.5 flex-shrink-0"
              >
                <Link
                  to={project.href}
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                  className="group relative block w-full h-[280px] sm:h-[350px] lg:h-[390px] rounded-xl overflow-hidden shadow-sm border border-gray-200/80 bg-white cursor-pointer text-white no-underline"
                >
                  {/* High Quality Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      if (project.fallback && e.currentTarget.src !== project.fallback) {
                        e.currentTarget.src = project.fallback;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90" />

                  {/* Top Right Location & Category Badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center space-x-2">
                    <span className="bg-black/60 backdrop-blur-sm text-orange-400 text-xs font-semibold px-2.5 py-1 rounded-md border border-orange-500/30 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between">
                    <div className="space-y-1">
                      <p className="text-orange-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        {project.location}
                      </p>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight drop-shadow">
                        {project.title}
                      </h3>
                    </div>

                    {/* Action Arrow Button */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-[#e05609] text-white flex items-center justify-center shadow-md flex-shrink-0 ml-3 group-hover:bg-[#c94905] transition-colors">
                      <svg
                        className="w-4 h-4 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM LINK: VIEW COMPLETE PORTFOLIO ➔                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6 sm:mt-8"
        >
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            className="inline-flex items-center space-x-2 text-[#e05609] hover:text-[#c94905] font-bold text-sm sm:text-base tracking-wide transition-colors group cursor-pointer"
          >
            <span>View Complete Portfolio</span>
            <span className="transform transition-transform duration-200 group-hover:translate-x-1 text-lg">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureProject;