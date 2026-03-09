"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart, 
  MousePointerClick, 
  Cpu, 
  Zap, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

const marketingData = [
  {
    title: "Algorithmic Sovereignty",
    desc: "The future of marketing is no longer about human intuition but algorithmic mastery. In a world driven by machine learning, the ability to architect campaigns that speak the language of the algorithm is the only way to ensure brand survival.",
    icon: <Cpu size={22} />,
  },
  {
    title: "Attention Economics",
    desc: "Human attention is the world's most scarce commodity. Digital marketing is the science of capturing, retaining, and converting that attention into measurable equity. Those who control the narrative control the market share.",
    icon: <MousePointerClick size={22} />,
  },
  {
    title: "Performance Synergy",
    desc: "Integrating Paid Media with organic Growth Strategies creates a compounding effect. We ensure every marketing dollar spent is an investment into a self-optimizing ecosystem that scales horizontally across global markets.",
    icon: <BarChart size={22} />,
  },
  {
    title: "Cognitive Branding",
    desc: "Modern digital strategy transcends simple advertising; it enters the realm of cognitive psychology. We build frameworks that align consumer behavior with brand identity to leave a permanent psychological impact.",
    icon: <Zap size={22} />,
  }
];

const DigitalMarketingDeepDive = () => {
  return (
    <section className="w-full bg-[#F9F7E8] text-[#1D1D1D] px-[5%] py-24 flex flex-col items-center overflow-hidden font-sans">
      
      {/* Centered Heading Section */}
      <div className="max-w-4xl w-full text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#365c47]/10 bg-[#365c47]/5"
        >
          <Sparkles size={12} className="text-[#365c47]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#365c47]">Industry Evolution</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          The Digital <span className="text-[#365c47] font-serif italic font-medium">Future.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Traditional marketing is dead. We are entering an era of <strong>Integrated Intelligence</strong> where creative vision and data-driven execution merge to define global market leaders.
        </motion.p>
      </div>

      {/* High-Content Interactive Grid */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        
        {marketingData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group p-10 bg-white border border-black/[0.03] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(54,92,71,0.08)] hover:border-[#365c47]/10"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 bg-[#F9F7E8] text-[#365c47] rounded-2xl flex items-center justify-center border border-black/5 group-hover:bg-[#365c47] group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-[#365c47] transition-colors">
                {item.title}
              </h3>
            </div>
            
            <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">
              {item.desc}
            </p>

            <div className="mt-10 flex items-center gap-3 text-[#365c47] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] font-bold uppercase tracking-widest">Part of the TAC Suite</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 text-center"
      >
        <button className="relative px-12 py-5 bg-[#365c47] text-white font-bold uppercase tracking-widest text-[11px] rounded-[22px] overflow-hidden group shadow-xl shadow-[#365c47]/10 hover:-translate-y-1 transition-all">
          <span className="relative z-10">Secure Your Future in Marketing</span>
          <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </button>
      </motion.div>

    </section>
  );
};

export default DigitalMarketingDeepDive;