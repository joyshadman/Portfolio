import './App.css';
import './index.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor';
import Hero from './components/Hero';
import Portfolio from './components/porfolio';
import Offering from './components/offering';
import Aboutus from './components/Aboutus';
import Testimonials from './components/Testimonials';
import Why from './components/why';
import Footer from './components/Footer';

import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div className="bg-black ">
      <CustomCursor />
      <Navbar />
      <ScrollToTop /> 
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Aboutus />
              <Offering />
              <Portfolio />
              <Testimonials />
              <Why />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<div className=""><LoginPage /></div>} />
      </Routes>
    </div>
  );
}

export default App;