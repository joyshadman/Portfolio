import { useNavigate } from "react-router-dom";
import DarkVeil from "./DarkVeil";


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "600px", position: "relative", }}>
      {/* DarkVeil Background */}
      <DarkVeil />

      {/* Content on top of DarkVeil */}
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

        <h1
          className="text-3xl md:text-4xl lg:text-5xl mb-4 mt-50 pop"
          style={{ fontFamily: "Keania One" }}
          
        >
          Delivering standout websites that elevate your brand presence
        </h1>
        <h3
          className="text-xl md:text-2xl mt-5 fadeUp pop"
          style={{ fontFamily: "Roboto", fontWeight: 200 }}
        >
          Webflow Designer and Certified Web Designer
        </h3>
        <button
          onClick={() => navigate("/login")}
          className="mt-10 block w-30 h-10 text-[#fbb03c] border-2 border-[#fbb03c] rounded-lg px-4 py-2 font-roboto font-semibold hover:bg-[#fbb03c] hover:text-black transition pop "
         data-hoverable

           

        >
          LETS TALK
        </button>
      </div>
    </div>
  );
};

export default Hero;
