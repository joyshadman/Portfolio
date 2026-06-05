import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import your images
import img1 from "../assets/portfolio/1.png";
import img2 from "../assets/portfolio/2.png";
import img3 from "../assets/portfolio/3.png";
import img4 from "../assets/portfolio/4.png";
import img5 from "../assets/portfolio/5.png";
import img6 from "../assets/portfolio/6.png";
import img7 from "../assets/portfolio/7.png";
import img8 from "../assets/portfolio/8.png";
import img9 from "../assets/portfolio/9.png";
import img10 from "../assets/portfolio/10.png";

const portfolioItems = [
  {
    img: img10,
    title: "Apexium AI Studio",
    category: "AI Website Builder",
    description: "AI-powered website builder that generates responsive layouts, content, and HTML from natural language prompts, with publishing, community sharing, and export features.",
    link: "https://ai-website-henna-eight.vercel.app/",
    tags: ["React", "Node.js", "Express.js", "Neon PostgreSQL", "Prisma", "Better Auth", "GPT-OSS-120B", "Tailwind CSS"]
  },
  {
    img: img6,
    title: "TaskFlow",
    category: "Productivity Tool",
    description: "Modern Todo application featuring drag-and-drop and local persistence.",
    link: "https://personaltodolist-mu.vercel.app/",
    tags: ["React", "local storage", "firebase", "framer motion", "tailwind", "authentication"]
  },
  {
    img: img8,
    title: "Moviehub",
    category: "Full Stack Development",
    description: "A dynamic movie streaming platform featuring real-time data fetching, user authentication, and a responsive glassmorphic interface.",
    link: "https://movie-hub-sigma-five.vercel.app/",
    tags: ["React", "local storage", "firebase", "framer motion", "tailwind", "authentication"]
  },
  {
    img: img9,
    title: "Trade Predictor",
    category: "Fintech & Full-Stack",
    description: "A high-fidelity trading dashboard featuring real-time market analysis, predictive signaling, and a glassmorphic 'Neural Log' for tracking asset volatility.",
    link: "https://my-project-delta-nine-80.vercel.app/", // Note: You might want to update this URL to match the title
    tags: ["React", "Firebase", "Framer Motion", "Tailwind CSS", "Recharts", "Lucide Icons", "Socket", "API Integration", "socket.io", "real-time data"]
  },
  {
    img: img7,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "Full-featured platform with cart logic and seamless payment integration.",
    link: "https://e-commerce-seven-beige-86.vercel.app/",
    tags: ["React", "Tailwind", "dummy data", "react store", "React Redux", "local storage"]
  },
  {
    img: img1,
    title: "PumpInsta Agency",
    category: "Agency Solution",
    description: "A premium marketing agency platform designed for Instagram growth. Features custom analytics dashboards, automated lead funnels, and high-conversion aesthetic layouts.",
    link: "https://insta-project-tau.vercel.app/",
    tags: ["React", "Tailwind CSS"]
  },
  {
    img: img5,
    title: "Gourmet Restaurant",
    category: "Web Design",
    description: "Elegant digital menu and reservation system for premium dining.",
    link: "https://restaurant-project-one-lyart.vercel.app/",
    tags: ["React", "Tailwind", "Responsive Design"]
  },
  {
    img: img3,
    title: "Brew & Bean",
    category: "Branding",
    description: "Minimalist coffee brand experience with integrated online ordering.",
    link: "https://coffee-website-project-rosy.vercel.app/",
    tags: ["React", "Tailwind", "Responsive Design"]
  },
  {
    img: img4,
    title: "Tour Booking Platform",
    category: "Travel Tech",
    description: "A tour booking platform with smooth UX and responsive design.",
    link: "https://touring-website-project.vercel.app/",
    tags: ["React", "Tailwind", "Responsive Design"]
  },
  {
    img: img2,
    title: "Travel Agency Portal",
    category: "UI/UX Design",
    description: "Interactive booking experience with fluid transitions and immersive imagery.",
    link: "https://jadoo-project.vercel.app/",
    tags: ["React", "Tailwind", "Responsive Design"]
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  // Logic to show either first 6 or all items
  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="portfolio" className="py-24 bg-black text-white relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#fbb03c]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#fbb03c] font-mono tracking-[0.3em] uppercase text-sm mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tight"
          >
            Featured <span className="text-white/40">Projects</span>
          </motion.h1>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.title} // Using title as key for AnimatePresence
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#fbb03c]">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#fbb03c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded bg-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#fbb03c] transition-all" data-hoverable
                    >
                      Live Preview <FaExternalLinkAlt size={12} />
                    </a>
                    <a href="https://github.com/joyshadman" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors" data-hoverable>
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Footer CTA */}
        <motion.div className="mt-20 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95" data-hoverable
          >
            <div className="absolute inset-0 bg-[#fbb03c] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">
              {showAll ? "Show Less" : "View All Projects"}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;