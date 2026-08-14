import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Uncompromising Quality",
    desc: "Every raw material is laboratory tested. Every construction phase undergoes stringent audits. Built to endure generations.",
    icon: (
      <svg className="w-6 h-6 text-[#e05609]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Safety First (Zero Harm)",
    desc: "OSHA-compliant safety protocols, certified safety officers on every site, and zero tolerance for hazardous shortcuts.",
    icon: (
      <svg className="w-6 h-6 text-[#e05609]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Innovation & BIM Focused",
    desc: "Integrating 3D BIM modeling, drone site surveillance, and modular pre-fabrication for precision scheduling and cost control.",
    icon: (
      <svg className="w-6 h-6 text-[#e05609]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "100% Financial Transparency",
    desc: "Detailed itemized billing, real-time milestone progress tracking via client portal, and ethical governance at every step.",
    icon: (
      <svg className="w-6 h-6 text-[#e05609]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
            What Sets Us Apart
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 mt-2">
            Our 4 Pillars of Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#e05609] shadow-sm transition-colors duration-200 flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="h-44 w-full relative overflow-hidden bg-gray-100">
                <img
                  src={v.image}
                  alt={v.title}
                  onError={(e) => {
                    if (v.fallback && e.currentTarget.src !== v.fallback) {
                      e.currentTarget.src = v.fallback;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 bg-white p-2 rounded-xl shadow-md">
                  {v.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#e05609] transition-colors mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
