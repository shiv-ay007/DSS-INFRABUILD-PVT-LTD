import React from "react";
import { motion } from "framer-motion";

const perks = [
  {
    title: "Landmark Projects",
    desc: "Work on iconic commercial towers, industrial factories, and highway nodes that redefine the region.",
    icon: "🏗️",
  },
  {
    title: "Accelerated Growth",
    desc: "Direct mentorship from seasoned directors and fast-track promotions based on execution performance.",
    icon: "📈",
  },
  {
    title: "Zero-Harm Safety",
    desc: "Highest industry safety standards, comprehensive health insurance, and strict protective gear protocols.",
    icon: "🛡️",
  },
  {
    title: "Modern Engineering",
    desc: "Hands-on experience with BIM 3D technologies, drone mapping, and advanced pre-cast methodologies.",
    icon: "💻",
  },
];

const WhyJoinDSS = () => {
  return (
    <section className="py-14 sm:py-18 bg-[#f5f5f5] border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
            Why Choose DSS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mt-2">
            Empowering Builders & Engineers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#e05609] transition-colors"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinDSS;
