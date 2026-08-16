import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLayerGroup, FaBuilding } from "react-icons/fa";

function Project() {
  return (
    <section id="projects" className="border-b border-neutral-800 pb-24 pt-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Key production backend architectures, AI integrations, and full-stack solutions.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {PROJECTS.map((pro, ind) => (
          <motion.div
            key={ind}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: ind * 0.15 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-800/90 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-neutral-900/80 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div>
              {/* Card Header & Company Badge */}
              <div className="flex items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <span className="flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <FaBuilding size={11} /> {pro.company}
                </span>
                <span className="text-xs font-medium text-neutral-400">Project #{ind + 1}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="mt-4 text-xl font-bold text-white leading-snug">
                {pro.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-cyan-400/90">
                {pro.tagline}
              </p>

              {/* Detailed Description */}
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                {pro.description}
              </p>

              {/* Highlights */}
              {pro.highlights && (
                <div className="mt-4 space-y-1.5 rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Key Highlights
                  </p>
                  {pro.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <FaCheckCircle className="mt-0.5 flex-shrink-0 text-cyan-400 text-[10px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies Badges */}
            <div className="mt-6 border-t border-neutral-800/60 pt-4">
              <p className="mb-2 text-xs font-semibold text-neutral-400">Technologies:</p>
              <div className="flex flex-wrap gap-1.5">
                {pro.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-md border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-xs font-medium text-neutral-300 hover:border-cyan-500/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
