import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaBolt } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaServer className="text-cyan-400 text-xl" />,
      title: "Backend Architecture",
      desc: "Specialized in NestJS, Node.js, Express.js microservices & REST APIs.",
    },
    {
      icon: <FaDatabase className="text-purple-400 text-xl" />,
      title: "Database Optimization",
      desc: "Proficient in PostgreSQL, MongoDB, TypeORM, Redis & high-volume queries.",
    },
    {
      icon: <FaBolt className="text-amber-400 text-xl" />,
      title: "Webhooks & Automation",
      desc: "App Store & Google Play in-app billing, AI chat pipelines & Cron workflows.",
    },
    {
      icon: <FaCode className="text-emerald-400 text-xl" />,
      title: "Full Stack Integration",
      desc: "React.js, REST APIs, mobile backend sync, and role-based access control.",
    },
  ];

  return (
    <section id="about" className="border-b border-neutral-800 pb-20 pt-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Building resilient, scalable backends and modern full-stack web applications.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center">
        {/* Left Column: Image with Highlight Badge */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-6"
        >
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-xl">
            <img
              src={aboutImg}
              className="w-full rounded-xl object-cover"
              alt="Rahul Ghatge Workspace"
            />
            {/* Overlay badge */}
            <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/80 p-4">
              <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                Professional Focus
              </p>
              <p className="mt-1 text-sm text-neutral-300">
                Scalable Backend Systems • AI-driven Features • Database Design & Cloud Integrations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Highlight Grid */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-8"
        >
          <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 backdrop-blur-sm">
            <p className="text-base leading-relaxed text-neutral-300 whitespace-pre-line">
              {ABOUT_TEXT}
            </p>

            {/* Core Capability Cards */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-lg bg-neutral-900 p-2 border border-neutral-800">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs leading-normal text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
