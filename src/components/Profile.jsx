import React from "react";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import SplitText from "./Splittext"; 
import ShinyText from "./ShinyText"; 
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6 pt-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#fbb03c]/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      
      {/* Massive Background Text (Watermark style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-white/[0.02] leading-none uppercase tracking-tighter">
          Developer
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT: Text & CTA */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fbb03c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fbb03c]"></span>
            </span>
            <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Available for projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] mb-6">
Hello <br />
            <span className="text-[#fbb03c]">I'm Joy Shadman.</span>
          </h1>

          <div className="max-w-2xl mx-auto lg:mx-0 mb-10">
            <SplitText
              text="A Full-Stack Developer dedicated to building high-performance web applications with a focus on immersive UI and scalable architecture."
              tag="p"
              className="text-lg  md:text-xl text-white/60 leading-relaxed"
              delay={40}
              duration={0.5}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            {/* Primary CTA */}
            <button className="group relative px-8 py-4 bg-[#fbb03c] rounded-2xl font-bold text-black overflow-hidden transition-all hover:scale-105 active:scale-95" data-hoverable>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2" >
                View My Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform"  />
              </span>
            </button>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/joyshadman" },
                { icon: <FaLinkedin />, link: "https://linkedin.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all hover:-translate-y-1" data-hoverable
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
             <ShinyText text="Scroll down to see details" speed={3} className="text-sm font-mono text-white/40" />
          </div>
        </div>

        {/* RIGHT CONTENT: The Visual Centerpiece */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Animated Ring */}
            <div className="absolute inset-0 border border-[#fbb03c]/20 rounded-full scale-125 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-150 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Stage */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl p-3 shadow-2xl">
              <div className="absolute inset-0 bg-[#fbb03c]/5 group-hover:bg-transparent transition-colors" />
              <img 
                src={profile} 
                alt="Joy Shadman" 
                className="w-full h-full object-cover rounded-[2.2rem] brightness-90 contrast-110"
              />
              
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#fbb03c] to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;