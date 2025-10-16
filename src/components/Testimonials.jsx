import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our website traffic increased by 240% after their redesign. The team understood our brand perfectly and delivered beyond expectations.",
      author: "Sarah Johnson",
      company: "Bloom Marketing",
    },
    {
      quote: "As a small business, we needed a site that converts. They built us a beautiful, functional site that's already paying for itself in new clients.",
      author: "Michael Chen",
      company: "Urban Bistro",
    },
    {
      quote: "Their ongoing maintenance package has saved us countless hours. Quick response times and they explain technical issues in plain English.",
      author: "David Rodriguez",
      company: "Summit Financial",
    },
    {
      quote: "We've worked with 3 other agencies before finding these guys. Finally, a team that listens first and delivers what we actually asked for.",
      author: "Emily Wilson",
      company: "Wilson & Co. Law",
    },
    {
      quote: "The SEO strategy they implemented got us on the first page for our main keywords within 6 months. Measurable results with clear reporting.",
      author: "James Peterson",
      company: "Peterson Consulting",
    },
    {
      quote: "Their e-commerce solution streamlined our operations so we could focus on products. Sales up 180% year-over-year since launch.",
      author: "Lisa Nguyen",
      company: "Coastal Apparel",
    }
  ];

  return (
    <div  className="bg-black py-16 px-4 sm:px-6 lg:px-8 mt-50" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 " id="#customer">
          <h2 className="text-5xl  text-[#f3a734] mb-5 autoShow"style={{ fontFamily: 'Kumer One' }}>
            What Our Clients Say
          </h2>
            <h2 className="text-2xl  text-[#ffffff] mb-20 autoShow"style={{ fontFamily: 'Kumer One' }}>
            How Our Clients Achieved Their Goals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg p-6 relative border-l-4 transition-all hover:shadow-xl hover:translate-y-[-4px] holographic-card  autoShow" style={{height: '250px', borderColor: '#f3a734'}}
            >
              <div className="absolute -top-4 -left-4  w-10 h-10 flex items-center justify-center">
                
              </div>
              <blockquote className="text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <p className="text-lg font-semibold text-white">
                  {testimonial.author}
                </p>
                <p style={{color: '#f3a734'}}>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>


        </div>
      </div>
  );
};

export default Testimonials;