import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiMinimize2,
  FiMapPin,
} from "react-icons/fi";

const ProjectGalleryLightbox = ({
  images = [],
  initialIndex = 0,
  projectTitle = "Project Gallery",
  category = "Infrastructure",
  location = "",
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsZoomed(false);
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsZoomed(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none overflow-hidden"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between z-30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Project Details */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#e05609] text-white text-xs font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
              {category}
            </span>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-wide">
              {projectTitle}
            </h2>
          </div>
          {location && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <FiMapPin className="text-orange-400 text-xs" />
              {location}
            </span>
          )}
        </div>

        {/* Right: Actions (Counter, Zoom, Fullscreen, Close) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-white/10 text-gray-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/10">
            {currentIndex + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e05609] text-white flex items-center justify-center transition-colors cursor-pointer"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <FiZoomOut size={16} /> : <FiZoomIn size={16} />}
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden sm:flex w-9 h-9 rounded-full bg-white/10 hover:bg-[#e05609] text-white items-center justify-center transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer ml-1"
            title="Close Lightbox"
          >
            <FiX size={18} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-grow flex items-center justify-center p-2 sm:p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            setIsZoomed(false);
          }}
          className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center border border-white/20 hover:border-orange-400 shadow-xl transition-all cursor-pointer backdrop-blur-xs group"
          title="Previous Photo"
        >
          <FiChevronLeft className="text-xl sm:text-2xl group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Active Photo Container */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${currentImage}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: 1,
                scale: isZoomed ? 1.45 : 1,
              }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`relative flex items-center justify-center ${
                isZoomed ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              <img
                src={currentImage}
                alt={`${projectTitle} - Photo ${currentIndex + 1}`}
                className="max-h-[64vh] sm:max-h-[70vh] max-w-[92vw] sm:max-w-[84vw] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsZoomed(false);
          }}
          className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center border border-white/20 hover:border-orange-400 shadow-xl transition-all cursor-pointer backdrop-blur-xs group"
          title="Next Photo"
        >
          <FiChevronRight className="text-xl sm:text-2xl group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Bar: Thumbnail Strip */}
      <div
        className="w-full bg-black/75 backdrop-blur-md border-t border-white/10 px-4 sm:px-8 py-3 z-30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setIsZoomed(false);
              }}
              className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                currentIndex === idx
                  ? "ring-2 ring-[#e05609] ring-offset-2 ring-offset-black scale-105 opacity-100 shadow-md shadow-orange-500/40"
                  : "opacity-50 hover:opacity-90 hover:scale-102"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectGalleryLightbox;
