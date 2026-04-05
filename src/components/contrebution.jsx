import React from 'react';
import { GitHubCalendar } from 'react-github-calendar'; 
import { motion } from 'framer-motion';

const Contribution = () => {
  const theme = {
    light: ['#161b22', '#fa982833', '#fa982866', '#fa982899', '#fa9828'],
    dark: ['#161b22', '#fa982833', '#fa982866', '#fa982899', '#fa9828'],
  };

  return (
    <section className="py-20 flex flex-col items-center justify-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
            Code <span className="text-[#fa9828]">Consistency.</span>
          </h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]">
            Verified GitHub Activity Stream
          </p>
        </div>

        <div className="relative group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#fa9828]/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* ✅ Fixed: Added no-scrollbar class here */}
          <div 
            className="flex justify-start md:justify-center items-center overflow-x-auto no-scrollbar py-4" 
            data-hoverable 
          >
            <GitHubCalendar
              username="joyshadman" 
              blockSize={13}
              blockMargin={6}
              theme={theme}
              fontSize={14}
              style={{
                color: 'rgba(255, 255, 255, 0.4)',
                fontFamily: 'monospace'
              }}
            />
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-between items-center gap-6 text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
               <span className="opacity-50 tracking-[0.3em]">System.Active</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span>Less</span>
              <div className="flex gap-1.5" data-hoverable>
                <div className="w-3 h-3 bg-[#161b22] rounded-[2px]" />
                <div className="w-3 h-3 bg-[#fa982833] rounded-[2px]" />
                <div className="w-3 h-3 bg-[#fa982866] rounded-[2px]" />
                <div className="w-3 h-3 bg-[#fa982899] rounded-[2px]" />
                <div className="w-3 h-3 bg-[#fa9828] rounded-[2px]" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contribution;