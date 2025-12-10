import React, { useEffect } from "react";
import "../componentscss/about.css";
import profile from "../assets/profile.png";
import Looping from "./Looping";
import SplitText from "./SplitText"; // <-- import your component


const Aboutus = () => {
  useEffect(() => {
    const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
    animateOnScrollElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div id="about" className="about-container w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <section className="text-center py-20 mt-[150px] px-6">
        {/* Headings */}
        <h1 className="text-5xl font-bold animate-on-scroll autoShow">
          I Don't Just Build Websites
        </h1>
        <h1 className="text-5xl font-bold animate-on-scroll autoShow mt-3">
          I Build{" "}
          <span className="text-[#fbb03c] drop-shadow-[0_0_8px_rgba(255,165,0,0.5)]">
            Digital Growth Engines
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-16 animate-on-scroll autoShow">
          <div className="w-172 md:w-296 mt-20 mb-20">
            <div className="bg-amber-400 rounded-full relative w-100 h-100 ml-40">
              <img src={profile} alt="Joy" className="w-90 h-90 absolute bottom-5 right-5"/>
            </div>
          </div>
          <SplitText
            text={`Hey, I’m Joy Shadman — a Full-Stack Developer passionate about blending creativity with technology. I design sleek, user-focused interfaces and build robust backend architectures that bring ideas to life. Every project I take on is a chance to create something meaningful, modern, and impactful.`}
            tag="p"
            className="text-lg md:text-xl text-white max-w-xl text-center md:text-left"
            delay={50}            
            duration={0.6}        
            splitType="chars"    
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>
  
        <div className="mt-20 w-full max-w-6xl mx-auto text-center hidden md:block">
          <h2 className="text-3xl md:text-5xl font-bold animate-on-scroll autoShow mb-22">
            The <span className="text-[#fbb03c]">Tools</span> I Use
          </h2>
          <Looping />
        </div>
      </section>

      {/* Animated Headlines */}
      <div
        className="big-headlines animate-on-scroll hidden md:block"
        style={{ transitionDelay: "200ms" }}
      >
        <h1 className="list1 mt-[400px] ml-80 autoShow autoBlur">I Showcase</h1>
        <h1 className="list2 mr-20 mt-9 autoShow autoBlur">Elegant design</h1>
        <h1 className="list3 ml-85 mt-9 autoShow autoBlur">Immersive design</h1>
        <h1 className="list4 mt-9 mr-40 autoShow autoBlur">Responsive motion</h1>
        <h1 className="list5 mt-9 ml-90 mb-[400px] autoShow autoBlur">
          Seamless design
        </h1>
      </div>
    </div>
  );
};

export default Aboutus;
