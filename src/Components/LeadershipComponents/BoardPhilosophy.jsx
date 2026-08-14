import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BoardPhilosophy = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#111] text-white">
      {/* Background Image Layer - Bright & Clear */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1920&q=80"
          alt="Engineering & Construction Backdrop"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />
      </div>

      {/* Glassmorphic Container Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl bg-black/60 hover:bg-black/70 backdrop-blur-md border border-white/20 p-8 sm:p-14 shadow-2xl text-center space-y-6 overflow-hidden"
        >
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-gradient-to-r from-transparent via-[#e05609] to-transparent pointer-events-none" />

          {/* Section Tag */}
          <div className="inline-flex items-center space-x-2 text-[#e05609] text-xs font-bold uppercase tracking-widest bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/30">
            <span>🏛️</span>
            <span>BOARD PHILOSOPHY</span>
          </div>

          {/* Quote Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
            "A building is only as enduring as the{" "}
            <span className="text-[#e05609]">honesty of its foundations.</span>"
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From safety drills at sunrise to structural load audits at dusk, our executive team spends real time on-site, ensuring that every project bearing the DSS name stands as an enduring benchmark of excellence.
          </p>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="pt-4 inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-orange-500/25 transition-colors cursor-pointer"
            >
              <span>Schedule an Executive Consultation</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoardPhilosophy;
