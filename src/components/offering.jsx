const Offering = () => {
  return (
    <div id="services">
      {/* Section Heading */}
      <div className="px-4 py-8 md:px-8 md:py-12 lg:px-16 container mx-auto autoShow">
        <h1
          className="text-[#f3a734] text-5xl mb-5 text-center"
          style={{ fontFamily: "Kumer One" }}
        >
          We Offer
        </h1>
        <h3
          className="text-white text-2xl text-center autoShow"
          style={{ fontFamily: "Kumer One" }}
        >
          Professional website designs that build trust, drive conversions, and
          reflect your brand identity.
        </h3>
      </div>

      {/* Service Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 md:gap-8 
        px-4 py-8 md:px-8 md:py-12 lg:px-16 
        container mx-auto"
      >
        {/* 1. Custom Website Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Custom Website Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Bespoke websites built from scratch using modern technologies like
            React, Next.js, and Node.js. We create fully custom solutions
            tailored to your unique business needs with optimized performance,
            security, and scalability. Perfect for complex web applications and
            unique functionality requirements.
          </p>
        </div>

        {/* 2. Webflow Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Webflow Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Professional Webflow websites with custom interactions and CMS
            architecture. We combine Webflow's visual editor with custom code
            when needed, delivering stunning sites that are easy to maintain.
            Includes SEO-optimized templates, membership systems, and e-commerce
            integrations.
          </p>
        </div>

        {/* 3. Website Redesign */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Website Redesign
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Transform your outdated website into a modern, high-performing
            digital asset. We analyze your current site, identify improvement
            areas, and rebuild with better UX, visual design, and technical
            architecture while preserving your SEO equity. Includes content
            strategy and migration.
          </p>
        </div>

        {/* 4. Technical SEO */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Technical SEO Optimization
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Improve your website's search engine visibility through comprehensive
            technical enhancements. We optimize site architecture, page speed,
            mobile responsiveness, structured data, and security. Includes
            crawlability fixes, indexation strategies, and Core Web Vitals
            optimization.
          </p>
        </div>

        {/* 5. Web Application Development */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Web Application Development
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Build custom web applications with complex functionality like user
            accounts, data processing, and API integrations. Our full-stack
            development covers frontend interfaces, backend systems, database
            architecture, and third-party service connections.
          </p>
        </div>

        {/* 6. Content SEO */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Content & On-Page SEO
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Optimize your website content for maximum search visibility and
            conversions. We conduct keyword research, optimize page structure,
            improve internal linking, and create SEO-friendly content strategies
            that align with search intent and your business goals.
          </p>
        </div>

        {/* 7. Website Maintenance */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Website Maintenance
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Keep your website secure, updated, and performing at its best with
            our maintenance plans. Includes security patches, performance
            monitoring, content updates, backups, and technical support.
            Available for both custom-built and Webflow websites.
          </p>
        </div>

        {/* 8. Performance Optimization */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            Website Performance Optimization
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Speed up your website for better user experience and search rankings.
            We analyze and optimize loading times through code minification,
            image optimization, caching strategies, and server configuration.
            Includes Core Web Vitals improvements and monitoring.
          </p>
        </div>

        {/* 9. UI/UX Design */}
        <div className="bg-[#111] rounded-xl shadow-lg p-4 md:p-6 lg:p-8 min-h-[320px] md:min-h-[360px] lg:min-h-[400px] hover:shadow-2xl transition-all duration-300 border border-gray-800 holographic-card autoShow">
          <h2 className="text-xl font-bold mb-4 text-[#f3a734]">
            UI/UX Design
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Professional interface design focused on usability and conversions.
            We create intuitive user flows, wireframes, and high-fidelity
            prototypes that enhance engagement. Our design system approach
            ensures consistency across all pages and devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offering;
