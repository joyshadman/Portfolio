import React, { useEffect } from 'react';
import '../componentscss/about.css';
import profile from '../assets/profile.png';

const Aboutus = () => {
  useEffect(() => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    animateOnScrollElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div id='about' className="about-container">
      <section className="text-center py-20 mt-[200px]">
        <h1 className="text-5xl animate-on-scroll autoShow">I Don't Just Build Websites</h1>
        <h1 className="text-5xl animate-on-scroll autoShow">I Build <span className="text-orange">Digital Growth Engines</span></h1>

        <div className="flex justify-center gap-30 text-start ">
          <div className="w-[400px] mt-40 mr-10 animate-on-scroll autoShow">
            <img src={profile} alt="" />
          </div>

          <div className="w-[600px]">
            <p className="text-xl animate-on-scroll mt-40 autoShow" style={{ transitionDelay: '100ms' }}>
              Hey, I’m Joy Shadman — a Full-Stack Developer passionate about blending creativity with technology. I design sleek, user-focused interfaces and build robust backend architectures that bring ideas to life. Every project I take on is a chance to create something meaningful, modern, and impactful.
            </p>
          </div>
        </div>
        <div
          className="big-headlines animate-on-scroll hidden md:block"
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="list1 mt-[400px] ml-80 autoShow autoBlur">Apexium Showcase</h1>
          <h1 className="list2 mr-20 mt-9 autoShow autoBlur">Elegant design</h1>
          <h1 className="list3 ml-85 mt-9 autoShow autoBlur">Immersive design</h1>
          <h1 className="list4 mt-9 mr-40 autoShow autoBlur">Responsive motion</h1>
          <h1 className="list5 mt-9 ml-90 mb-[400px] autoShow autoBlur">Seamless design</h1>
        </div>

      </section>
    </div>
  );
};

export default Aboutus;
