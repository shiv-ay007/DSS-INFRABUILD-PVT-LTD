import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import LeadershipPage from "../Pages/LeadershipPage";
import CareersPage from "../Pages/CareersPage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailPage from "../Pages/ServiceDetailPage";
import ProjectsPage from "../Pages/ProjectsPage";
import ProjectDetailPage from "../Pages/ProjectDetailPage";
import GalleryPage from "../Pages/GalleryPage";
import BlogsPage from "../Pages/BlogsPage";
import BlogDetailPage from "../Pages/BlogDetailPage";
import ContactPage from "../Pages/ContactPage";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import TermsPage from "../Pages/TermsPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. Home */}
      <Route path="/" element={<Home />} />

      {/* 2. About & Subpages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/leadership" element={<LeadershipPage />} />
      <Route path="/careers" element={<CareersPage />} />

      {/* 3. Services & Detail Routes */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="/ArchitecturalPlanning" element={<ServiceDetailPage />} />
      <Route path="/Construction" element={<ServiceDetailPage />} />
      <Route path="/InteriorDesign" element={<ServiceDetailPage />} />
      <Route path="/FabricationWorks" element={<ServiceDetailPage />} />
      <Route path="/Consultancy" element={<ServiceDetailPage />} />

      {/* 4. Projects Portfolio & Individual Project Detail */}
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />

      {/* 5. Gallery */}
      <Route path="/gallery" element={<GalleryPage />} />

      {/* 6. Blogs & Individual Blog Detail */}
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogDetailPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
      <Route path="/blogs/:slug" element={<BlogDetailPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/how-bim-is-revolutionizing-construction-in-india" element={<BlogDetailPage />} />
      <Route path="/sustainable-building-practices-for-2026" element={<BlogDetailPage />} />
      <Route path="/top-10-safety-standards-every-site-must-follow" element={<BlogDetailPage />} />

      {/* 7. Contact Us */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact-us" element={<ContactPage />} />

      {/* 8. Legal Policies */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;