import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Authentic Project Image Imports from src/assets ---
import etawaConst1 from "../../assets/Etawa House/Construction/WhatsApp Image 2026-07-20 at 1.44.45 PM.jpeg";
import etawaInt1 from "../../assets/Etawa House/Interior/WhatsApp Image 2026-07-20 at 1.44.46 PM (2).jpeg";
import etawaInt2 from "../../assets/Etawa House/Interior/WhatsApp Image 2026-07-20 at 1.44.47 PM (1).jpeg";

import anshalInt1 from "../../assets/Project Anshal/Interior/WhatsApp Image 2026-07-20 at 1.44.36 PM.jpeg";
import anshalInt4 from "../../assets/Project Anshal/Interior/WhatsApp Image 2026-07-20 at 1.44.39 PM.jpeg";
import anshalInt5 from "../../assets/Project Anshal/Interior/WhatsApp Image 2026-07-20 at 1.44.40 PM.jpeg";

import p3Const1 from "../../assets/Project 3/Construction/WhatsApp Image 2026-07-20 at 1.42.30 PM (1).jpeg";
import p3Int1 from "../../assets/Project 3/Interior/124.jpeg";

import p4Const1 from "../../assets/Project 4/Construction/WhatsApp Image 2026-07-20 at 1.44.48 PM.jpeg";
import p4Const2 from "../../assets/Project 4/Construction/WhatsApp Image 2026-07-20 at 1.44.49 PM (1).jpeg";

import p5Const1 from "../../assets/Project 5/Construction/WhatsApp Image 2026-07-20 at 1.45.16 PM.jpeg";
import p5Int1 from "../../assets/Project 5/Interior/WhatsApp Image 2026-07-20 at 9.19.27 AM (2).jpeg";

