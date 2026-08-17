import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "1.2M+", label: "SQ. FT. DELIVERED" },
  { number: "12+", label: "YEARS OF EXCELLENCE" },
  { number: "200+", label: "PROJECTS COMPLETED" },
  { number: "45+", label: "EXPERT PROFESSIONALS" },
  { number: "9", label: "CITIES SERVED" },
  { number: "100+", label: "HAPPY CLIENTS" },
];

const AboutStats = () => {
  return (
    <section
      className="relative py-16 sm:py-20 overflow-hidden bg-[#0c0c0e] text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/projects_media/project_media_4.jpg')`,
      }}
    >
      {/* Crisp Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-[#0c0c0e]/90 pointer-events-none" />

      {/* Stats Cards Grid Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center text-center py-7 sm:py-9 px-3 sm:px-4 rounded-2xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 hover:border-[#e05609] shadow-xl transition-all duration-300"
            >
              {/* Stat Number */}
              <span className="block text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#e05609] tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                {s.number}
              </span>

              {/* Stat Label */}
              <span className="text-[10.5px] sm:text-[11.5px] font-bold text-gray-200 group-hover:text-white uppercase tracking-wider mt-3 block leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
