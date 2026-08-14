import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRulerCombined,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
// Local Fallback Video
import heroVideo from "../../assets/Homepagebackground.mp4";

// --- Custom Inline SVG Icons ---
const BriefcaseIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" />
  </svg>
);

const ChatIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

// Key Stats Data
const statsData = [
  {
    value: "1.2M+",
    label: "Sq. Ft. Delivered",
    icon: <FaRulerCombined className="text-[#e05609] text-xs sm:text-sm mr-1.5 flex-shrink-0" />,
  },
  {
    value: "12+",
    label: "Years of Expertise",
    icon: <FaCalendarCheck className="text-[#e05609] text-xs sm:text-sm mr-1.5 flex-shrink-0" />,
  },
  {
    value: "9",
    label: "Cities Served",
    icon: <FaMapMarkerAlt className="text-[#e05609] text-xs sm:text-sm mr-1.5 flex-shrink-0" />,
  },
  {
    value: "45+",
    label: "Expert Professionals",
    icon: <FaUsers className="text-[#e05609] text-xs sm:text-sm mr-1.5 flex-shrink-0" />,
  },
];

// Services list for the infinite running marquee ticker
const tickerItems = [
  "ARCHITECTURAL PLANNING",
  "CONSTRUCTION",
  "INTERIOR DESIGN",
  "FABRICATION WORKS",
  "CONSULTANCY",
  "RESIDENTIAL CONSTRUCTION",
  "COMMERCIAL CONSTRUCTION",
  "INDUSTRIAL PROJECTS",
  "TURNKEY SOLUTIONS",
];

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* 60fps Smooth Infinite Scrolling CSS & Zoom-Height Responsive Rules */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 26s linear infinite;
        }
        .animate-infinite-marquee:hover {
          animation-play-state: paused;
        }

        /* Stats & scroll indicator appear when zoomed out (70%-75%) or on tall viewports */
        .hero-zoom-stats {
          display: none;
        }
        @media (min-height: 820px) {
          .hero-zoom-stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. HERO MAIN SECTION                                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen lg:min-h-[100vh] flex items-center justify-center overflow-hidden bg-black text-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16">
        
        {/* Crystal Clear HD Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1920&q=85"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dgppevvr2/video/upload/v1779886169/DSS_Infrabuild_Video_pwq4d1.mp4"
            type="video/mp4"
          />
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Rich Black Tint & Contrast Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.82) 100%)",
          }}
        />

        {/* Hero Content Box with Framer Motion */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto">
          
          {/* --- Top Pill Badge --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-4 sm:px-5 py-1.5 rounded-full border border-[#e05609]/50 bg-black/70 text-[#e05609] text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase mb-5 sm:mb-6 shadow-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e05609] animate-pulse"></span>
            <span>EST. 2014 — 12+ YEARS OF ENGINEERING EXCELLENCE</span>
          </motion.div>

          {/* --- Main Headline --- */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-bold tracking-tight text-white leading-[1.12] mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] font-sans"
          >
            Shaping the <span className="text-[#e05609] font-bold">Future</span>
            <br className="hidden sm:inline" /> with Innovation.
          </motion.h1>

          {/* --- Subtitle Paragraph --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="max-w-3xl text-sm sm:text-base md:text-lg text-gray-100 font-normal leading-relaxed mb-7 sm:mb-8 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            End-to-end construction, design, and project management across residential,
            commercial, and industrial sectors. DSS Infrabuild — where engineering meets
            excellence.
          </motion.p>

          {/* --- Dual Action Buttons --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            {/* 1. View Our Works (Orange CTA) */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/projects"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white px-6 py-2.5 sm:py-3 rounded-md text-[14px] sm:text-[15px] font-semibold tracking-wide shadow-sm transition-colors duration-150 cursor-pointer"
              >
                <BriefcaseIcon className="w-4 h-4 text-white" />
                <span>View Our Works</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* 2. Discuss Your Project (Glassmorphic Button) */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-black/40 hover:bg-black/60 text-white border border-white/25 hover:border-white/40 backdrop-blur-sm px-6 py-2.5 sm:py-3 rounded-md text-[14px] sm:text-[15px] font-semibold tracking-wide shadow-sm transition-colors duration-150 cursor-pointer"
              >
                <ChatIcon className="w-4 h-4 text-white" />
                <span>Discuss Your Project</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Bottom Zoom-Responsive Stats & Scroll Indicator (Visible on 70%-75% zoom / tall screens) --- */}
          <div className="hero-zoom-stats">
            {/* --- Divider Line --- */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              className="w-full max-w-3xl h-[1px] bg-white/20 mt-8 sm:mt-10 mb-6 sm:mb-8"
            />

            {/* --- 4 Key Metrics / Stats Section --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl text-center"
            >
              {statsData.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center space-y-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#e05609] tracking-tight drop-shadow-sm font-sans">
                    {stat.value}
                  </span>
                  <div className="flex items-center justify-center text-gray-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* --- Mouse Scroll to Explore Indicator --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-7 sm:mt-9 flex flex-col items-center gap-2 cursor-pointer select-none group"
              onClick={() => {
                window.scrollBy({ top: 550, behavior: "smooth" });
              }}
            >
              <div className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-[#e05609] flex items-start justify-center p-1 transition-colors duration-300">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-[#e05609] rounded-full"
                />
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                SCROLL TO EXPLORE
              </span>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ORANGE INFINITE RUNNING MARQUEE TICKER                                  */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#e05609] py-3 sm:py-3.5 overflow-hidden shadow-md z-20 select-none border-y border-orange-600">
        <div className="animate-infinite-marquee">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 sm:space-x-8 px-3 sm:px-4 flex-shrink-0"
            >
              <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="text-orange-200/90 text-xs sm:text-sm font-black select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;