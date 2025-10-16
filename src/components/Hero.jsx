import { useNavigate } from "react-router-dom";
import DarkVeil from "./DarkVeil";
import SplitText from "./SplitText";
import BlurText from "./BlurText";

const Hero = () => {
  const navigate = useNavigate();

  // ← Add this function to handle animation complete
  const handleAnimationComplete = () => {
    console.log("Animation finished!");
    // You can trigger other actions here if needed
    
  };

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      {/* DarkVeil Background */}
      <DarkVeil />


      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 16px",
          color: "white",
        }}
      >
        <SplitText
          text="Portfolio of R.Joy Shadman Full-Stack Developer Turning Ideas into Interactive Web Experiences"
          className="text-3xl md:text-4xl lg:text-5xl mb-4 mt-50 pop w-5xl "
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
          text="Designing, Developing & Deploying Modern Web Apps"
          className="text-white text-xl md:text-2xl mt-5 transition pop "
          style={{ fontFamily: "Keania One" }}
          delay={100}
          duration={7.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete} 
        />
        <button
          onClick={() => navigate("/login")}
          className="mt-10 block w-30 h-10 text-[#fbb03c] border-2 border-[#fbb03c] rounded-lg px-4 py-2 font-roboto font-semibold hover:bg-[#fbb03c] hover:text-black transition pop"
        data-hoverable >
          LETS TALK
        </button>
      </div>
    </div>
  );
};

export default Hero;
