import { useNavigate } from "react-router-dom";
import DarkVeil from "./DarkVeil";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

const Hero = () => {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log("Animation finished!");
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black">
      {/* DarkVeil Background */}
      <DarkVeil />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
        <SplitText
          text="Welcome to my portfolio "
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug"
          style={{ fontFamily: "Keania One" }}
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text="I am Joy Shadman a Full Stack Developer."
          className="text-lg sm:text-xl md:text-2xl text-white mt-2 md:mt-2 mb-10"
          style={{ fontFamily: "Keania One",  }}
          delay={200}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <ShinyText
          text="Scroll Down to Explore More"
          disabled={false}
          speed={3}
          className='custom-class'
        />

        <button
          onClick={() => navigate("/login")}
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border-2 border-[#fbb03c] text-[#fbb03c] rounded-lg font-semibold hover:bg-[#fbb03c] hover:text-black transition-all duration-300"
          data-hoverable
        >
          LET'S TALK
        </button>
      </div>
    </div>
  );
};

export default Hero;
