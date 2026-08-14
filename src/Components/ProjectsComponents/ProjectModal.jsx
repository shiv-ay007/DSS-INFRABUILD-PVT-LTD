import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 select-none"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 p-6 sm:p-8 relative space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          ×
        </button>

        <div className="h-64 rounded-xl overflow-hidden shadow">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="flex items-center space-x-2 text-xs font-bold text-[#e05609] uppercase tracking-wider mb-1">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-950">
            {project.title}
          </h2>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-3 gap-3 bg-[#f5f5f5] p-4 rounded-xl text-center text-xs">
          <div>
            <span className="text-gray-500 block font-medium">Built Area</span>
            <span className="font-bold text-gray-900 text-sm">{project.area}</span>
          </div>
          <div>
            <span className="text-gray-500 block font-medium">Delivered Year</span>
            <span className="font-bold text-gray-900 text-sm">{project.year}</span>
          </div>
          <div>
            <span className="text-gray-500 block font-medium">Client</span>
            <span className="font-bold text-gray-900 text-sm">{project.client}</span>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-gray-900">Project Highlights & Engineering Feats:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-gray-700 bg-orange-50/60 p-2 rounded-lg">
                <span className="text-[#e05609] font-bold">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Close / Action */}
        <div className="pt-4 border-t border-gray-100 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
          >
            Close
          </button>
          <Link
            to="/contact"
            className="px-6 py-2 rounded-md bg-[#e05609] hover:bg-[#c94905] text-white text-xs font-bold shadow transition-colors cursor-pointer"
          >
            Inquire Similar Project ➔
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
