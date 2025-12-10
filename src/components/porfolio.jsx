import React, { useRef, useState, useEffect } from 'react';
import img1 from '../assets/portfolio/1.png';
import img2 from '../assets/portfolio/2.png';
import img3 from '../assets/portfolio/3.png';
import img4 from '../assets/portfolio/4.png';
import img5 from '../assets/portfolio/5.png';

const portfolioItems = [
  { img: img1, alt: "Project 1" },
  { img: img2, alt: "Project 2" },
  { img: img3, alt: "Project 3" },
  { img: img4, alt: "Project 4" },
  { img: img5, alt: "Project 5" },
];

// LazyImage component for Intersection Observer based lazy loading
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (!imgRef.current) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '100px', // start loading a bit before image enters viewport
        }
      );
      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) observer.unobserve(imgRef.current);
      };
    } else {
      // Fallback: load immediately if no IntersectionObserver support
      setIsVisible(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      className={className}
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

  // Manual drag handlers for mobile
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

  // Auto-slide for desktop
  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;

    let speed = 1.7;
    let frame;

    const loop = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; // seamless loop
      }
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(frame);
  }, []);

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

      {/* Desktop Auto Slide */}
      <div className="hidden md:flex gap-4 overflow-hidden" ref={desktopRef}>
        {portfolioItems.concat(portfolioItems).map((item, index) => (
          <div key={index} className="relative flex-shrink-0 w-[500px] mx-4 mb-20 group">
            <LazyImage
              src={item.img}
              alt={item.alt}
              className="w-full h-[300px] object-cover rounded-xl"
              data-hoverable
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-800 flex items-center justify-center rounded-xl">
              <button className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition " data-hoverable>
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Manual Slide */}
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
            <LazyImage
              src={item.img}
              alt={item.alt}
              className="w-full h-[200px] object-cover rounded-xl"
              data-hoverable
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
              <button className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;