import React from "react";

const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <span
      className={`
        inline-block
        text-transparent
        bg-clip-text
        ${className}
      `}
      style={{
        backgroundImage: `
          linear-gradient(
            120deg,
            #9ca3af 35%,
            #ffffff 50%,
            #9ca3af 65%
          )
        `,
        backgroundSize: "250% 100%",
        animation: disabled
          ? "none"
          : `shine ${speed}s ease-in-out infinite`,
        filter: "drop-shadow(0 0 6px rgba(255,255,255,0.15))",
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
