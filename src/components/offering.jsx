const Offering = () => {
  return (
    <div id="services">
      {/* Section Heading */}
      <div className="px-4 py-8 md:px-8 md:py-12 lg:px-16 container mx-auto autoShow">
        <h1
          className="text-[#f3a734] text-5xl mb-5 text-center"
          style={{ fontFamily: "Kumer One" }}
        >
          What I Offer
        </h1>
        <h3
          className="text-white text-2xl text-center autoShow"
          style={{ fontFamily: "Kumer One" }}
        >
          End‑to‑end full‑stack development that delivers performance, security,
          and beautiful user experiences.
        </h3>
      </div>

      {/* Service Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 md:gap-8 
        px-4 py-8 md:px-8 md:py-12 lg:px-16 
        container mx-auto"
      >
        {/* 1. Full‑Stack Web Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Full‑Stack Web Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Complete front‑end and back‑end development using modern stacks like
            React, Next.js, Node.js, Express, and MongoDB/PostgreSQL. I build
            scalable, secure, and high‑performance applications tailored to your
            business requirements.
          </p>
        </div>

        {/* 2. Custom API Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Custom API Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            I build REST and GraphQL APIs with authentication, data validation,
            access control, and integration capabilities. Perfect for dashboards,
            SaaS apps, and mobile‑friendly backends.
          </p>
        </div>

        {/* 3. Modern Front‑End UI Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Modern Front‑End UI Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Pixel‑perfect, responsive UI built using React, Next.js, Tailwind
            CSS, and component‑driven architecture. I focus on speed, usability,
            and accessibility to deliver a premium user experience.
          </p>
        </div>

        {/* 4. Database Design & Optimization */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Database Design & Optimization
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Efficient database schemas, indexing, query optimization, and secure
            data modeling using MongoDB, PostgreSQL, and Firebase. Ensures fast,
            scalable, and reliable data performance.
          </p>
        </div>

        {/* 5. Authentication & Security */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Authentication & Security
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Secure user authentication systems including JWT, OAuth, Firebase
            Auth, and role‑based access control. I implement encryption, input
            sanitization, and best security practices.
          </p>
        </div>

        {/* 6. DevOps & Deployment */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            DevOps & Deployment
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Smooth deployment using Vercel, Netlify, Docker, and cloud hosting.
            I set up CI/CD, environment variables, and optimized production
            builds for reliability and speed.
          </p>
        </div>

        {/* 7. Website & App Maintenance */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Website & App Maintenance
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Long‑term support including updates, bug fixes, monitoring, backups,
            and performance improvements for both front‑end and back‑end
            systems.
          </p>
        </div>

        {/* 8. Performance Optimization */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Performance Optimization
          </h2>
          <p className="text-gray-200 leading-relaxed">
            I optimize loading speeds, reduce bundle size, improve server
            response time, and enhance overall performance using advanced
            debugging and profiling tools.
          </p>
        </div>

        {/* 9. UI/UX Design */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            UI/UX Design
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Clean, modern, user‑focused design using wireframes, prototypes, and
            polished UI systems. I blend aesthetic design with real usability
            principles to create intuitive experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
