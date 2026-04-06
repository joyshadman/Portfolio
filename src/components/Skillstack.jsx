import React from "react";
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiFramer, SiGit, SiPostman, SiRedux, SiVercel,
  SiJavascript, SiDocker, SiPrisma, SiNetlify
} from "react-icons/si";
import { DiTerminal } from "react-icons/di"; // Using a generic icon for Requestly if SI is missing

const SkillStack = () => {
  const skills = [
    {
      category: "Frontend Core",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: "Expert" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: "Advanced" },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: "Advanced" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "Intermediate" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "Advanced" },
        { name: "Prisma ORM", icon: <SiPrisma className="text-white" />, level: "Advanced" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Intermediate" },
        { name: "Express", icon: <SiExpress className="text-white" />, level: "Advanced" },
      ],
    },
    {
      category: "Design & UI",
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Expert" },
        { name: "Framer Motion", icon: <SiFramer className="text-white" />, level: "Advanced" },
        { name: "Glassmorphism", icon: <div className="w-5 h-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />, level: "Specialist" },
        { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" />, level: "Intermediate" },
      ],
    },
    {
      category: "DevOps & Workflow",
      items: [
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, level: "Intermediate" },
        { name: "Vercel / Netlify", icon: <div className="flex gap-1"><SiVercel className="text-white" /><SiNetlify className="text-[#00C7B7]" /></div>, level: "Advanced" },
        { name: "Postman / Requestly", icon: <div className="flex gap-1"><SiPostman className="text-[#FF6C37]" /><DiTerminal className="text-white" /></div>, level: "Expert" },
        { name: "Git / GitHub", icon: <SiGit className="text-[#F05032]" />, level: "Advanced" },
      ],
    },
  ];

  return (
    <section id="skill" className="w-full py-24 bg-black relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fbb03c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            My <span className="text-[#fbb03c]">Skill</span> Stack
          </h2>
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mt-4">
            Mastering the modern web through specialized tooling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl 
                         hover:bg-white/[0.04] hover:border-[#fbb03c]/30 transition-all duration-500"
            >
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-10 group-hover:text-[#fbb03c] transition-colors">
                {group.category}
              </h3>
              
              <div className="space-y-8">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-2xl 
                                  group-hover/item:scale-110 group-hover/item:bg-[#fbb03c]/10 
                                  group-hover/item:border-[#fbb03c]/20 transition-all duration-300 shadow-xl shadow-black/20">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover/item:text-[#fbb03c] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[10px] text-white/30 uppercase tracking-tighter">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillStack;