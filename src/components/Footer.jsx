import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaArrowUp, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/onlylogo.png';

const SocialIcons = () => {
  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/joyshadman", label: 'GitHub' },
    { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/joyshadman", label: 'LinkedIn' },
    { icon: <FaYoutube />, link: "#", label: 'YouTube' },
    { icon: <FaFacebookF />, link: "#", label: 'Facebook' },
  ];

  return (
    <div className="flex gap-3" data-hoverable>
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 text-white/40 hover:text-[#fbb03c] hover:border-[#fbb03c]/50 hover:bg-[#fbb03c]/5 transition-all duration-300 backdrop-blur-md"
          aria-label={social.label}
          data-hoverable
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skill Stack', href: '#skill' },
    { name: 'Education', href: '#education' },
    { name: 'Contribution', href: '#contrebution' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#fbb03c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-5 pr-0 lg:pr-20">
            <Link to="/" className="flex items-center gap-3 mb-8 group" data-hoverable>
              <img src={logo} alt="Logo" className="w-10 filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              <span className="text-white font-black text-2xl tracking-tighter uppercase">
                Joy <span className="text-[#fbb03c]">Shadman</span>
              </span>
            </Link>
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
              Specializing in MERN stack development and high-performance UI/UX. We bridge the gap between complex logic and elegant aesthetics.
            </p>
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 mb-8">
            </div>
            
            <SocialIcons />
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 font-mono text-xs uppercase tracking-[0.3em] opacity-30">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-white/40 hover:text-[#fbb03c] transition-all flex items-center gap-2 group"
                    data-hoverable
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#fbb03c] transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl">
            <h4 className="text-white font-bold mb-6 font-mono text-xs uppercase tracking-[0.3em] opacity-30">Direct Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#fbb03c]"><FaEnvelope size={14}/></div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-white/30 mb-1">Email Inquiry</p>
                  <a href="mailto:joyshadman@gmail.com" className="text-white hover:text-[#fbb03c] transition-colors font-medium" data-hoverable>
                    joyshadman@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-[#fbb03c]"><FaMapMarkerAlt size={14}/></div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-white/30 mb-1">Location</p>
                  <p className="text-white font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>

              <button
                onClick={scrollToTop}
                className="w-full mt-4 flex items-center justify-center gap-3 py-4 rounded-2xl border border-white/10 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white hover:bg-white/5 transition-all group"
                data-hoverable
              >
                Back to surface <FaArrowUp size={10} className="group-hover:-translate-y-1 transition-transform"/>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              &copy; {currentYear} Joy Shadman • Apexium Studio.
            </p>
            <p className="text-[9px] uppercase tracking-[0.1em] text-white/10">
              Built with React, Tailwind & Motion
            </p>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20" data-hoverable>
            <a href="#" className="hover:text-[#fbb03c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#fbb03c] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;