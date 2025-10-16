import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/onlylogo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const SocialIcons = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, bgColor: '#3b5999', label: 'Facebook' },
    { icon: <FaTwitter />, bgColor: '#000000', label: 'X (Twitter)' },
    { icon: <FaLinkedinIn />, bgColor: '#0077b5', label: 'LinkedIn' },
    { icon: <FaYoutube />, bgColor: '#ff0000', label: 'YouTube' }
  ];

  return (
    <div style={{ alignItems: 'center' }} data-hoverable>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        gap: '12px' // Added gap for better spacing
      }}>
        {socialLinks.map((social, index) => (
          <li key={index} style={{ margin: 0 }}>
            <a
              href="#"
              className="social-icon"
              style={{ '--bg-color': social.bgColor }}
              aria-label={social.label}
            >
              <span className="icon">{social.icon}</span>
            </a>
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        .social-icon {
          cursor: none;
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 2px solid white;
          z-index: 1;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
        }
        
        .social-icon::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-color);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 2;
        }
        
        .social-icon:hover::before {
          top: 0;
        }
        
        .icon {
          position: relative;
          color: #262626;
          transition: all 0.5s ease;
          z-index: 3;
          font-size: 18px;
        }
        
        .social-icon:hover .icon {
          color: white;
          transform: rotateY(360deg) scale(1.1);
        }
      `}</style>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-[#151414] relative">
      <div className="container mx-auto px-4">
        {/* Footer CTA */}
        <div className="border-b border-[#373636] py-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-[#ff5e14] text-3xl mr-4"></i>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-phone text-[#ff5e14] text-3xl mr-4"></i>
                <div></div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex items-center">
                <i className="far fa-envelope-open text-[#ff5e14] text-3xl text-center"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-5 relative z-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-10">
              <div className="mb-8  ">
                <a className='flex ' href=""data-hoverable>
                  <img 
                  data-hoverable
                    src={logo}
                    className="max-w-[100px]" 
                    alt="Apexium Studio Logo"
                  />
                              <span data-hoverable className="text-[#fbb03c] pt-10 pl-3 font-keania text-2xl mt-11">
              Apexium Studio
            </span>
                </a>
              </div>
              
              <p className="text-[#7e7e7e] text-sm mb-4 leading-7">
                Apexium Studio specializes in creating immersive digital experiences through innovative design and cutting-edge technology solutions.
              </p>
              <div>
                <span className="text-white text-xl font-bold font-poppins block mb-5">Follow us</span>
                <SocialIcons />
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4 mb-10">
              <div className="relative mb-10">
                <h3 className="text-white text-xl font-semibold mb-10">Useful Links</h3>
                <div className="absolute left-0 bottom-[-15px] h-0.5 w-12 bg-[#ff5e14]"></div>
              </div>
              <ul className="flex flex-wrap" data-hoverable>
                <li className="w-1/2 mb-3">
                  <a href="#home" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Home</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#about" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">About</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#services" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Services</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#portfolio" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Portfolio</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#contact" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Contact</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#customer" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Customer</a>
                </li>
                <li className="w-1/2 mb-3">
                  <a href="#why" className="text-[#878787] capitalize hover:text-[#ff5e14] cursor-none">Why choose us</a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/3 px-4 mb-10">
              <div className="relative mb-10">
                <h3 className="text-white text-xl font-semibold mb-10">Mail us</h3>
                <div className="absolute left-0 bottom-[-15px] h-0.5 w-12 bg-[#ff5e14]"></div>
              </div>
              <div className="relative">
                <span className="text-[#757575] text-sm">mail@apexiumstudio.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="bg-[#202020] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-[#878787] text-sm">
                Copyright &copy; {new Date().getFullYear()} Apexium Studio. All Rights Reserved
              </p>
            </div>
            <div className="hidden md:block" data-hoverable>
              <ul className="flex">
                <li className="ml-5">
                  <a href="#home" className="text-[#878787] text-sm hover:text-[#ff5e14] cursor-none">Home</a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-[#878787] text-sm hover:text-[#ff5e14] cursor-none">Terms</a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-[#878787] text-sm hover:text-[#ff5e14] cursor-none">Privacy</a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-[#878787] text-sm hover:text-[#ff5e14] cursor-none">Policy</a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-[#878787] text-sm hover:text-[#ff5e14] cursor-none">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;