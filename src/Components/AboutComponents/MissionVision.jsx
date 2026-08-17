import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#141416] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
            Our Core Compass
          </span>
          <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-white mt-2">
            Mission, Vision & Principles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-[#1c1c1f] p-6 sm:p-8 rounded-2xl border border-neutral-800 hover:border-[#e05609] transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e05609]/20 text-[#e05609] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To deliver sustainable, future-ready infrastructure through disciplined engineering, 
              transparent pricing, and unmatched speed without ever sacrificing worker safety or quality.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-[#1c1c1f] p-6 sm:p-8 rounded-2xl border border-neutral-800 hover:border-[#e05609] transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e05609]/20 text-[#e05609] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To emerge as India’s benchmark construction and engineering partner, celebrated for transforming 
              urban landscapes and setting gold standards for architectural innovation.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="bg-[#1c1c1f] p-6 sm:p-8 rounded-2xl border border-neutral-800 hover:border-[#e05609] transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e05609]/20 text-[#e05609] flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Core Values</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Radical accountability, zero compromises on durability, continuous technological adoption, 
              and building enduring relationships anchored in mutual trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
