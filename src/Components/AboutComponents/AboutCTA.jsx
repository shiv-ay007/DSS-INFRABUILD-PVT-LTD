import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-[#111] text-white">
      {/* Background Image Layer - Crisp Industrial Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=2400&auto=format&fit=crop&q=90"
          alt="Modern Architecture Construction"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2400&q=90";
          }}
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80" />
      </div>

      {/* Main Glassmorphic CTA Card Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl bg-black/65 hover:bg-black/75 backdrop-blur-md border border-white/20 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 transition-colors"
        >
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-[#e05609]/30 to-transparent rounded-br-full pointer-events-none" />

          {/* Left Text Content */}
          <div className="space-y-3 max-w-2xl text-left w-full relative z-10">
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 text-[#e05609] text-xs font-bold uppercase tracking-widest">
              <span>🤝</span>
              <span>LET'S WORK TOGETHER</span>
            </div>

            {/* Heading */}
            <h2 className="text-[1.3rem] sm:text-[2.2rem] font-extrabold text-white tracking-tight leading-tight">
              Ready to Build Your{" "}
              <span className="text-[#e05609]">Dream Project?</span>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl">
              From concept to completion, we're here to bring your vision to life with quality and precision.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto flex-shrink-0 relative z-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-colors cursor-pointer text-center"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <a
                href="tel:+917393056555"
                className="w-full inline-flex items-center justify-center space-x-2 bg-black/40 hover:bg-orange-500/20 border border-orange-500/80 hover:border-orange-500 text-orange-400 hover:text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-colors cursor-pointer text-center"
              >
                <span>Call +91 73930 56555</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
