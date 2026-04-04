import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/customcursor';
import Portfolio from './components/porfolio';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import ScrollToTop from './components/ScrollToTop'; 
import Contact from './components/Contact';

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
              <Aboutus />
              <Portfolio />
              <Contact/>
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