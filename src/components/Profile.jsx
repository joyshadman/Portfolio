import React, { useMemo } from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import SplitText from "./Splittext"; 
import ShinyText from "./ShinyText"; 

const Hero = () => {
  // Dynamically calculate years of experience (Start date: 2024)
  const yearsOfExperience = useMemo(() => {
    const startYear = 2024;
    const currentYear = new Date().getFullYear();
    const diff = currentYear - startYear;
    return diff > 0 ? diff : 0;
  }, []);

  // GitHub Username for dynamic profile pic
  const githubUsername = "joyshadman";

  // Scroll function for the "View My Projects" button
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 lg:pt-20">
      
      {/* Massive Background Watermark Text - Low Opacity */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white/[0.03] leading-none uppercase tracking-tighter">
          Developer
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* RIGHT CONTENT (Image Stage) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative group">
            {/* Animated Rings - Glassy/Transparent style */}
            <div className="absolute inset-0 border border-white/10 rounded-full scale-110 sm:scale-125 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 sm:scale-150 animate-[spin_15s_linear_infinite_reverse]" />
            
            <motion.div 
              whileHover={{ rotateY: 8, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border border-white/20 bg-white/5 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl"
            >
              {/* Glassy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
              <img 
                src={`https://github.com/${githubUsername}.png`} 
                alt="Joy Shadman" 
                className="w-full h-full object-cover rounded-[2rem] sm:rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 contrast-110"
              />
            </motion.div>
          </div>
        </div>

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fbb03c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fbb03c]"></span>
            </span>
            <span className="text-white/70 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">
                {yearsOfExperience}+ Years Experience • Available for Hire
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1] sm:leading-[0.9] mb-6">
            Hello <br />
            <span className="text-[#fbb03c]">I'm Joy Shadman.</span>
          </h1>

          <div className="max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 px-2 sm:px-0">
            <SplitText
              text={`A specialized Full-Stack Developer with ${yearsOfExperience}+ years of experience building immersive digital experiences. I bridge the gap between robust backend engineering and high-performance, animated frontend aesthetics.`}
              tag="p"
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed"
              delay={30}
              duration={0.6}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            {/* Primary CTA: Projects - Updated with onClick for scroll */}
            <button 
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto group relative px-8 py-4 bg-[#fbb03c] rounded-2xl font-bold text-black overflow-hidden transition-all hover:scale-105 active:scale-95" 
              data-hoverable
            >
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                View My Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary CTA: Resume */}
            <a 
              href="#" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto group px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-bold backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              data-hoverable
            >
              Resume <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaGithub />, link: `https://github.com/${githubUsername}` },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/joyshadman" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-[#fbb03c] hover:text-black transition-all hover:-translate-y-1 backdrop-blur-xl"
                  data-hoverable>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-10 sm:mt-12">
             <ShinyText 
                text="Scroll down to explore porfoilio" 
                speed={3} 
                className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-[0.3em]" 
             />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-[1px] h-10 sm:h-12 bg-gradient-to-b from-[#fbb03c] to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;