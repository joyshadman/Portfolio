import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; 
import { loadSlim } from "@tsparticles/slim"; 
import "../componentscss/about.css";
import Education from "./Education";
import Profile from "./Profile.jsx";
import SkillStack from "./Skillstack.jsx";


const Aboutus = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    animateOnScrollElements.forEach((el) => observer.observe(el));
  }, []);

  // --- Orange Particle Options ---
  const particlesOptions = {
    background: {
      color: { value: "#000000" }, // Keep static black background
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Creates links on hover
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#fbb03c" }, // Orange theme color
      links: {
        color: "#fbb03c",
        distance: 150,
        enable: true,
        opacity: 0.15, // Subtle lines
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: {
        value: 0.3, // Semi-transparent
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };
  // -------------------------------------

  return (
    <div
      id="about"
      // Added 'relative' to allow absolute positioning of particles
      className="about-container-xl w-full min-h-screen bg-black text-white flex flex-col items-center justify-center relative"
    >
      {/* Live Animated Orange Background */}
      {init && (
        <Particles
          id="aboutparticles"
          options={particlesOptions}
          // Absolute positioning covers the parent; negative z-index places it behind
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      {/* Main Content Area - elevated z-index */}
      <section className="text-center py-20 px-6 relative z-10">
        <Profile />
        <Education />

        {/* Tools Section */}
        <div className="mt-20 w-full max-w-6xl mx-auto text-center hidden md:block">
          <SkillStack />
        </div>

      </section>

      {/* Big Headlines - elevated z-index */}
      <div className="big-headlines animate-on-scroll hidden md:block relative z-10" style={{ transitionDelay: "200ms" }}>
        <h1 className="list1 mt-40 md:mt-[400px] ml-5 md:ml-80 autoShow autoBlur hover:scale-110 transition-all duration-300">
          I Showcase
        </h1>
        <h1 className="list2 mr-5 md:mr-20 mt-5 md:mt-9 autoShow autoBlur hover:scale-110 transition-all duration-300">
          Elegant design
        </h1>
        <h1 className="list3 ml-5 md:ml-85 mt-5 md:mt-9 autoShow autoBlur hover:scale-110 transition-all duration-300">
          Immersive design
        </h1>
        <h1 className="list4 mt-5 md:mt-9 mr-5 md:mr-40 autoShow autoBlur hover:scale-110 transition-all duration-300">
          Responsive motion
        </h1>
        <h1 className="list5 mt-5 md:mt-9 ml-5 md:ml-90 mb-40 md:mb-[400px] autoShow autoBlur hover:scale-110 transition-all duration-300">
          Seamless design
        </h1>
      </div>
    </div>
  );
};

export default Aboutus;