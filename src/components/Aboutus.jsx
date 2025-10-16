import React, { useEffect } from 'react';
import '../componentscss/about.css';

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
        <h1 className="text-5xl animate-on-scroll autoShow">We Don't Just Build Websites</h1>
        <h1 className="text-5xl animate-on-scroll autoShow">We Build <span className="text-orange">Digital Growth Engines</span></h1>

        <div className="flex justify-center gap-30 text-start">
          <div className="w-[600px]">
            <p className="text-xl animate-on-scroll mt-40 autoShow">
              <span className="text-[#ffb74c] text-2xl">Apexium Studio</span> is a premier Webflow and custom web development agency dedicated to crafting exceptional digital experiences that drive real business results. Our team of certified Webflow experts and full-stack developers specializes in building high-performance websites that combine stunning design with cutting-edge functionality. We blend Webflow's visual development platform with custom-coded solutions when projects demand complex features, creating sites that are both beautiful and strategically designed to convert visitors. Every project begins with deep discovery - analyzing your business goals, target audience, and competitive landscape to inform our design and development decisions. We then craft pixel-perfect interfaces with meticulous attention to detail, ensuring your brand identity shines through every element while implementing SEO best practices from day one. This includes semantic HTML structure, optimized page speed, and proper schema markup to maximize search visibility.
            </p>
          </div>

          <div className="w-[600px]">
            <p className="text-xl animate-on-scroll mt-40 autoShow" style={{ transitionDelay: '100ms' }}>
              For e-commerce projects, we build seamless shopping experiences with intuitive navigation, frictionless checkout flows, and conversion-optimized product pages. Our custom development extends beyond Webflow using modern technologies like React, Next.js, and Node.js to create bespoke web applications with advanced functionality. What sets us apart is our commitment to ongoing partnership - we become an extension of your team, providing continuous support and iterative improvements. Whether you're a startup establishing your online presence or an enterprise needing sophisticated solutions, we deliver exceptional results across industries including SaaS, e-commerce, and professional services. At Apexium Studio, we measure success by your success, creating websites that contribute to your bottom line through increased leads, sales, and engagement. Let's collaborate to build something remarkable that moves your business forward in today's competitive digital landscape.
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
