import './index.css';
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor';
import Portfolio from './components/porfolio';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop'; 
import Contact from './components/Contact';
import Contribution from './components/contrebution';

function App() {
  const [init, setInit] = useState(false);

  // Initialize the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Creates a link to the cursor
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#fbb03c" }, // Matches your Joy Shadman accent color
      links: {
        color: "#fbb03c",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* Live Animated Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      {/* Main Content Area */}
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <ScrollToTop /> 
        
        <Routes>             
          <Route
            path="/"
            element={
              <>
                <Aboutus />
                <Portfolio />
                <Contribution />
                <Contact/>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;