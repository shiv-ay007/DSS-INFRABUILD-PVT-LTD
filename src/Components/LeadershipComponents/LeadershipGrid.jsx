import React from "react";
import { motion } from "framer-motion";
import alokImg from "../../assets/alok.png";
import artiImg from "../../assets/arti.png";
import shradhaImg from "../../assets/shradha.png";
import mohdImg from "../../assets/mohd.png";

const teamMembers = [
  {
    name: "Alok Mishra",
    role: "GENERAL MANAGER",
    department: "MANAGEMENT",
    deptIcon: "👥",
    image: alokImg,
    bio: "Seasoned professional with expertise in operations, project delivery, and team management. Ensures seamless execution and operational excellence across all sites.",
    socials: [
      { type: "linkedin", href: "#linkedin" },
      { type: "email", href: "mailto:dssfabinteriors@gmail.com" },
    ],
  },
  {
    name: "Arti Shrivastava",
    role: "ARCHITECT",
    department: "DESIGN",
    deptIcon: "📐",
    image: artiImg,
    bio: "Creative architect with a keen eye for detail. Specializes in residential and commercial design, blending aesthetics with structural precision and bylaws.",
    socials: [
      { type: "linkedin", href: "#linkedin" },
      { type: "email", href: "mailto:dssfabinteriors@gmail.com" },
      { type: "portfolio", href: "#portfolio" },
    ],
  },
  {
    name: "Shradda Katiyar",
    role: "INTERIOR DESIGNER",
    department: "INTERIORS",
    deptIcon: "🖌️",
    image: shradhaImg,
    bio: "Creative interior designer transforming spaces with modern, functional, and aesthetic design solutions for residential and commercial environments.",
    socials: [
      { type: "linkedin", href: "#linkedin" },
      { type: "instagram", href: "#instagram" },
      { type: "portfolio", href: "#portfolio" },
    ],
  },
  {
    name: "Mohd Hashim Idrisi",
    role: "HR EXECUTIVE",
    department: "HR",
    deptIcon: "💼",
    image: mohdImg,
    bio: "Dedicated HR professional managing talent acquisition, employee relations, and organizational development to build high-performance project teams.",
    socials: [
      { type: "linkedin", href: "#linkedin" },
      { type: "email", href: "mailto:dssfabinteriors@gmail.com" },
    ],
  },
];

const LeadershipGrid = () => {
  return (
    <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 bg-[#fafafa]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-2"
      >
        <div className="flex items-center justify-center space-x-2 text-[#e05609] text-xs font-bold tracking-widest uppercase">
          <span className="w-6 h-[2px] bg-[#e05609] inline-block"></span>
          <span>OUR LEADERSHIP TEAM</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Meet Our <span className="text-[#e05609]">Core Team</span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base">
          A team of dedicated professionals committed to excellence in every project
        </p>
      </motion.div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#e05609] shadow-sm transition-colors duration-200 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Photo & Floating Dept Badge */}
            <div className="h-72 w-full relative overflow-hidden bg-[#f4f5f7] flex items-end justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

              {/* Department Badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1.5 whitespace-nowrap shadow-sm border border-white/10">
                <span className="text-xs">{member.deptIcon}</span>
                <span>{member.department}</span>
              </div>
            </div>

            {/* Bottom Card Content */}
            <div className="p-6 text-center flex-grow flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#e05609] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#e05609] tracking-wider uppercase mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="pt-2 flex items-center justify-center space-x-2">
                {member.socials.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    aria-label={`${member.name} ${soc.type}`}
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#e05609] bg-gray-50 hover:bg-[#e05609] text-gray-500 hover:text-white flex items-center justify-center text-xs font-bold transition-all shadow-2xs"
                  >
                    {soc.type === "linkedin" && "in"}
                    {soc.type === "email" && "✉"}
                    {soc.type === "portfolio" && "🔗"}
                    {soc.type === "instagram" && "📷"}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipGrid;
