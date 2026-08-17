import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesCTA = () => {
  return (
    <section className="py-16 bg-[#141416] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center"
      >
        <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold mb-4">
          Need a Customized Turnkey Solution?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Speak directly with our Chief Project Engineer for a free architectural consultation and milestone estimate.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-[#e05609] hover:bg-[#c94905] text-white px-8 py-3.5 rounded-md font-semibold text-sm sm:text-base shadow-md transition-colors"
          >
            <span>Request a Free Project Estimate</span>
            <span>→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
