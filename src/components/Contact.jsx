import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

const Contact = () => {
    const navigate = useNavigate(); 
    
    const email = "joyshadman@example.com"; 
    const github = "https://github.com/joyshadman";
    const linkedin = "https://linkedin.com/in/joyshadman";

    const contactMethods = [
        {
            icon: <FaEnvelope className="text-orange-400" />,
            label: "Email",
            value: email,
            link: `mailto:${email}`,
        },
        {
            icon: <FaLinkedin className="text-blue-500" />,
            label: "LinkedIn",
            value: "Joy Shadman",
            link: linkedin,
        },
        {
            icon: <FaGithub className="text-white" />,
            label: "GitHub",
            value: "joyshadman",
            link: github,
        },
    ];

    return (
        <section id="contact" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6 py-24">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#fbb03c]/5 blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#fbb03c] font-mono tracking-[0.3em] uppercase text-sm mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tight"
                    >
                        Let's Build Something <span className="text-white/30">Great.</span>
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Text and CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <p className="text-white/60 text-lg leading-relaxed max-w-md">
                            I’m currently available for freelance work and full-time opportunities.
                            If you have a project in mind or just want to say hi, my inbox is always open.
                        </p>

                        {/* Updated Button to "Let's Talk" with Navigate logic */}
                        <button
                            data-hoverable
                            onClick={() => navigate('/login')}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#fbb03c] text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                Let's Talk <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>

                    {/* Right Side: Social Cards */}
                    <div className="grid gap-4">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-3xl p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                    {method.icon}
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">{method.label}</p>
                                    <p className="text-white font-bold text-lg">{method.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom Decorative Text */}
                <div className="mt-24 text-center border-t border-white/5 pt-12">
                    <p className="text-white/20 font-mono text-xs uppercase tracking-[0.5em]">
                        Based in Dhaka, Bangladesh • Working Worldwide
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;