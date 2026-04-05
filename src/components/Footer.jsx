import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaArrowUp, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/onlylogo.png';

const SocialIcons = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, bgColor: '#3b5999', label: 'Facebook' },
    { icon: <FaLinkedinIn />, bgColor: '#0077b5', label: 'LinkedIn' },
    { icon: <FaYoutube />, bgColor: '#ff0000', label: 'YouTube' },
    { icon: <FaGithub />, bgColor: '#333', label: 'GitHub' }
  ];

  return (
    <div className="flex gap-4" data-hoverable>
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href="#"
          whileHover={{ y: -5 }}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/60 hover:text-white hover:border-[#fbb03c] transition-all duration-300"
          data-hoverable
          aria-label={social.label}
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

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#fbb03c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6" data-hoverable>
              <img src={logo} alt="Logo" className="w-10" />
              <span className="text-white font-bold text-xl tracking-tighter">
                Apexium <span className="text-[#fbb03c]">Studio</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Architecting high-performance digital experiences through innovative design and full-stack excellence.
            </p>
            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-mono text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4 text-sm text-white/50" data-hoverable>
              <li><Link to="/" className="hover:text-[#fbb03c] transition-colors" data-hoverable>Home</Link></li>
              <li><a href="#about" className="hover:text-[#fbb03c] transition-colors" data-hoverable>About</a></li>
              <li><a href="#portfolio" className="hover:text-[#fbb03c] transition-colors" data-hoverable>Portfolio</a></li>
              <li><Link to="/login" className="hover:text-[#fbb03c] transition-colors" data-hoverable>Client Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-mono text-sm uppercase tracking-widest" data-hoverable>Services</h4>
            <ul className="space-y-4 text-sm text-white/50" data-hoverable>
              <li className="hover:text-white transition-colors cursor-default" data-hoverable>Full-Stack Development</li>
              <li className="hover:text-white transition-colors cursor-default" data-hoverable>UI/UX Glassmorphism</li>
              <li className="hover:text-white transition-colors cursor-default" data-hoverable>Animated Experiences</li>
              <li className="hover:text-white transition-colors cursor-default" data-hoverable>E-commerce Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-mono text-sm uppercase tracking-widest">Let's Connect</h4>
            <div className="space-y-4">
              <p className="text-sm text-white/50">
                Have a vision? We bring it to life with code and design.
              </p>
              <a 
                href="mailto:mail@apexiumstudio.com" 
                className="block text-[#fbb03c] font-mono text-sm hover:underline"
                data-hoverable
              >
                mail@apexiumstudio.com
              </a>
              <button 
                onClick={scrollToTop}
                className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors"
                data-hoverable
              >
                Back to top <FaArrowUp size={10} />
              </button>
            </div>
          </div>
        </div> {/* End Grid */}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            &copy; {currentYear} Apexium Studio. Crafted with precision.
          </p>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.1em] text-white/20" data-hoverable>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div> {/* End Bottom Bar */}
      </div> {/* End Container */}
    </footer>
  );
};

export default Footer;