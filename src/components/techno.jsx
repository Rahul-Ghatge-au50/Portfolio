import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../constants";
import {
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPostman,
  SiGit,
} from "react-icons/si";
import { FaServer, FaDatabase, FaCloud, FaCode, FaTools } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const featuredIcons = [
  { name: "Node.js", icon: <SiNodedotjs className="text-5xl text-green-500" />, duration: 2.5 },
  { name: "NestJS", icon: <SiNestjs className="text-5xl text-red-500" />, duration: 3.2 },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-5xl text-sky-400" />, duration: 2.8 },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-emerald-400" />, duration: 3.5 },
  { name: "Express.js", icon: <SiExpress className="text-5xl text-neutral-200" />, duration: 2.6 },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-400" />, duration: 3.0 },
  { name: "React.js", icon: <SiReact className="text-5xl text-cyan-400" />, duration: 2.7 },
  { name: "Redis", icon: <SiRedis className="text-5xl text-red-400" />, duration: 3.3 },
  { name: "Docker", icon: <SiDocker className="text-5xl text-sky-500" />, duration: 2.9 },
  { name: "Postman", icon: <SiPostman className="text-5xl text-orange-500" />, duration: 3.4 },
];

const categoryIcons = {
  "Backend & Microservices": <FaServer className="text-cyan-400 text-lg" />,
  "Databases & Caching": <FaDatabase className="text-emerald-400 text-lg" />,
  "Cloud & Infrastructure": <FaCloud className="text-purple-400 text-lg" />,
  "Languages & Frontend": <FaCode className="text-amber-400 text-lg" />,
  "Tools & Testing": <FaTools className="text-pink-400 text-lg" />,
};

function Technologies() {
  return (
    <section id="skills" className="border-b border-neutral-800 pb-24 pt-8">
      {/* Section Heading */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Key Skills</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Core technical stack across backend architecture, databases, cloud, and modern tooling.
        </p>
      </motion.div>

      {/* Animated Floating Tech Icons */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
      >
        {featuredIcons.map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants(item.duration)}
            initial="initial"
            animate="animate"
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4 shadow-lg transition-all hover:border-cyan-500/50 hover:bg-neutral-850"
          >
            {item.icon}
            <span className="mt-2 text-xs font-medium text-neutral-400 transition-colors group-hover:text-neutral-200">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Categorized Skills Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-6 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
          >
            <div className="mb-4 flex items-center gap-3 border-b border-neutral-800/80 pb-3">
              <div className="rounded-lg bg-neutral-950 p-2 border border-neutral-800">
                {categoryIcons[category.title] || <FaTools className="text-cyan-400" />}
              </div>
              <h3 className="text-base font-semibold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950/70 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
