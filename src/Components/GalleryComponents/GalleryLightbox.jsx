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
  FiLayers,
  FiHome,
  FiMapPin,
  FiInfo,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { MdConstruction } from "react-icons/md";

const GalleryLightbox = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const [photoFilter, setPhotoFilter] = useState("all");
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Filter photos for the current project
  const availablePhotos = project?.photos || [];
  const filteredPhotos =
    photoFilter === "all"
      ? availablePhotos
      : photoFilter === "interior"
      ? availablePhotos.filter((p) => p.type === "Interior Design")
      : availablePhotos.filter((p) => p.type === "Construction Site");

  // Fallback to all photos if filter yields empty
  const activePhotoList =
    filteredPhotos.length > 0 ? filteredPhotos : availablePhotos;

  // Safe active photo
  const currentPhoto =
    activePhotoList[activePhotoIndex] || activePhotoList[0] || {};

  // Reset photo index when project or filter changes
  useEffect(() => {
    setActivePhotoIndex(0);
    setIsZoomed(false);
  }, [project?.id, photoFilter]);

  // Current project index in allProjects
  const currentProjectIndex = allProjects.findIndex(
    (p) => p.id === project?.id
  );
  const prevProject =
    allProjects[
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length
    ];
  const nextProject =
    allProjects[(currentProjectIndex + 1) % allProjects.length];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) => (prev + 1) % activePhotoList.length);
      }
      if (e.key === "ArrowLeft") {
        setActivePhotoIndex(
          (prev) => (prev - 1 + activePhotoList.length) % activePhotoList.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoList.length, onClose]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const interiorCount = availablePhotos.filter(
    (p) => p.type === "Interior Design"
  ).length;
  const constructionCount = availablePhotos.filter(
    (p) => p.type === "Construction Site"
  ).length;

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
        {/* Left: Project Name, Location & Category */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#e05609] text-white text-xs font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
              {project.category}
            </span>
            <h2 className="text-white font-bold text-base sm:text-lg tracking-wide flex items-center gap-2">
              <span>{project.projectName}</span>
              <span className="hidden md:inline text-gray-400 font-normal text-sm">
                — {project.title}
              </span>
            </h2>
          </div>
          {project.location && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <FiMapPin className="text-orange-400 text-xs" />
              {project.location}
            </span>
          )}
        </div>

        {/* Center: Interior / Construction Filter Tabs (if both exist) */}
        <div className="hidden lg:flex items-center bg-white/10 p-1 rounded-full border border-white/10 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setPhotoFilter("all")}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
              photoFilter === "all"
                ? "bg-[#e05609] text-white shadow-sm"
                : "text-gray-300 hover:text-white"
            }`}
          >
            All Photos ({availablePhotos.length})
          </button>
          {interiorCount > 0 && (
            <button
              type="button"
              onClick={() => setPhotoFilter("interior")}
              className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                photoFilter === "interior"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <HiSparkles className="text-amber-300 text-xs" />
              Interior Design ({interiorCount})
            </button>
          )}
          {constructionCount > 0 && (
            <button
              type="button"
              onClick={() => setPhotoFilter("construction")}
              className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all cursor-pointer ${
                photoFilter === "construction"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <MdConstruction className="text-orange-400 text-xs" />
              Construction Site ({constructionCount})
            </button>
          )}
        </div>

        {/* Right: Actions (Counter, Zoom, Fullscreen, Close) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-white/10 text-gray-200 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/10">
            {activePhotoIndex + 1} / {activePhotoList.length}
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

      {/* Mobile Tab Filter Bar */}
      <div
        className="lg:hidden flex items-center justify-center gap-1.5 bg-black/70 px-4 py-2 border-b border-white/10 text-xs z-20 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setPhotoFilter("all")}
          className={`px-3 py-1 rounded-full whitespace-nowrap ${
            photoFilter === "all"
              ? "bg-[#e05609] text-white font-bold"
              : "bg-white/10 text-gray-300"
          }`}
        >
          All ({availablePhotos.length})
        </button>
        {interiorCount > 0 && (
          <button
            type="button"
            onClick={() => setPhotoFilter("interior")}
            className={`px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1 ${
              photoFilter === "interior"
                ? "bg-[#e05609] text-white font-bold"
                : "bg-white/10 text-gray-300"
            }`}
          >
            <HiSparkles className="text-amber-300 text-xs" /> Interior (
            {interiorCount})
          </button>
        )}
        {constructionCount > 0 && (
          <button
            type="button"
            onClick={() => setPhotoFilter("construction")}
            className={`px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1 ${
              photoFilter === "construction"
                ? "bg-[#e05609] text-white font-bold"
                : "bg-white/10 text-gray-300"
            }`}
          >
            <MdConstruction className="text-orange-400 text-xs" /> Site (
            {constructionCount})
          </button>
        )}
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-grow flex items-center justify-center p-2 sm:p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() =>
            setActivePhotoIndex(
              (prev) =>
                (prev - 1 + activePhotoList.length) % activePhotoList.length
            )
          }
          className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center border border-white/20 hover:border-orange-400 shadow-xl transition-all cursor-pointer backdrop-blur-xs group"
          title="Previous Photo"
        >
          <FiChevronLeft className="text-xl sm:text-2xl group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Active Photo with Animation */}
        <div className="relative max-w-full max-h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${project.id}-${activePhotoIndex}-${currentPhoto.src}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: isZoomed ? 1.45 : 1,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className={`relative flex items-center justify-center ${
                isZoomed ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title || project.title}
                className="max-h-[58vh] sm:max-h-[64vh] max-w-[92vw] sm:max-w-[84vw] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              {/* Photo Type Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold shadow-lg">
                {currentPhoto.type === "Interior Design" ? (
                  <>
                    <HiSparkles className="text-amber-400 text-sm" />
                    <span className="text-amber-200">Interior Design</span>
                  </>
                ) : (
                  <>
                    <MdConstruction className="text-orange-400 text-sm" />
                    <span className="text-orange-200">Construction Site</span>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() =>
            setActivePhotoIndex(
              (prev) => (prev + 1) % activePhotoList.length
            )
          }
          className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#e05609] text-white flex items-center justify-center border border-white/20 hover:border-orange-400 shadow-xl transition-all cursor-pointer backdrop-blur-xs group"
          title="Next Photo"
        >
          <FiChevronRight className="text-xl sm:text-2xl group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Bar: Caption & Interactive Thumbnail Strip */}
      <div
        className="w-full bg-black/75 backdrop-blur-md border-t border-white/10 px-4 sm:px-8 py-3 z-30 space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Caption & Project Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 max-w-6xl mx-auto">
          {/* Photo Caption Details */}
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-orange-400 flex items-center gap-2">
              <span>{currentPhoto.title || project.title}</span>
              <span className="text-xs font-normal text-gray-400">
                ({project.projectName})
              </span>
            </h4>
            <p className="text-xs text-gray-300 mt-0.5 line-clamp-2 max-w-3xl">
              {currentPhoto.desc || project.desc}
            </p>
          </div>

          {/* Quick Switch to Next/Previous Project */}
          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-1 cursor-pointer"
              title={`Switch to ${prevProject.projectName}`}
            >
              <FiChevronLeft size={14} />
              <span className="hidden md:inline">{prevProject.projectName}</span>
              <span className="md:hidden">Prev Project</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 transition-all flex items-center gap-1 cursor-pointer"
              title={`Switch to ${nextProject.projectName}`}
            >
              <span className="hidden md:inline">{nextProject.projectName}</span>
              <span className="md:hidden">Next Project</span>
              <FiChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Interactive 5-6 Thumbnails Strip */}
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1 scrollbar-thin">
          {activePhotoList.map((photo, idx) => (
            <button
              key={`${photo.src}-${idx}`}
              type="button"
              onClick={() => setActivePhotoIndex(idx)}
              className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
                activePhotoIndex === idx
                  ? "ring-2 ring-[#e05609] ring-offset-2 ring-offset-black scale-105 opacity-100 shadow-md shadow-orange-500/40"
                  : "opacity-50 hover:opacity-90 hover:scale-102"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.title || `Photo ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Mini Icon Indicator */}
              <div className="absolute bottom-0.5 right-0.5 bg-black/70 p-0.5 rounded text-[10px]">
                {photo.type === "Interior Design" ? (
                  <HiSparkles className="text-amber-300 text-[10px]" />
                ) : (
                  <MdConstruction className="text-orange-400 text-[10px]" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryLightbox;
