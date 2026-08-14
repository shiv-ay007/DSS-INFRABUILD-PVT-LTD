import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "1.2M+", label: "Sq. Ft. Built" },
  { number: "200+", label: "Projects Completed" },
  { number: "9", label: "Cities Served" },
  { number: "100%", label: "On-Time Delivery" },
  { number: "18+", label: "Years Experience" },
];

const ProjectsStatsBar = () => {
  return (
    <section className="bg-[#f5f5f5] py-8 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={idx === 4 ? "col-span-2 sm:col-span-1" : ""}
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-[#e05609] block">
                {s.number}
              </span>
              <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsStatsBar;
