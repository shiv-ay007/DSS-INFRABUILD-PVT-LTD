import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BoardPhilosophy = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#0e0e11] text-white">
      {/* Background Image Layer - Deep Architectural Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/projects_media/project_media_47.jpg"
          alt="Engineering & Construction Backdrop"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle Dark Gradient Overlay for Maximum Contrast */}
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-black/50 to-[#0e0e11]" />
        
        {/* Orange Center Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#e05609]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Full-Section Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 flex flex-col items-center justify-center"
        >
          {/* Section Tag Badge */}
          <div className="inline-flex items-center space-x-2 text-[#e05609] text-xs sm:text-sm font-bold uppercase tracking-widest bg-orange-500/15 px-5 py-2 rounded-full border border-orange-500/30 shadow-sm backdrop-blur-sm">
            <span>🏛️</span>
            <span>BOARD PHILOSOPHY</span>
          </div>

          {/* Large Quote Heading */}
          <h2 className="text-[1.3rem] sm:text-[2.2rem] font-extrabold text-white tracking-tight leading-[1.25] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans">
            "A building is only as enduring as the{" "}
            <span className="text-[#e05609]">honesty of its foundations.</span>"
          </h2>

          {/* Scaled Subtitle Description */}
          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            From safety drills at sunrise to structural load audits at dusk, our executive team spends real time on-site, ensuring that every project bearing the DSS name stands as an enduring benchmark of excellence.
          </p>

          {/* Large CTA Button */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="pt-2 sm:pt-4 inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2.5 bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer"
            >
              <span>Schedule an Executive Consultation</span>
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoardPhilosophy;
