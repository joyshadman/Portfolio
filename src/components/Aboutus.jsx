import React, { useEffect } from "react";
import "../componentscss/about.css";
import profile from "../assets/profile.png";
import Looping from "./Looping";
import SplitText from "./SplitText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Education from "./Education";
import ShinyText from "./ShinyText";

const Aboutus = () => {
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

  return (
    <div
      id="about"
      className="about-container w-full min-h-screen bg-black text-white flex flex-col items-center justify-center"
    >
      <section className="text-center py-20 mt-[150px] px-6">
        {/* Headings */}
        <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll autoShow hover:scale-105 transition-all duration-300">
          I Don't Just Build Websites
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold animate-on-scroll autoShow mt-3 hover:scale-105 transition-all duration-300">
          I Build{" "}
          <span className="text-[#fbb03c] drop-shadow-[0_0_8px_rgba(255,165,0,0.5)] hover:text-[#ffcb5e] transition-all duration-300">
            Digital Growth Engines
          </span>
        </h1>

        {/* Photo + About Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-40 animate-on-scroll autoShow ">
          <div className="w-40 md:w-100 mt-10 mb-100">
            <div
              className="relative w-40 h-40 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden 
                 bg-gradient-to-tr from-amber-400 to-yellow-300 
                 shadow-lg transition-transform duration-500 ease-in-out transform
                 hover:scale-110 hover:shadow-[0_0_40px_#fbb03c] hover:rotate-3"
            >
              <img
                src={profile}
                alt="Joy"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-in-out transform
                   hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_#fff]"
              />

              {/* Optional overlay for interactive glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-white opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>

          <div>
            <h1 className="text-start text-4xl mb-10 font-extrabold text-[#fbb03c]  autoShow ">Who am I .....</h1>
            <SplitText
              text={`Hey, I’m Joy Shadman — a Full-Stack Developer passionate about blending creativity with technology. I design sleek, user-focused interfaces and build robust backend architectures that bring ideas to life. Every project I take on is a chance to create something meaningful, modern, and impactful.`}
              tag="p"
              className="text-base md:text-lg lg:text-xl text-white max-w-xl text-center md:text-left leading-relaxed"
              delay={50}
              duration={0.6}
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
            <div className="my-4">---------------------------------------------------------------</div>
            <div className="">
              <ShinyText
                text="See My Work & Let's Connect"
                disabled={false}
                speed={3}
                className='custom-class'
              />
            </div>
            <div className="flex mt-6 justify-center md:justify-center gap-6">
              <FaGithub
                size={32}
                className="text-white transition-all duration-300 hover:text-gray-300 hover:scale-125 hover:drop-shadow-[0_0_10px_white] cursor-pointer pop"
                onClick={() => window.open("https://github.com/joyshadman")}
                data-hoverable
              />
              <FaLinkedin
                size={32}
                className="text-white transition-all duration-300 hover:text-blue-400 hover:scale-125 hover:drop-shadow-[0_0_10px_#4e9eff] cursor-pointer mb-40 pop"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/joy-shadman-30067526a/")
                }
                data-hoverable
              />
            </div>
          </div>
        </div>
        <Education />

        {/* Tools Section */}
        <div className="mt-20 w-full max-w-6xl mx-auto text-center hidden md:block">
          <h2 className="text-3xl md:text-5xl font-bold animate-on-scroll autoShow mb-22 hover:scale-105 transition-all duration-300">
            The <span className="text-[#fbb03c]">Tools</span> I Use
          </h2>
          <Looping />
        </div>

      </section>

      {/* Big Headlines */}
      <div className="big-headlines animate-on-scroll hidden md:block" style={{ transitionDelay: "200ms" }}>
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
