import React from "react";

const Why = () => {
  return (
    <div className="bg-black">
      <section
        id="why"npo
        className="relative block px-4 sm:px-6 md:px-10 py-10 md:py-20 border-t border-b mb-70"
      >
        {/* Heading */}
        <div className="relative mx-auto max-w-5xl text-center autoShow">
          <span
            className="text-[#f3a734] my-3 flex items-center justify-center font-medium uppercase tracking-wider autoShow"
            style={{ fontFamily: "Kumer One" }}
          >
            Why choose us
          </span>
          <h2
            className="text-white block w-full bg-gradient-to-b bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl autoShow"
            style={{ fontFamily: "Kumer One" }}
          >
            Build a Website That Your Customers Love
          </h2>
          <p
            className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-300 autoShow px-2 sm:px-0"
            style={{ fontFamily: "Kumer One" }}
          >
            Our templates allow for maximum customization. No technical skills
            required – our intuitive design tools let you get the job done
            easily.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="relative mx-auto max-w-7xl z-10 grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 sm:gap-8 pt-10 sm:pt-14 px-2 sm:px-4 md:px-0"
        >
          {/* 1 */}
          <div className="holographic-card p-6 sm:p-8 text-center autoShow rounded-lg min-h-[300px] sm:min-h-[340px] lg:min-h-[280px]">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f3a734 30%, rgb(234, 88, 12) 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-color-swatch h-6 w-6"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
                <line x1={17} y1={17} x2={17} y2="17.01" />
              </svg>
            </div>
            <h3 className="mt-6 text-white font-semibold">Customizable</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
              Tailor your landing page's look and feel, from the color scheme to
              the font size, to the design of the page.
            </p>
          </div>

          {/* 2 */}
          <div className="holographic-card p-6 sm:p-8 text-center autoShow rounded-lg min-h-[300px] sm:min-h-[340px] lg:min-h-[280px]">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f3a734 30%, rgb(234, 88, 12) 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bolt h-6 w-6"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
              </svg>
            </div>
            <h3 className="mt-6 text-white font-semibold">Fast Performance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
              We build our templates for speed in mind, for super-fast load
              times so your customers never waver.
            </p>
          </div>

          {/* 3 */}
          <div className="holographic-card p-6 sm:p-8 text-center autoShow rounded-lg min-h-[300px] sm:min-h-[340px] lg:min-h-[280px]">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-600"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f3a734 30%, rgb(234, 88, 12) 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-tools h-6 w-6"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                <polyline points="12 8 7 3 3 7 8 12" />
                <line x1={7} y1={8} x2="5.5" y2="9.5" />
                <polyline points="16 12 21 17 17 21 12 16" />
                <line x1={16} y1={17} x2="14.5" y2="18.5" />
              </svg>
            </div>
            <h3 className="mt-6 text-white font-semibold">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-300">
              Everything you need to succeed and launch your landing page, right
              out of the box. No need to install anything else.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why;