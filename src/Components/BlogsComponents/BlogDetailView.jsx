import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogsList } from "../../data/blogsData";
import AboutCTA from "../AboutComponents/AboutCTA";
import ServiceQuoteModal from "../ServicesComponents/ServiceQuoteModal";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

const BlogDetailView = () => {
  const { id, slug } = useParams();
  const location = useLocation();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const pathname = location.pathname.toLowerCase();

  // Find blog by id, slug or pathname
  const blog =
    blogsList.find((b) => {
      if (id && String(b.id) === String(id)) return true;
      if (id && b.slug.toLowerCase() === String(id).toLowerCase()) return true;
      if (slug && b.slug.toLowerCase() === String(slug).toLowerCase()) return true;
      if (pathname.includes(b.slug.toLowerCase())) return true;
      return false;
    }) || blogsList[0];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* ========================================================= */}
      {/* 1. BLOG HERO SECTION                                      */}
      {/* ========================================================= */}
      <section className="relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center text-center pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

        {/* Content Container (Matches max-w-[1440px]) */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-4">
          {/* Breadcrumbs: Home > Blogs > Blog Title */}
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-300 font-medium flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link to="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#e05609] font-medium line-clamp-1 max-w-md">
              {blog.title}
            </span>
          </div>

          {/* Main Blog Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            {blog.title}
          </h1>

          {/* Meta Info Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 pt-2">
            <span className="flex items-center space-x-1.5">
              <FiCalendar className="text-[#e05609]" />
              <span>{blog.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <FiUser className="text-[#e05609]" />
              <span>By {blog.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1.5">
              <FiClock className="text-[#e05609]" />
              <span>{blog.readTime}</span>
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN BLOG ARTICLE BODY (WIDE 1440px CONTAINER)         */}
      {/* ========================================================= */}
      <article className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-left">
        {/* Large Wide Featured Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 h-80 sm:h-[480px] md:h-[560px] lg:h-[620px] w-full mb-12">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                blog.fallback ||
                "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85";
            }}
          />
        </div>

        {/* Content Container (Comfortable Reading Width across Wide Layout) */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Intro Paragraph */}
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>{blog.intro || blog.excerpt}</p>
          </div>

          {/* Industry Insight Callout Box */}
          {blog.industryInsight && (
            <div className="bg-[#fef6f0] border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-xs my-8 space-y-2.5">
              <div className="flex items-center space-x-2 text-[#e05609] font-extrabold text-sm sm:text-base">
                <FiTrendingUp className="text-lg" />
                <span>Industry Insight</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                {blog.industryInsight}
              </p>
            </div>
          )}

          {/* Key Reasons / Why It Matters */}
          {blog.keyPoints && blog.keyPoints.length > 0 && (
            <div className="space-y-4 pt-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  {blog.keyPointsTitle || `Why This Matters in 2026`}
                </h2>
                <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                The urgency for modern engineering standards has never been
                greater. Here's why:
              </p>

              <ul className="space-y-3.5 pl-1 pt-2">
                {blog.keyPoints.map((pt, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                  >
                    <strong className="text-gray-950 font-bold">
                      {pt.title}:
                    </strong>{" "}
                    <span>{pt.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Structured Sections */}
          {blog.sections && blog.sections.length > 0 && (
            <div className="space-y-6 pt-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  Top Practices & Innovations for 2026
                </h2>
                <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
              </div>

              <div className="space-y-6 pt-2">
                {blog.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges and Solutions */}
          {blog.challengesAndSolutions &&
            blog.challengesAndSolutions.length > 0 && (
              <div className="space-y-4 pt-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                    Challenges and Solutions
                  </h2>
                  <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  While modern building technologies have clear benefits, industry
                  challenges remain:
                </p>

                <ul className="space-y-3.5 pl-1 pt-2">
                  {blog.challengesAndSolutions.map((cs, idx) => (
                    <li key={idx} className="space-y-1 text-xs sm:text-sm">
                      <p className="text-gray-700">
                        <strong className="text-gray-950 font-bold">
                          Challenge:
                        </strong>{" "}
                        {cs.challenge}
                      </p>
                      <p className="text-gray-600">
                        <strong className="text-[#e05609] font-bold">
                          Solution:
                        </strong>{" "}
                        {cs.solution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Conclusion Section */}
          <div className="space-y-4 pt-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                Conclusion
              </h2>
              <div className="w-16 h-1 bg-[#e05609] rounded-full mt-2" />
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {blog.conclusion ||
                "The construction industry is transforming. Modern sustainable and digital engineering practices for 2026 go beyond energy efficiency — they encompass materials, safety, longevity, and technology. At DSS Infrabuild, we're proud to be at the forefront of this revolution in India."}
            </p>
          </div>

          {/* Bottom Callout CTA Box */}
          <div className="bg-[#fef6f0] border border-orange-200/80 rounded-2xl p-6 sm:p-8 shadow-xs mt-12 space-y-3">
            <h4 className="text-base sm:text-lg font-extrabold text-gray-950 flex items-center space-x-2">
              <span className="text-[#e05609]">💡</span>
              <span>Ready to Build Future-Ready Infrastructure?</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Contact DSS Infrabuild for a free consultation on turnkey
              construction, architectural planning, and structural fabrication.
              Our experts will help you design and build an efficient, safe, and
              sustainable property.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#e05609] hover:bg-[#c94905] text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer inline-flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* 3. Bottom AboutUs CTA Banner */}
      <AboutCTA />

      {/* 4. Interactive Quote Modal */}
      <ServiceQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        serviceTitle={blog.category}
        subServiceTitle={blog.title}
      />
    </div>
  );
};

export default BlogDetailView;
