import React, { useRef, useState, useEffect } from 'react';
import img1 from '../assets/portfolio/1.png';
import img2 from '../assets/portfolio/2.png';
import img3 from '../assets/portfolio/3.png';
import img4 from '../assets/portfolio/4.png';
import img5 from '../assets/portfolio/5.png';
import img6 from '../assets/portfolio/6.png';
import img7 from '../assets/portfolio/7.png';

const portfolioItems = [
  { img: img1, alt: "Project 1", link: "https://insta-project-tau.vercel.app/" },
  { img: img2, alt: "Project 2", link: "https://jadoo-project.vercel.app/" },
  { img: img3, alt: "Project 3", link: "https://coffee-website-project-rosy.vercel.app/" },
  { img: img4, alt: "Project 4", link: "https://touring-website-project.vercel.app/" },
  { img: img5, alt: "Project 5", link: "https://restaurant-project-one-lyart.vercel.app/" },
  { img: img6, alt: "Project 6", link: "https://personaltodolist-mu.vercel.app/" },
  { img: img7, alt: "Project 7", link: "https://e-commerce-seven-beige-86.vercel.app/" },

];


const LazyImage = ({ src, alt, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (imgEl) observer.unobserve(imgEl);
            }
          });
        },
        { rootMargin: "100px" }
      );

      observer.observe(imgEl);

      return () => {
        if (imgEl) observer.unobserve(imgEl);
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={`transition-all duration-700 ease-out opacity-0 ${
        isVisible ? "opacity-100" : ""
      } ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

const Portfolio = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // NEW: pause auto-slide on hover
  const [paused, setPaused] = useState(false);

  // drag handlers
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - mobileRef.current.offsetLeft);
    setScrollLeft(mobileRef.current.scrollLeft);
  };
  const handleMouseUp = () => setIsDown(false);
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - mobileRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    mobileRef.current.scrollLeft = scrollLeft - walk;
  };

  // desktop auto-slide
  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;

    let speed = 1.7;
    let frame;

    const loop = () => {
      if (!paused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div
      id="portfolio"
      className="max-w-7xl xl:max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative autoShow"
    >
      <div>
        <h1
          className="mt-[200px] text-[#f3a734] text-5xl mb-5 text-center autoShow"
          style={{ fontFamily: 'Kumar One' }}
        >
          My works
        </h1>
        <h3
          className="text-white text-2xl mb-30 text-center autoShow"
          style={{ fontFamily: 'Kumar One' }}
        >
          I design conversion-focused, modern websites that bring your brand to life.
        </h3>
      </div>

      {/* DESKTOP */}
      <div
        className="hidden md:flex gap-4 overflow-hidden"
        ref={desktopRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {portfolioItems.concat(portfolioItems).map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-[500px] mx-4 mb-20 group">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <LazyImage
                src={item.img}
                alt={item.alt}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </a>
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-800 flex items-center justify-center rounded-xl">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
                data-hoverable
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div
        className="flex md:hidden gap-4 overflow-x-auto touch-pan-x"
        ref={mobileRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDown ? 'grabbing' : 'grab' }}
      >
        {portfolioItems.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-[300px] mx-4 mb-20 group">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <LazyImage
                src={item.img}
                alt={item.alt}
                className="w-full h-[200px] object-cover rounded-xl"
              />
            </a>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
