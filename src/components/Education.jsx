import React, { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-20">
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-[#fbb03c] mb-16 autoShow">
        Education Timeline
      </h1>

      <div className="relative container mx-auto max-w-6xl flex flex-col items-center">
        {/* Timeline Line (DESKTOP ONLY) */}
        <div
          className="
            hidden md:block
            absolute left-1/2 -translate-x-1/2
            w-[2px] h-full
            bg-gradient-to-b from-[#fbb03c] to-[#f7c66a]
            rounded-full
            shadow-[0_0_25px_#fbb03c]
          "
        />

        <div className="space-y-24 w-full">
          {[
            {
              title: "High School",
              time: "2020 – 2022",
              org: "Banophool Greenheart School & College",
              extra: ["Subject: Commerce", "SSC GPA: 4.94"],
            },
            {
              title: "Diploma in CST",
              time: "2022 – 2026",
              org: "UCEP Institute of Science and Technology",
              extra: ["Ongoing"],
            },
            {
              title: "Fullstack Development",
              time: "2025 – Present",
              org: "Creative IT",
              extra: ["Finished"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex w-full relative ${
                index % 2 === 0
                  ? "md:justify-start justify-start"
                  : "md:justify-end justify-start"
              }`}
            >
              {/* Card */}
              <div
                className="
                  edu-animate opacity-0 translate-y-12
                  transition-all duration-700
                  relative group
                  bg-transparent md:bg-[#0f0f0f]/80
                  backdrop-blur-0 md:backdrop-blur-md
                  p-4 md:p-6
                  rounded-2xl
                  w-80 md:w-96
                  text-white
                  border border-[#fbb03c]/30
                  shadow-none md:shadow-[0_10px_40px_rgba(251,176,60,0.15)]
                  hover:shadow-[0_20px_70px_rgba(251,176,60,0.4)]
                  hover:-translate-y-2 hover:scale-[1.03]
                  hover:border-[#fbb03c]
                  cursor-pointer autoShow
                "
                data-hoverable
              >
                {/* Hover Glow (DESKTOP ONLY) */}
                <div
                  className="
                    hidden md:block
                    absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-r from-[#fbb03c]/10 to-transparent
                    pointer-events-none
                  "
                />

                <h2 className="text-xl font-semibold text-[#fbb03c] mb-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300">{item.time}</p>
                <p className="text-sm mt-3 text-gray-200">{item.org}</p>

                {item.extra.map((e, i) => (
                  <p key={i} className="text-xs mt-2 text-gray-400">
                    {e}
                  </p>
                ))}
              </div>

              {/* Dot (Desktop only glow) */}
              <div className="absolute md:left-1/2 left-0 md:-translate-x-1/2 top-8">
                <div
                  className="
                    w-4 h-4 md:w-5 md:h-5
                    bg-[#fbb03c]
                    rounded-full
                    shadow-none md:shadow-[0_0_20px_#fbb03c]
                    animate-pulse
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
