import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pb-12 pt-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
          Interested in discussing backend architecture, new project opportunities, or full-time roles? Let's connect!
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {/* Email Card */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileHover={{ scale: 1.03 }}
          className="group flex flex-col items-center rounded-2xl border border-neutral-800/90 bg-neutral-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-neutral-900/80"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
            <FaEnvelope size={20} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Email Me
          </span>
          <span className="mt-1 text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all">
            {CONTACT.email}
          </span>
        </motion.a>

        {/* Phone Card */}
        <motion.a
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`}
          whileHover={{ scale: 1.03 }}
          className="group flex flex-col items-center rounded-2xl border border-neutral-800/90 bg-neutral-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-neutral-900/80"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-400">
            <FaPhoneAlt size={18} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Call / WhatsApp
          </span>
          <span className="mt-1 text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
            {CONTACT.phoneNo}
          </span>
        </motion.a>

        {/* Location Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="group flex flex-col items-center rounded-2xl border border-neutral-800/90 bg-neutral-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-neutral-900/80 sm:col-span-2 lg:col-span-1"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400">
            <FaMapMarkerAlt size={20} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Location
          </span>
          <span className="mt-1 text-sm font-semibold text-white">
            {CONTACT.location}
          </span>
        </motion.div>
      </div>

      {/* Direct Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
        >
          <FaPaperPlane /> Send Email
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
        >
          <FaLinkedin /> LinkedIn Profile
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-neutral-400"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Footer Bottom Line */}
      <div className="mt-16 border-t border-neutral-800/80 pt-6 text-center text-xs text-neutral-500">
        <p>© {currentYear} Rahul Anant Ghatge • Backend Engineer & Full Stack Developer</p>
      </div>
    </footer>
  );
}

export default Contact;
