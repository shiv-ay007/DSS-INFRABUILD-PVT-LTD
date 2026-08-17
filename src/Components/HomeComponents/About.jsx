import React from "react";
import { motion } from "framer-motion";
// 👉 Image import from your assets folder (about.png)
import aboutImg from "../../assets/about.png";

// --- Custom Inline SVG Icons (Zero Extra NPM Dependencies) ---
const CalendarIcon = ({ className = "w-6 h-6 text-[#e05609]" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BuildingsIcon = ({ className = "w-6 h-6 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 2H9c-1.1 0-2 .9-2 2v4H5c-1.1 0-2 .9-2 2v12h18V4c0-1.1-.9-2-2-2zM5 10h2v2H5v-2zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm6 2H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V6h2v2zm0-4H9V2.5h2V4zm6 16h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V6h4v2z" />
  </svg>
);

const HappySmileyIcon = ({ className = "w-6 h-6 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
);

const PlayCircleIcon = ({ className = "w-5 h-5 text-white" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

// Timeline Milestones Data
const timelineMilestones = [
  { year: "2014", label: "Founded with a vision" },
  { year: "2016", label: "First major project" },
  { year: "2019", label: "Expanded to 5 cities" },
  { year: "2021", label: "1M+ sq ft delivered" },
  { year: "2026", label: "Industry leader", active: true },
];

const About = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 1. TOP 2-COLUMN MAIN CONTENT (LARGE & SPACIOUS)                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* --- LEFT COLUMN: HEADING, STORY & METRIC CARDS (6.5 Cols) --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6"
          >
            
            {/* Top Section Tag & Main Headline */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
                <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                  OUR STORY
                </span>
              </div>

              {/* Main Section Headline */}
              <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-gray-950 tracking-tight leading-tight">
                Building <span className="text-[#e05609]">Dreams</span> Since{" "}
                <span className="text-[#e05609]">2014</span>
              </h2>
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-3 sm:space-y-3.5">
              <p className="text-gray-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Founded with a vision to revolutionize the construction industry, DSS Infrabuild has
                grown from a small team of passionate engineers to one of India's most trusted
                construction companies.
              </p>

              <p className="text-gray-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
                Over the past <strong className="text-[#e05609] font-semibold">12 years</strong>, our
                journey is marked by{" "}
                <strong className="text-[#e05609] font-semibold">1.2 million+ square feet</strong> of
                built space,{" "}
                <strong className="text-[#e05609] font-semibold">200+ successful projects</strong>, and{" "}
                <strong className="text-[#e05609] font-semibold">100+ happy clients</strong> across 9
                cities. Every milestone reflects our commitment to quality, innovation, and client
                satisfaction.
              </p>
            </div>

            {/* --- 3 Metric Stat Cards (Matching infra.dssup.in hover behavior: no fade, no lift, pure color change) --- */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              
              {/* Card 1 */}
              <div className="bg-white hover:bg-[#FFF0E6] border border-gray-200/80 hover:border-[#e05609] rounded-xl p-3.5 sm:p-5 shadow-xs transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[125px] sm:min-h-[140px] select-none">
                <div className="mb-1.5 text-[#e05609]">
                  <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e05609]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#e05609] tracking-tight">
                  12+
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-bold text-gray-500 uppercase tracking-wider mt-1 leading-tight">
                  YEARS OF EXCELLENCE
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white hover:bg-[#FFF0E6] border border-gray-200/80 hover:border-[#e05609] rounded-xl p-3.5 sm:p-5 shadow-xs transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[125px] sm:min-h-[140px] select-none">
                <div className="mb-1.5 text-[#e05609]">
                  <BuildingsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e05609]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#e05609] tracking-tight">
                  9
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-bold text-gray-500 uppercase tracking-wider mt-1 leading-tight">
                  CITIES SERVED
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white hover:bg-[#FFF0E6] border border-gray-200/80 hover:border-[#e05609] rounded-xl p-3.5 sm:p-5 shadow-xs transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer min-h-[125px] sm:min-h-[140px] select-none">
                <div className="mb-1.5 text-[#e05609]">
                  <HappySmileyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e05609]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#e05609] tracking-tight">
                  100+
                </div>
                <div className="text-[9.5px] sm:text-[10.5px] font-bold text-gray-500 uppercase tracking-wider mt-1 leading-tight">
                  HAPPY CLIENTS
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: CONSTRUCTION IMAGE & TIMELINE --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-4 sm:space-y-5"
          >
            
            {/* 1. Large Construction Site Image Box */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200/70 bg-gray-100 group w-full">
              <img
                src={aboutImg}
                alt="DSS Infrabuild Construction Work"
                className="w-full h-[250px] sm:h-[290px] lg:h-[315px] xl:h-[325px] object-cover block transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "/assets/projects_media/project_media_20.jpg";
                }}
              />

              {/* Gradient overlay on bottom of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating Orange Button */}
              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-[#e05609] hover:bg-[#c94905] text-white px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-md font-bold text-xs sm:text-[13px] shadow-lg backdrop-blur-sm transition-colors duration-150 cursor-pointer"
                >
                  <PlayCircleIcon className="w-4 h-4 text-white" />
                  <span>12 Years of Excellence</span>
                </motion.div>
              </div>
            </div>

            {/* 2. Horizontal Interactive Timeline Underneath the Image */}
            <div className="w-full pt-2">
              <div className="relative w-full">
                
                {/* Connecting Timeline Gray Line */}
                <div className="absolute top-[9px] left-3 right-3 h-[2px] bg-gray-200/90 -z-0"></div>

                {/* Milestone 5 Steps */}
                <div className="grid grid-cols-5 gap-1 sm:gap-3 relative z-10">
                  {timelineMilestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      
                      {/* Step Node Circle */}
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                          milestone.active
                            ? "bg-[#e05609] ring-4 ring-orange-200 scale-110 shadow-sm"
                            : "bg-white border-2 border-gray-300 group-hover:border-[#e05609]"
                        }`}
                      >
                        {milestone.active && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>

                      {/* Year */}
                      <span className="text-[#e05609] font-bold text-xs sm:text-[13.5px] mt-2.5">
                        {milestone.year}
                      </span>

                      {/* Label */}
                      <span className="text-gray-500 text-[10px] sm:text-[11.5px] leading-snug mt-0.5 max-w-[85px] sm:max-w-[95px]">
                        {milestone.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;