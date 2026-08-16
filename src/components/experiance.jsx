import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="border-b border-neutral-800 pb-24 pt-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Proven track record building enterprise backend systems, scalable SaaS, and AI-powered platforms.
        </p>
      </motion.div>

      <div className="relative mt-16 max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 top-4 bottom-4 hidden w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:block md:left-8"></div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, ind) => (
            <motion.div
              key={ind}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: ind * 0.15 }}
              className="relative flex flex-col md:flex-row md:pl-20"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-4 -translate-x-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-500 bg-neutral-950 text-cyan-400 shadow-lg md:left-8">
                <FaBriefcase size={14} />
              </div>

              {/* Experience Card */}
              <div className="w-full rounded-2xl border border-neutral-800/90 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                {/* Header: Role & Dates */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-neutral-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
                      <span className="font-semibold text-cyan-400">{exp.company}</span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-xs text-neutral-400">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                    <FaCalendarAlt size={11} /> {exp.year}
                  </span>
                </div>

                {/* Company Summary */}
                {exp.summary && (
                  <p className="mt-3 text-xs italic text-neutral-400">
                    {exp.summary}
                  </p>
                )}

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2.5">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-cyan-400 text-xs" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-800/60">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-neutral-800 bg-neutral-950/80 px-2.5 py-1 text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
