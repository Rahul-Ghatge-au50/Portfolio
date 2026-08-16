import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 mb-8 border-b border-neutral-800/80 bg-neutral-950/75 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand Logo / Name */}
        <a href="#" className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition hover:text-cyan-400">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="bg-gradient-to-r from-white via-neutral-200 to-cyan-400 bg-clip-text text-transparent">
            Rahul Ghatge
          </span>
          <span className="rounded-full border border-neutral-700/80 bg-neutral-900/90 px-2 py-0.5 text-xs font-medium text-cyan-300">
            Backend Dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-5 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-200 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="ml-4 flex items-center gap-3 border-l border-neutral-800 pl-4 text-lg text-neutral-400">
            <a
              href="https://www.linkedin.com/in/rahul-ghatge-b10814214/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rahul-Ghatge-au50"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:rahulghatge166@gmail.com"
              className="transition-transform hover:scale-110 hover:text-pink-400"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://www.linkedin.com/in/rahul-ghatge-b10814214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Rahul-Ghatge-au50"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="rounded-lg border border-neutral-800 p-2 text-neutral-300 hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {navOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="border-b border-neutral-800 bg-neutral-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-base font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="py-1 transition-colors hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center gap-4 text-neutral-400">
              <a
                href="mailto:rahulghatge166@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-cyan-400"
              >
                <FaEnvelope /> rahulghatge166@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;