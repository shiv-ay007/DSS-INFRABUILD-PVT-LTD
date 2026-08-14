import React from "react";
import { motion } from "framer-motion";
import aboutimage from "../../assets/aboutimage.png";

const FounderProfile = () => {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-[#f8f9fa] group">
              <img
                src={aboutimage}
                alt="Ar. Prashant Verma - Founder & Director"
                className="w-full h-auto object-cover object-top transform -scale-x-100 transition-transform duration-500 group-hover:-scale-x-105 group-hover:scale-y-105"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-5 left-5 z-10 bg-[#e05609] text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase">
                <span>★</span>
                <span>FOUNDER & DIRECTOR</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-[#e05609] text-xs sm:text-sm font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#e05609] inline-block"></span>
              <span>MEET OUR FOUNDER</span>
            </div>

            {/* Name & Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-950 tracking-tight leading-tight">
                Ar. Prashant Verma
              </h2>
              <p className="text-[#e05609] font-bold text-sm sm:text-base mt-1.5">
                Director, DSS Infrabuild
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                With over <strong className="text-gray-900 font-bold">25 years</strong> of experience in architecture and construction, Prashant Verma is the visionary behind DSS Infrabuild's success. An alumnus of <strong className="text-gray-900 font-bold">SPA Delhi</strong>, he specializes in sustainable design, large-scale project management, and innovative construction methodologies.
              </p>
              <p>
                Under his leadership, DSS Infrabuild has delivered over <strong className="text-gray-900 font-bold">200+ projects</strong> across 9 cities, earning a reputation for quality, transparency, and timely delivery.
              </p>
            </div>

            {/* 2x2 Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 bg-[#f5f5f5] hover:bg-orange-50/70 p-3.5 rounded-xl border border-gray-200/70 transition-colors">
                <span className="text-base">📅</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  25+ Years Experience
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 bg-[#f5f5f5] hover:bg-orange-50/70 p-3.5 rounded-xl border border-gray-200/70 transition-colors">
                <span className="text-base">🎓</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  SPA Delhi Alumnus
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 bg-[#f5f5f5] hover:bg-orange-50/70 p-3.5 rounded-xl border border-gray-200/70 transition-colors">
                <span className="text-base">🏗️</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  200+ Projects Completed
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-3 bg-[#f5f5f5] hover:bg-orange-50/70 p-3.5 rounded-xl border border-gray-200/70 transition-colors">
                <span className="text-base">🌿</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Green Building Certified
                </span>
              </motion.div>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center space-x-4 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center shadow hover:opacity-90 transition-opacity"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@dssinfra.in"
                className="w-10 h-10 rounded-full bg-[#e05609] text-white flex items-center justify-center shadow hover:bg-[#c94905] transition-colors"
                aria-label="Send Email"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
