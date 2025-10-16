import logo from '/src/assets/onlylogo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <nav className="fixed w-full bg-transparent z-50 pop ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" data-hoverable>
            <img 
              data-hoverable
              src={logo} 
              loading="lazy" 
              width="61"
              alt="Apexium Studio Logo" 
              className="pb-5 mt-10 w-12 sm:w-[61px]" // w-12 for mobile, original size for sm+
            />
            <span className="text-[#fbb03c] pt-10 pl-3 font-keania text-xl sm:text-2xl" data-hoverable>
              Apexium Studio
            </span>
          </Link>
          
          {location.pathname === '/login' ? (
            <button
              data-hoverable
              onClick={() => navigate('/')}
              className="text-[#fbb03c] border border-[#fbb03c] rounded-lg px-3 py-1.5 mt-8 font-roboto font-semibold text-sm sm:px-4 sm:py-2 sm:text-[15px] hover:bg-[#fbb03c] hover:text-black transition"
            >
              HOME
            </button>
          ) : (
            <button
              data-hoverable
              onClick={() => navigate('/login')}
              className="text-[#fbb03c] border border-[#fbb03c] rounded-lg px-3 py-1.5 mt-8 font-roboto font-semibold text-sm sm:px-4 sm:py-2 sm:text-[15px] hover:bg-[#fbb03c] hover:text-black transition"
            >
              LET'S TALK
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;