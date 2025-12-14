import React, { useRef, useState, useEffect } from "react";
import img1 from "../assets/portfolio/1.png";
import img2 from "../assets/portfolio/2.png";
import img3 from "../assets/portfolio/3.png";
import img4 from "../assets/portfolio/4.png";
import img5 from "../assets/portfolio/5.png";
import img6 from "../assets/portfolio/6.png";
import img7 from "../assets/portfolio/7.png";

/* ===================== DATA ===================== */
const portfolioItems = [
  {
    img: img1,
    title: "Instagram Landing Page",
    description:
      "A modern landing page for Instagram promotions with responsive design.",
    alt: "Project 1",
    link: "https://insta-project-tau.vercel.app/",
  },
  {
    img: img2,
    title: "Travel Agency Website",
    description:
      "A sleek, user-friendly travel booking website with interactive UI.",
    alt: "Project 2",
    link: "https://jadoo-project.vercel.app/",
  },
  {
    img: img3,
    title: "Coffee Brand Website",
    description: "Brand website for a coffee shop with online ordering integration.",
    alt: "Project 3",
    link: "https://coffee-website-project-rosy.vercel.app/",
  },
  {
    img: img4,
    title: "Tour Booking Platform",
    description: "A tour booking platform with smooth UX and responsive design.",
    alt: "Project 4",
    link: "https://touring-website-project.vercel.app/",
  },
  {
    img: img5,
    title: "Restaurant Website",
    description: "Restaurant website with menu, reservation, and contact sections.",
    alt: "Project 5",
    link: "https://restaurant-project-one-lyart.vercel.app/",
  },
  {
    img: img6,
    title: "Personal Todo App",
    description: "A modern personal todo app with drag-and-drop task management.",
    alt: "Project 6",
    link: "https://personaltodolist-mu.vercel.app/",
  },
  {
    img: img7,
    title: "E-Commerce Website",
    description: "Full-featured e-commerce platform with cart and payment integration.",
    alt: "Project 7",
    link: "https://e-commerce-seven-beige-86.vercel.app/",
  },
];

/* ===================== LAZY IMAGE ===================== */
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
              observer.unobserve(imgEl);
            }
          });
        },
        { rootMargin: "100px" }
      );

      observer.observe(imgEl);
      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : undefined}
      alt={alt}
      loading="lazy"
      className={`transition-all duration-700 ease-out opacity-0 ${
        isVisible ? "opacity-100" : ""
      } ${className}`}
      {...props}
    />
  );
};

/* ===================== PORTFOLIO COMPONENT ===================== */
const Portfolio = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [paused, setPaused] = useState(false);

  // Mobile tap overlay
  const [activeIndex, setActiveIndex] = useState(null);

  /* ---------- Mobile drag ---------- */
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

  /* ---------- Desktop auto slide ---------- */
  useEffect(() => {
    const container = desktopRef.current;
    if (!container) return;
    let frame;
    const speed = 1.7;

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
      {/* Header */}
      <h1
        className="mt-[200px] text-[#f3a734] text-5xl mb-5 text-center"
        style={{ fontFamily: "Kumar One" }}
      >
        My Works
      </h1>
      <h3
        className="text-white text-2xl mb-20 text-center"
        style={{ fontFamily: "Kumar One" }}
      >
        I design conversion-focused, modern websites that bring your brand to life.
      </h3>

      {/* ================= DESKTOP ================= */}
      <div
        ref={desktopRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="hidden md:flex gap-4 overflow-hidden"
      >
        {portfolioItems.concat(portfolioItems).map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[500px] mx-4 mb-20 group"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <LazyImage
                src={item.img}
                alt={item.alt}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </a>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center rounded-xl text-center px-6">
              <h2 className="text-white text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-200 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
                data-hoverable
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div
        ref={mobileRef}
        className="flex md:hidden gap-4 overflow-x-auto touch-pan-x"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDown ? "grabbing" : "grab" }}
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[300px] mx-4 mb-20 group"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <LazyImage
                src={item.img}
                alt={item.alt}
                className="w-full h-[200px] object-cover rounded-xl"
              />
            </a>
            {/* Tap Overlay */}
            <div
              className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center rounded-xl text-center px-4 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h2 className="text-white text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-200 text-xs mb-2">{item.description}</p>
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
