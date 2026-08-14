import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects } from "../../data/projectsData";
import AboutCTA from "../AboutComponents/AboutCTA";
import ServiceQuoteModal from "../ServicesComponents/ServiceQuoteModal";
import ProjectGalleryLightbox from "./ProjectGalleryLightbox";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiAward,
  FiClock,
  FiShield,
  FiCheckCircle,
  FiDownload,
  FiCheck,
  FiSearch,
} from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const ProjectDetailView = () => {
  const { id } = useParams();

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Find project by ID or fallback to project 1
  const project =
    allProjects.find((p) => String(p.id) === String(id)) ||
    allProjects[0];

  // Comprehensive image list for lightbox
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  // Dynamic Brochure PDF Downloader / Printer
  const handleDownloadBrochure = () => {
    setDownloading(true);

    setTimeout(() => {
      // Create a printable brochure window
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${project.title} - DSS Infrabuild Brochure</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1f2937; max-width: 800px; margin: auto; }
              .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e05609; padding-bottom: 20px; margin-bottom: 25px; }
              .logo { font-size: 24px; font-weight: 900; color: #111827; }
              .logo span { color: #e05609; }
              .title { font-size: 28px; font-weight: 800; color: #111827; margin-bottom: 5px; }
              .location { color: #6b7280; font-size: 14px; margin-bottom: 20px; }
              .hero-img { width: 100%; height: 320px; object-fit: cover; border-radius: 12px; margin-bottom: 25px; }
              .metrics { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; background: #fff7ed; padding: 15px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #fed7aa; text-align: center; }
              .metric-val { font-size: 20px; font-weight: 800; color: #e05609; }
              .metric-lbl { font-size: 10px; color: #78716c; font-weight: 700; text-transform: uppercase; margin-top: 4px; }
              .section-title { font-size: 18px; font-weight: 700; color: #111827; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 25px; margin-bottom: 12px; }
              .highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
              .hl-item { background: #f9fafb; padding: 10px; border-radius: 6px; font-size: 13px; border-left: 3px solid #e05609; }
              .quick-info { margin-top: 20px; font-size: 14px; line-height: 1.8; }
              .footer { margin-top: 40px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">DSS <span>INFRABUILD</span></div>
              <div style="text-align: right; font-size: 12px; color: #6b7280;">
                Phone: +91 73930 56555<br/>Email: dssfabinteriors@gmail.com
              </div>
            </div>

            <div class="title">${project.title}</div>
            <div class="location">📍 ${project.location} | Category: ${project.category}</div>

            <img src="${project.image}" class="hero-img" alt="${project.title}" />

            <div class="metrics">
              <div>
                <div class="metric-val">${project.builtUpArea || project.area}</div>
                <div class="metric-lbl">Built-Up Area</div>
              </div>
              <div>
                <div class="metric-val">${project.duration || "24 Months"}</div>
                <div class="metric-lbl">Duration</div>
              </div>
              <div>
                <div class="metric-val">${project.status || "Completed"}</div>
                <div class="metric-lbl">Status</div>
              </div>
              <div>
                <div class="metric-val">${project.progress || "100%"}</div>
                <div class="metric-lbl">Progress</div>
              </div>
            </div>

            <div class="section-title">Project Overview</div>
            <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">${project.desc}</p>

            <div class="section-title">Quick Specifications</div>
            <div class="quick-info">
              <strong>Client:</strong> ${project.client || "Confidential"}<br/>
              <strong>Architect:</strong> ${project.architect || "DSS Architecture Group"}<br/>
              <strong>Contract Type:</strong> ${project.contractType || "Turnkey"}<br/>
              <strong>Status:</strong> ${project.status || "Completed"} (${project.progress || "100%"})
            </div>

            ${
              project.highlights && project.highlights.length > 0
                ? `
              <div class="section-title">Key Highlights</div>
              <div class="highlights">
                ${project.highlights
                  .map((h) => `<div class="hl-item">✓ ${h}</div>`)
                  .join("")}
              </div>
            `
                : ""
            }

            <div class="footer">
              DSS Infrabuild Pvt. Ltd. | Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow | www.infra.dssup.in
            </div>
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
          </html>
        `);
        printWindow.document.close();
      }

      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 600);
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* ========================================================= */}
      {/* 1. PROJECT HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center justify-center text-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 lg:pb-16 px-4 overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-4 my-auto">
          {/* Breadcrumbs Pill Badge */}
          <nav className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-300 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm mb-1">
            <Link
              to="/"
              className="hover:text-[#e05609] transition-colors flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>Home</span>
            </Link>
            <span className="text-gray-500">/</span>
            <Link to="/projects" className="hover:text-[#e05609] transition-colors">
              Projects
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#e05609] font-medium">{project.title}</span>
          </nav>

          {/* Project Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md font-sans">
            {project.title}
          </h1>

          {/* Location Pin */}
          <div className="flex items-center justify-center space-x-1.5 text-xs sm:text-sm text-gray-200 font-medium">
            <FiMapPin className="text-[#e05609] text-sm sm:text-base" />
            <span>{project.location}</span>
          </div>

          {/* 4 Stat Metric Badges Row (Evenly Spaced Matching Reference) */}
          <div className="pt-3 sm:pt-4 w-full max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16">
            {/* Stat 1: Built-Up Area */}
            <div className="text-center min-w-[120px]">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e05609] tracking-tight">
                {project.builtUpArea || project.area}
              </span>
              <span className="block text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                BUILT-UP AREA
              </span>
            </div>

            {/* Stat 2: Duration */}
            <div className="text-center min-w-[100px]">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e05609] tracking-tight">
                {project.duration || "24 Months"}
              </span>
              <span className="block text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                DURATION
              </span>
            </div>

            {/* Stat 3: Status */}
            <div className="text-center min-w-[100px]">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e05609] tracking-tight">
                {project.status || "Completed"}
              </span>
              <span className="block text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                STATUS
              </span>
            </div>

            {/* Stat 4: Progress */}
            <div className="text-center min-w-[100px]">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#e05609] tracking-tight">
                {project.progress || "100%"}
              </span>
              <span className="block text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">
                PROGRESS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN CONTENT & SIDEBAR SECTION                         */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* ========================================================= */}
          {/* LEFT MAIN CONTENT (8 COLS)                                */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-10"
          >
            {/* 1. Featured Image (Clickable for Lightbox) */}
            <div
              onClick={() => setSelectedGalleryIndex(0)}
              className="relative rounded-2xl overflow-hidden shadow-md bg-gray-100 h-80 sm:h-[450px] w-full cursor-pointer group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85";
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#e05609] text-white flex items-center justify-center shadow-lg">
                  <FiSearch className="text-xl stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* 2. Project Overview */}
            <div className="space-y-4 text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  Project Overview
                </h2>
                <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
              </div>

              <div className="space-y-3.5 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                {project.overviewParagraphs ? (
                  project.overviewParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <>
                    <p>{project.desc}</p>
                    <p>
                      At DSS Infrabuild, our multidisciplinary engineering team
                      executed this project with strict adherence to ISO & IS
                      safety protocols, delivering precision craftsmanship,
                      clash-free 3D BIM coordination, and timely milestone
                      handover.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* 3. Key Features & Scope Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4 text-left pt-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                  Key Scope & Highlights
                </h3>
                <div className="w-16 h-1 bg-[#e05609] rounded-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {project.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 bg-orange-50/50 border border-orange-100 rounded-xl p-3.5"
                    >
                      <FiCheckCircle className="text-[#e05609] text-lg flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. CHALLENGE & SOLUTION SECTION (MATCHING SCREENSHOT) */}
            <div className="space-y-4 text-left pt-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                  Challenge & Solution
                </h3>
                <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* The Challenge Card */}
                <div className="bg-gray-50/90 border border-gray-200/80 border-l-4 border-l-[#e05609] rounded-2xl p-6 sm:p-7 space-y-3 shadow-xs">
                  <div className="flex items-center space-x-2 font-extrabold text-gray-950 text-base sm:text-lg">
                    <span className="text-[#e05609] text-xl">⚠️</span>
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {project.challenge ||
                      "The site had challenging soil conditions requiring deep foundation work. Additionally, the client requested a tight 24-month schedule for a project of this scale, which typically takes 30+ months."}
                  </p>
                </div>

                {/* Our Solution Card */}
                <div className="bg-gray-50/90 border border-gray-200/80 border-l-4 border-l-[#e05609] rounded-2xl p-6 sm:p-7 space-y-3 shadow-xs">
                  <div className="flex items-center space-x-2 font-extrabold text-gray-950 text-base sm:text-lg">
                    <span className="text-[#e05609] text-xl">💡</span>
                    <span>Our Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {project.solution ||
                      "Implemented piled foundation system with soil stabilization. Used BIM technology for clash detection and 4D scheduling. Deployed 3 tower cranes and 200+ workers in shifts to accelerate construction. Completed 3 months ahead of schedule."}
                  </p>
                </div>
              </div>
            </div>

            {/* 5. PROJECT GALLERY SHOWCASE (INTERACTIVE LIGHTBOX ON CLICK) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4 text-left pt-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                    Project Gallery
                  </h3>
                  <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {project.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedGalleryIndex(idx)}
                      className="h-28 sm:h-36 rounded-xl overflow-hidden shadow-xs cursor-pointer group bg-gray-100 relative border border-gray-100 hover:border-orange-300 transition-all"
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = project.image;
                        }}
                      />
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-[#e05609] text-white flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <FiSearch className="text-base stroke-[2.5]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDEBAR (4 COLS - MATCHING REFERENCE SCREENSHOT)    */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 space-y-6 text-left"
          >
            {/* 1. QUICK INFO CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-gray-950 tracking-tight">
                  Quick Info
                </h3>
                <div className="w-full h-0.5 bg-[#e05609] mt-3" />
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Client */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Client:</span>
                  <span className="text-gray-900 font-bold text-right">
                    {project.client || "Confidential Client"}
                  </span>
                </div>

                {/* Architect */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Architect:</span>
                  <span className="text-gray-900 font-bold text-right">
                    {project.architect || "DSS Architecture Group"}
                  </span>
                </div>

                {/* Contract Type */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">
                    Contract Type:
                  </span>
                  <span className="text-gray-900 font-bold text-right">
                    {project.contractType || "Turnkey"}
                  </span>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 font-medium">Status:</span>
                  <span className="text-emerald-600 font-bold">
                    {project.status || "Completed"}
                  </span>
                </div>

                {/* Progress */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-gray-500 font-medium">Progress:</span>
                  <span className="text-gray-900 font-bold">
                    {project.progress || "100%"}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. PROJECT BROCHURE DOWNLOAD CARD */}
            <div className="bg-[#fef6f0] border border-orange-200/70 rounded-2xl p-6 sm:p-7 text-center shadow-xs space-y-3.5">
              {/* PDF Icon */}
              <div className="w-14 h-14 mx-auto rounded-xl bg-orange-100/80 text-[#e05609] flex items-center justify-center text-3xl shadow-xs">
                <FaFilePdf />
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h4 className="font-extrabold text-base sm:text-lg text-gray-950">
                  Project Brochure
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Download detailed project brochure with specifications
                </p>
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="w-full bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-orange-500/20 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
              >
                {downloaded ? (
                  <>
                    <FiCheck className="text-base text-white" />
                    <span>Brochure Downloaded!</span>
                  </>
                ) : downloading ? (
                  <span>Generating PDF...</span>
                ) : (
                  <>
                    <FiDownload className="text-base" />
                    <span>Download PDF</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* 3. CLIENT SPEAKS / TESTIMONIAL CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gray-950 tracking-tight">
                  Client Speaks
                </h3>
                <div className="w-full h-0.5 bg-[#e05609] mt-3" />
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                  "DSS Infrabuild delivered our project on time with impeccable
                  precision and structural quality. Their engineering team
                  managed all safety compliances seamlessly."
                </p>
                <div className="pt-1">
                  <span className="text-xs font-bold text-gray-900 block">
                    — Project Directorate
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {project.client || "Client Representative"}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. GET IN TOUCH CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-950 border-b border-gray-100 pb-3">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Call Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiPhone className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Call Us
                    </span>
                    <a
                      href="tel:+917393056555"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#e05609] transition-colors"
                    >
                      +91 73930 56555
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMail className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Email Us
                    </span>
                    <a
                      href="mailto:dssfabinteriors@gmail.com"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#e05609] transition-colors break-all"
                    >
                      dssfabinteriors@gmail.com
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMapPin className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Visit Us
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow
                    </p>
                  </div>
                </div>
              </div>

              {/* Inquire Quote CTA Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full bg-[#e05609] hover:bg-[#c94905] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Request Custom Quote</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* 5. WHY CHOOSE US? CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-950 border-b border-gray-100 pb-3">
                Why Choose Us?
              </h3>

              <div className="space-y-4">
                {/* 18+ Years Experience */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiAward className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      18+ Years Experience
                    </span>
                    <p className="text-xs text-gray-500">
                      Trusted by 100+ clients
                    </p>
                  </div>
                </div>

                {/* 98% On-Time Delivery */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiClock className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      98% On-Time Delivery
                    </span>
                    <p className="text-xs text-gray-500">
                      Projects delivered as promised
                    </p>
                  </div>
                </div>

                {/* Quality Guaranteed */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiShield className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      Quality Guaranteed
                    </span>
                    <p className="text-xs text-gray-500">
                      Premium materials & workmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom AboutUs CTA Banner */}
      <AboutCTA />

      {/* 4. Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedGalleryIndex !== null && (
          <ProjectGalleryLightbox
            images={galleryImages}
            initialIndex={selectedGalleryIndex}
            projectTitle={project.title}
            category={project.category}
            location={project.location}
            onClose={() => setSelectedGalleryIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* 5. Interactive Quote Request Modal */}
      <ServiceQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        serviceTitle={project.category}
        subServiceTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetailView;
