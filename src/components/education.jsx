import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="border-b border-neutral-800 pb-24 pt-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Academia & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Academic foundation and professional certifications.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Education Column */}
        <div>
          <div className="mb-6 flex items-center gap-3 border-b border-neutral-800 pb-3">
            <div className="rounded-lg bg-cyan-950/60 p-2 border border-cyan-500/30 text-cyan-400">
              <FaGraduationCap size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, ind) => (
              <motion.div
                key={ind}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: ind * 0.1 }}
                className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-5 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-white">
                    {edu.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 text-xs font-medium text-cyan-300">
                    <FaCalendarAlt size={10} /> {edu.period}
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-cyan-400/90">
                  {edu.institution}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                  {edu.location && (
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                  )}
                  {edu.grade && (
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <FaAward /> {edu.grade}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Courses Column */}
        <div>
          <div className="mb-6 flex items-center gap-3 border-b border-neutral-800 pb-3">
            <div className="rounded-lg bg-purple-950/60 p-2 border border-purple-500/30 text-purple-400">
              <FaCertificate size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Courses & Specializations</h3>
          </div>

          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, ind) => (
              <motion.div
                key={ind}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: ind * 0.1 }}
                className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-5 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-white">
                    {cert.title}
                  </h4>
                  <span className="rounded-full border border-purple-500/30 bg-purple-950/40 px-2.5 py-0.5 text-xs font-semibold text-purple-300">
                    Certified
                  </span>
                </div>

                <p className="mt-1 text-sm font-medium text-purple-300">
                  {cert.issuer}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-neutral-300">
                  {cert.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/60">
                  {["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Full Stack"].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 text-[11px] font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Quick Summary Card */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-5"
            >
              <h5 className="text-sm font-semibold text-white">Technical Mindset</h5>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                With a background in Engineering combined with specialized Full Stack & Backend Web training, I bring analytical problem-solving and rigorous engineering standards to building scalable digital platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
