import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Custom Inline SVG Icons (Zero Extra Dependencies) ---
const UserExpertIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const QualityMedalIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5zM12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const ClockDeliveryIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

const CameraTechIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

const InvoiceCostIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);

const VideoCctvIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
  </svg>
);

// 6 Core Value Proposition Reasons Data
const whyDssReasons = [
  {
    id: 1,
    title: "Expert Team — Avg 12+ Yrs",
    description: "Our engineers bring a combined 500+ years of site experience.",
    icon: UserExpertIcon,
  },
  {
    id: 2,
    title: "Grade-A Quality Materials",
    description: "Every material is tested, documented, and traceable to source.",
    icon: QualityMedalIcon,
  },
  {
    id: 3,
    title: "98% On-Time Delivery",
    description: "Milestone-driven schedules keep every project on track.",
    icon: ClockDeliveryIcon,
  },
  {
    id: 4,
    title: "BIM & Drone Technology",
    description: "Real-time site intelligence via drone surveys and 3D BIM.",
    icon: CameraTechIcon,
  },
  {
    id: 5,
    title: "Full Cost Transparency",
    description: "Itemised BOQ, monthly billing, no hidden variations.",
    icon: InvoiceCostIcon,
  },
  {
    id: 6,
    title: "24/7 Site Intelligence",
    description: "CCTV monitoring and client dashboards for full visibility.",
    icon: VideoCctvIcon,
  },
];

const WhyDss = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-20 bg-[#0d0d10] text-white overflow-hidden font-sans border-t border-neutral-900">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-[#e05609]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#e05609]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. CENTERED HEADER SECTION (TAGLINE, TITLE, SUBTITLE)                     */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-2 mb-8 sm:mb-10 max-w-3xl mx-auto"
        >
          {/* Top Tag */}
          <div className="inline-flex items-center justify-center space-x-2.5">
            <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
            <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              WHY DSS
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-tight">
            Six reasons clients trust us with their{" "}
            <span className="text-[#e05609]">biggest projects.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-xs sm:text-sm font-normal">
            Nine distinct disciplines. One integrated delivery team.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. SIX VALUE CARDS GRID WITH FRAMER MOTION                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whyDssReasons.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-xl p-6 sm:p-7 text-center flex flex-col items-center justify-center min-h-[230px] sm:min-h-[250px] cursor-pointer transition-colors duration-200 ${
                  isActive
                    ? "bg-[#191513] border border-[#e05609]/80 shadow-md shadow-orange-500/10"
                    : "bg-[#141417] border border-neutral-800/80 hover:border-neutral-700"
                }`}
              >
                {/* --- Icon Badge --- */}
                <div
                  className={`w-12 h-12 sm:w-13 sm:h-13 rounded-lg flex items-center justify-center mb-5 shadow-sm transition-colors duration-150 ${
                    isActive
                      ? "bg-[#e05609] text-white"
                      : "bg-[#221a16] border border-orange-900/30 text-[#e05609] group-hover:border-[#e05609]/50"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* --- Title --- */}
                <h3
                  className={`text-base sm:text-lg font-bold tracking-tight mb-2 transition-colors duration-150 ${
                    isActive ? "text-[#e05609]" : "text-white group-hover:text-[#e05609]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* --- Description --- */}
                <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-xs font-normal">
                  {item.description}
                </p>

                {/* Bottom hover accent bar */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-200 ${
                    isActive ? "w-16 bg-[#e05609]" : "w-0 bg-transparent group-hover:w-10 group-hover:bg-[#e05609]/60"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDss;