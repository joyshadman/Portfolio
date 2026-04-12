import './index.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion";

import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor';
import Portfolio from './components/porfolio';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop'; 
import Contact from './components/Contact';
import Contribution from './components/contrebution';

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#fbb03c]/30">
      {/* Main Content Area */}
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <ScrollToTop /> 
        
        <Routes>              
          <Route
            path="/"
            element={
              <main>
                <ScrollReveal><Aboutus /></ScrollReveal>
                <ScrollReveal><Portfolio /></ScrollReveal>
                <ScrollReveal><Contribution /></ScrollReveal>
                <ScrollReveal><Contact /></ScrollReveal>
                <Footer />
              </main>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;