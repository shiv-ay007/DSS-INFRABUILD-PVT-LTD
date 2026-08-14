import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects, projectCategories } from "../../data/projectsData";

const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
      >
        {projectCategories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-[#e05609] text-white shadow-md shadow-orange-500/20"
                : "bg-[#f5f5f5] text-gray-700 hover:bg-gray-200 border border-gray-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white rounded-2xl border border-gray-200/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Badge */}
              <div className="h-64 w-full overflow-hidden relative bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-black/60 backdrop-blur-sm text-orange-400 text-xs font-bold px-3 py-1 rounded-md border border-orange-500/30">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block">
                    📍 {project.location}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight drop-shadow leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-5 flex items-center justify-between border-t border-gray-100">
                <div>
                  <span className="text-xs text-gray-500 block">Scope & Area</span>
                  <span className="text-sm font-bold text-gray-800">
                    {project.builtUpArea || project.area}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#e05609] group-hover:underline flex items-center space-x-1">
                  <span>View Details</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;
