import React, { useEffect } from "react";
import "../componentscss/about.css";
import Education from "./Education";
import Profile from "./Profile.jsx";
import SkillStack from "./Skillstack.jsx";

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
      <section className="text-center py-20 px-6">
        <Profile  />
        <Education />

        {/* Tools Section */}
        <div className="mt-20 w-full max-w-6xl mx-auto text-center hidden md:block">
          <SkillStack/>
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