const galleryItems = [
  {
    id: 1,
    title: "Etawa House — Column & RCC Superstructure",
    category: "Civil Construction",
    image: etawaConst1,
  },
  {
    id: 2,
    title: "Project Anshal — Designer Living Space & False Ceiling",
    category: "Interior Design",
    image: anshalInt1,
  },
  {
    id: 3,
    title: "Project 3 — Foundation & Structural Site Execution",
    category: "Construction & Engineering",
    image: p3Const1,
  },
  {
    id: 4,
    title: "Project 4 — Multi-Level Commercial Framework",
    category: "Civil & Structural",
    image: p4Const1,
  },
  {
    id: 5,
    title: "Project Anshal — Premium Wall Craft & Ambient Lighting",
    category: "Interior Design",
    image: anshalInt4,
  },
  {
    id: 6,
    title: "Project 5 — Structural Site Work & Framing",
    category: "Civil Construction",
    image: p5Const1,
  },
  {
    id: 7,
    title: "Etawa House — Luxury Interior Living Space",
    category: "Interior Design",
    image: etawaInt1,
  },
  {
    id: 8,
    title: "Project 3 — Luxury Bedroom Suite & Custom Paneling",
    category: "Interior Design",
    image: p3Int1,
  },
  {
    id: 9,
    title: "Project Anshal — Elegant Dining & Modular Finishing",
    category: "Interior Design",
    image: anshalInt5,
  },
  {
    id: 10,
    title: "Project 4 — RCC Beam & Slab Reinforcement",
    category: "Civil & Structural",
    image: p4Const2,
  },
  {
    id: 11,
    title: "Etawa House — Designer Ceiling & Cove Lights",
    category: "Interior Design",
    image: etawaInt2,
  },
  {
    id: 12,
    title: "Project 5 — Modern Interior Living & Hallway",
    category: "Interior Design",
    image: p5Int1,
  },
];

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Full-Screen Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalItems = galleryItems.length;

  // Responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Next & Prev for Slider
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto Slider Timer
  useEffect(() => {
    if (isPaused || lightboxOpen) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, handleNext]);

  // Open Lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsZoomed(false);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close Lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsZoomed(false);
    document.body.style.overflow = "auto";
  };

  // Lightbox Next / Prev
  const nextLightboxImage = () => {
    setIsZoomed(false);
    setLightboxIndex((prev) => (prev >= totalItems - 1 ? 0 : prev + 1));
  };

  const prevLightboxImage = () => {
    setIsZoomed(false);
    setLightboxIndex((prev) => (prev <= 0 ? totalItems - 1 : prev - 1));
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="relative w-full py-10 sm:py-12 bg-[#fafafa] overflow-hidden font-sans border-t border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-1.5 mb-5 sm:mb-7 max-w-2xl mx-auto"
        >
          {/* Top Tag */}
          <div className="inline-flex items-center justify-center space-x-2.5">
            <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
            <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              VISUAL SHOWCASE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold text-gray-950 tracking-tight leading-tight">
            Project <span className="text-[#e05609]">Gallery</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-xs sm:text-sm font-normal">
            A glimpse into our construction excellence (Click to view full screen)
          </p>
        </motion.div>

        {/* 2. AUTO-PLAYING GALLERY SLIDER */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Overflow Container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex -mx-2 sm:-mx-2.5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 min-w-full sm:min-w-[50%] lg:min-w-[33.333333%] px-2 sm:px-2.5 flex-shrink-0"
                >
                  <div
                    onClick={() => openLightbox(index)}
                    className="group relative block w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden shadow-sm border border-gray-200/60 bg-gray-100 cursor-pointer"
                    title="Click to view full image"
                  >
                    {/* HD Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        if (item.fallback && e.currentTarget.src !== item.fallback) {
                          e.currentTarget.src = item.fallback;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 sm:p-5 text-white">
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-[#e05609] text-[11px] font-bold uppercase tracking-wider mb-1 block">
                            {item.category}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white drop-shadow">
                            {item.title}
                          </h3>
                        </div>

                        {/* Zoom Icon Pill */}
                        <div className="w-8 h-8 rounded-md bg-[#e05609] text-white flex items-center justify-center shadow-md flex-shrink-0 ml-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Left Control Arrow */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handlePrev}
            aria-label="Previous gallery image"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/65 hover:bg-[#e05609] text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-150 z-20 focus:outline-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Floating Right Control Arrow */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleNext}
            aria-label="Next gallery image"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/65 hover:bg-[#e05609] text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-colors duration-150 z-20 focus:outline-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* 3. LIGHTBOX MODAL WITH FRAMER MOTION ANIMATION */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div
              className="relative z-20 w-full px-5 py-4 flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-sm sm:text-base font-semibold tracking-wide text-gray-300">
                {lightboxIndex + 1} / {totalItems}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                  className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                >
                  {isZoomed ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close Lightbox"
                  className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Middle Stage: Image with Scale Transition */}
            <div
              className="relative flex-1 flex items-center justify-center px-4 sm:px-14 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Nav Arrow Button */}
              <button
                type="button"
                onClick={prevLightboxImage}
                aria-label="Previous Image"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center transition-all duration-150 backdrop-blur-sm shadow-xl focus:outline-none cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Centered Image with Motion Animation */}
              <div className="relative max-w-[92vw] max-h-[78vh] flex items-center justify-center overflow-hidden">
                <motion.img
                  key={lightboxIndex}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: isZoomed ? (window.innerWidth < 640 ? 1.35 : 1.5) : 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].title}
                  onError={(e) => {
                    if (galleryItems[lightboxIndex].fallback && e.currentTarget.src !== galleryItems[lightboxIndex].fallback) {
                      e.currentTarget.src = galleryItems[lightboxIndex].fallback;
                    }
                  }}
                  className="max-h-[78vh] max-w-[92vw] w-auto h-auto object-contain rounded-md shadow-2xl select-none cursor-pointer"
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              {/* Right Nav Arrow Button */}
              <button
                type="button"
                onClick={nextLightboxImage}
                aria-label="Next Image"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center transition-all duration-150 backdrop-blur-sm shadow-xl focus:outline-none cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Bar: Image Category & Title */}
            <div
              className="relative z-20 w-full px-5 py-4 text-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-gray-200 text-sm sm:text-base font-semibold tracking-wide drop-shadow">
                {galleryItems[lightboxIndex].category} — {galleryItems[lightboxIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;