import React from "react";
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiFramer, SiGit, SiPostman, SiRedux, SiVercel 
} from "react-icons/si";

const SkillStack = () => {
  const skills = [
    {
      category: "Frontend Core",
      items: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: "Advanced" },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: "Intermediate" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: "Advanced" },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />, level: "Intermediate" },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "Advanced" },
        { name: "Express", icon: <SiExpress className="text-white" />, level: "Advanced" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Intermediate" },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: "Expert" },
      ],
    },
    {
      category: "Design & UI",
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Expert" },
        { name: "Framer Motion", icon: <SiFramer className="text-white" />, level: "Advanced" },
        { name: "Glassmorphism", icon: <div className="w-5 h-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm" />, level: "Specialist" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git / GitHub", icon: <SiGit className="text-[#F05032]" />, level: "Advanced" },
        { name: "Vercel", icon: <SiVercel className="text-white" />, level: "Advanced" },
      ],
    },
  ];

  return (
    <div className="w-full py-24 bg-black relative overflow-hidden  " >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fbb03c]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase" >
            My <span className="text-[#fbb03c]">Skill</span> Stack
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl 
                         hover:bg-white/[0.04] hover:border-[#fbb03c]/30 transition-all duration-500"
            >
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8 group-hover:text-[#fbb03c] transition-colors">
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-2xl 
                                  group-hover/item:scale-110 group-hover/item:bg-[#fbb03c]/10 
                                  group-hover/item:border-[#fbb03c]/20 transition-all duration-300">
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
    </div>
  );
};

export default SkillStack;