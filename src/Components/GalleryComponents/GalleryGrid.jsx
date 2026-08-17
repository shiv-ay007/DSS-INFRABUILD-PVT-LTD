import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, galleryCategories } from "../../data/galleryData";
import GalleryLightbox from "./GalleryLightbox";
import { FiSearch } from "react-icons/fi";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? galleryImages
      : galleryImages.filter((p) => p.category === activeCategory);

  return (
    <section className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6 sm:mb-7"
      >
        {galleryCategories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-[#e05609] text-white shadow-md shadow-orange-500/20"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-gray-100 shadow-xs hover:shadow-xl border border-gray-100 cursor-pointer"
            >
              {/* Construction Site Cover Image */}
              <img
                src={project.src}
                alt={project.projectName}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Category Pill on Top Right (Clean & Minimal) */}
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="bg-[#e05609] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Clean Hover Overlay (Shows only Icon & Project Name) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                {/* Center Orange Zoom/Search Icon */}
                <div className="w-12 h-12 rounded-full bg-[#e05609] text-white flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 mb-2.5">
                  <FiSearch className="text-xl stroke-[2.5]" />
                </div>

                {/* Project Name */}
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {project.projectName}
                </h3>

                {/* Location */}
                {project.location && (
                  <p className="text-gray-300 text-xs mt-1 font-medium transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {project.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Lightbox on Click */}
      <AnimatePresence>
        {selectedProject && (
          <GalleryLightbox
            project={selectedProject}
            allProjects={filteredProjects}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(newProj) => setSelectedProject(newProj)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
