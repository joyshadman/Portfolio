import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaExternalLinkAlt, FaAward } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import certifiate from "../assets/certificate.pdf";

const Certification = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const certificateData = {
        title: "Front End Development Certification",
        issuer: "Creative IT Institute",
        date: "Jan 2026",
        pdfLink: certifiate,
        verifyLink: "https://certificate.citsmp.com/?certificate_id=M+REACT-24010513",
        description: "Front end development certification from Creative IT Institute, validating proficiency in React, JavaScript, and modern web technologies. This credential demonstrates my commitment to excellence and continuous learning in the field of web development.",
    };

    const particlesOptions = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        particles: {
            color: { value: "#fbb03c" },
            links: {
                color: "#fbb03c",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.25 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
    };

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden px-6 py-24">
            {/* Live Animated Orange Particles */}
            {init && (
                <Particles
                    id="certparticles"
                    options={particlesOptions}
                    className="absolute inset-0 z-0 pointer-events-none"
                />
            )}

            <div className="relative z-10 max-w-4xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#fbb03c] font-mono tracking-[0.3em] uppercase text-sm mb-4"
                    >
                        Achievements
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Professional <span className="text-white/30">Certification.</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="group relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl"
                >
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        {/* Visual Badge/Icon */}
                        <div className="relative flex-shrink-0">
                            <div className="w-32 h-32 md:w-44 md:h-44 bg-gradient-to-br from-[#fbb03c] to-orange-800 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_50px_rgba(249,115,22,0.2)]" />
                            <div className="absolute inset-0 flex items-center justify-center -rotate-0 text-black">
                                <FaAward size={60} className="md:size-80 opacity-90" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                                <span className="bg-[#fbb03c]/20 text-[#fbb03c] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-[#fbb03c]/30 w-fit mx-auto md:mx-0">
                                    Official
                                </span>
                                <span className="text-white/40 font-mono text-sm">{certificateData.date}</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#fbb03c] transition-colors">
                                {certificateData.title}
                            </h3>
                            <p className="text-[#fbb03c] font-medium mb-4">{certificateData.issuer}</p>
                            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
                                {certificateData.description}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a
                                    data-hoverable
                                    href={certificateData.pdfLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 border border-white/10 hover:border-orange-500 shadow-lg"
                                >
                                    <FaFilePdf /> View PDF
                                </a>
                                <a
                                    data-hoverable
                                    href={certificateData.verifyLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 text-white/70 hover:text-white rounded-xl transition-all duration-300"
                                >
                                    <FaExternalLinkAlt size={14} /> Verify Online
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Internal Decor */}
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <FaAward size={150} className="text-white" />
                    </div>
                </motion.div>

                {/* Footer Decor */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center border-t border-white/5 pt-8"
                >
                    <p className="text-white/20 font-mono text-xs uppercase tracking-[0.4em]">
                        Validated Educational Credential
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Certification;