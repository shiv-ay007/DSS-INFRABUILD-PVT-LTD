import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope, FaXTwitter, FaInstagram } from "react-icons/fa6";
import aboutimage from "../../assets/aboutimage.png";

const FounderProfile = () => {
  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Founder Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#f8f9fa] group">
              <img
                src={aboutimage}
                alt="Ar. Prashant Verma - Founder & Director"
                className="w-full h-auto object-cover object-top transform -scale-x-100 transition-transform duration-500 group-hover:-scale-x-105 group-hover:scale-y-105"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-5 left-5 z-10 bg-[#e05609] text-white px-3.5 py-1.5 rounded-lg shadow-md flex items-center space-x-1.5 text-[11px] font-bold tracking-wider uppercase">
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
            className="lg:col-span-7 space-y-5"
          >
            {/* Tagline */}
            <div className="flex items-center space-x-2 text-[#e05609] text-xs sm:text-sm font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#e05609] inline-block"></span>
              <span>MEET OUR FOUNDER</span>
            </div>

            {/* Name & Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-gray-950 tracking-tight leading-tight">
                Ar. Prashant Verma
              </h2>
              <p className="text-[#e05609] font-bold text-sm sm:text-base mt-1">
                Director, DSS Infrabuild
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-3.5 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                With over <strong className="text-gray-900 font-bold">25 years</strong> of experience in architecture and construction, Prashant Verma is the visionary behind DSS Infrabuild's success. An alumnus of <strong className="text-gray-900 font-bold">SPA Delhi</strong>, he specializes in sustainable design, large-scale project management, and innovative construction methodologies.
              </p>
              <p>
                Under his leadership, DSS Infrabuild has delivered over <strong className="text-gray-900 font-bold">200+ projects</strong> across 9 cities, earning a reputation for quality, transparency, and timely delivery.
              </p>
            </div>

            {/* 2x2 Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-3 bg-[#f8f9fa] hover:bg-orange-50/70 p-3 rounded-xl border border-gray-200/60 transition-colors">
                <span className="text-base">📅</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  25+ Years Experience
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-[#f8f9fa] hover:bg-orange-50/70 p-3 rounded-xl border border-gray-200/60 transition-colors">
                <span className="text-base">🎓</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  SPA Delhi Alumnus
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-[#f8f9fa] hover:bg-orange-50/70 p-3 rounded-xl border border-gray-200/60 transition-colors">
                <span className="text-base">🏢</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  200+ Projects Delivered
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-[#f8f9fa] hover:bg-orange-50/70 p-3 rounded-xl border border-gray-200/60 transition-colors">
                <span className="text-base">🍂</span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Sustainable Design Expert
                </span>
              </div>
            </div>

            {/* Social & Contact Links (All 4 Icons Matching Reference) */}
            <div className="flex items-center space-x-3 pt-1">
              {/* 1. LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-orange-50 hover:border-[#e05609] text-gray-600 hover:text-[#e05609] flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-sm sm:text-base" />
              </a>

              {/* 2. Email */}
              <a
                href="mailto:dssfabinteriors@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-orange-50 hover:border-[#e05609] text-gray-600 hover:text-[#e05609] flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="Send Email"
              >
                <FaEnvelope className="text-sm sm:text-base" />
              </a>

              {/* 3. X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-orange-50 hover:border-[#e05609] text-gray-600 hover:text-[#e05609] flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="X Profile"
              >
                <FaXTwitter className="text-sm sm:text-base" />
              </a>

              {/* 4. Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-orange-50 hover:border-[#e05609] text-gray-600 hover:text-[#e05609] flex items-center justify-center transition-all duration-200 shadow-2xs"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="text-sm sm:text-base" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
