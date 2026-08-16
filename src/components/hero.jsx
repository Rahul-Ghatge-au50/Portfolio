import React from "react";
import { HERO_CONTENT, CONTACT } from "../constants";
import Profile_img from "../assets/IMG_9105.JPG";
import { motion } from "framer-motion";
import FileSaver from "file-saver";
import New_CV from "../assets/Rahul_Ghatge_CV.pdf";
import { FaDownload, FaArrowRight, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiNodedotjs } from "react-icons/si";

const saveFile = () => {
  FileSaver.saveAs(New_CV, "Rahul_Ghatge_Resume.pdf");
};

function Hero() {
  return (
    <section id="hero" className="border-b border-neutral-800 pb-16 pt-4 lg:mb-20">
      <div className="flex flex-wrap items-center">
        {/* Left Column: Text & CTAs */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Status / Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              2+ Years Experience • Backend & Scalable Systems Specialist
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pb-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Rahul Ghatge
            </motion.h1>

            {/* Dynamic Role Gradient */}
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
            >
              Backend Engineer & Full Stack Developer
            </motion.span>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Core Competency Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <span className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300">
                <SiNodedotjs className="text-green-500" /> Node.js & NestJS
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300">
                <SiPostgresql className="text-sky-400" /> PostgreSQL & MongoDB
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300">
                <FaServer className="text-purple-400" /> Microservices & Webhooks
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-cyan-500/40"
              >
                View Projects
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-neutral-700 bg-neutral-900/80 px-6 py-3 text-sm font-semibold text-neutral-200 transition-all hover:border-cyan-400 hover:text-cyan-400 hover:bg-neutral-800"
              >
                Contact Me
              </a>

              <button
                onClick={saveFile}
                className="flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-950/30 px-5 py-3 text-sm font-semibold text-purple-300 transition-all hover:bg-purple-900/50 hover:border-purple-400"
              >
                <FaDownload /> Download CV
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Profile Showcase */}
        <div className="mt-12 w-full lg:mt-0 lg:w-2/5 lg:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Glow Background */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-pink-500/30 blur-xl opacity-70"></div>

            {/* Profile Card */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 p-3 shadow-2xl backdrop-blur-sm max-w-xs sm:max-w-sm">
              <img
                src={Profile_img}
                className="h-auto w-full rounded-xl object-cover shadow-inner"
                alt="Rahul Anant Ghatge"
              />

              {/* Floating Pill on Card */}
              <div className="mt-3 flex items-center justify-between rounded-xl bg-neutral-950/80 p-3 border border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-neutral-200">Open to Opportunities</span>
                </div>
                <span className="text-xs font-medium text-cyan-400">Backend & Full Stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
