import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const WEB3FORMS_ACCESS_KEY = "27f30e7d-7b51-4e9f-b8c5-afd41a015e89";

const jobListings = [
  {
    id: 1,
    title: "Senior Structural Project Engineer",
    department: "Civil & Structural",
    location: "Lucknow / On-Site",
    experience: "5 - 8 Years",
    type: "Full Time",
    desc: "Lead on-site structural RCC casting, steel fabrication audits, and coordinate with architectural consulting teams for high-rise commercial builds.",
  },
  {
    id: 2,
    title: "BIM & 3D Revit Modeler",
    department: "Design & Planning",
    location: "Lucknow HQ",
    experience: "3 - 5 Years",
    type: "Full Time",
    desc: "Develop comprehensive 3D BIM models, clash detection reports, and fabrication shop drawings using Autodesk Revit and Navisworks.",
  },
  {
    id: 3,
    title: "Site Operations Supervisor",
    department: "Field Execution",
    location: "Kanpur / Lucknow",
    experience: "3 - 6 Years",
    type: "Full Time",
    desc: "Manage labor workforce, daily concrete pouring schedules, equipment maintenance, and enforce zero-incident OSHA safety protocols.",
  },
  {
    id: 4,
    title: "Turnkey Interior Project Manager",
    department: "Interior & Fit-outs",
    location: "Lucknow HQ",
    experience: "4 - 7 Years",
    type: "Full Time",
    desc: "Oversee luxury corporate and residential fit-out execution, vendor material sourcing, woodwork craftsmanship, and client handover.",
  },
];

const OpenPositions = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your application...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "DSS Infrabuild Careers Portal",
          subject: `Career Application: ${formData.name} for ${formData.position}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience: formData.experience || "Not specified",
          message: formData.message || "No additional note provided",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Application submitted successfully! Our HR team will reach out.", {
          id: toastId,
        });
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to submit application. Please try again.", {
          id: toastId,
        });
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      toast.error("Network error. Please check your connection and try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Job Openings List */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          <div>
            <span className="text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
              Current Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-950 mt-1">
              Explore Open Positions
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Click on any job to pre-fill the application form on the right.
            </p>
          </div>

          <div className="space-y-4">
            {jobListings.map((job) => (
              <motion.div
                key={job.id}
                onClick={() => {
                  setSelectedJob(job);
                  setFormData({ ...formData, position: job.title });
                }}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  selectedJob?.id === job.id
                    ? "border-[#e05609] bg-orange-50/40 shadow-md ring-1 ring-[#e05609]"
                    : "border-gray-200 bg-white hover:border-[#e05609] hover:shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-950">{job.title}</h3>
                  <span className="bg-orange-100 text-[#e05609] text-xs font-bold px-2.5 py-1 rounded-md">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{job.desc}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pt-3 border-t border-gray-100">
                  <span className="flex items-center space-x-1">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>💼</span>
                    <span>{job.experience}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🏢</span>
                    <span>{job.department}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Application Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="bg-[#141416] text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl sticky top-28">
            <h3 className="text-xl font-bold text-white mb-2">
              Submit Your Application
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Fill out the details below and our HR leadership team will reach out within 48 hours.
            </p>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-xl text-center space-y-2">
                <span className="text-3xl">🎉</span>
                <h4 className="text-lg font-bold text-green-400">Application Received!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for applying to DSS Infrabuild. Our talent acquisition desk will review your profile.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#e05609] hover:underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Position Applying For *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Select a job from left or type role"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Total Years of Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4 Years"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                    Cover Note / Portfolio Link
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Brief note about your background or link to your resume/portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1c1c1f] border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#e05609]"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] disabled:opacity-75 text-white font-bold py-3 px-4 rounded-lg text-sm shadow-md transition-colors cursor-pointer"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application ➔"}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPositions;
