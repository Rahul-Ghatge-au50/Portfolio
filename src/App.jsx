import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/techno";
import Experiance from "./components/experiance";
import Project from "./components/project";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-neutral-950">
      {/* Background Gradient Layer */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experiance />
          <Project />
          <Education />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
