"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Film,
  Layers,
  Wind,
  Figma,
  Palette,
  Smartphone,
  Cpu,
  ArrowRight,
  Sparkles
} from "lucide-react";

const tools = [
  {
    name: "Premiere Pro",
    icon: <Film size={16} />,
    color: "#EA77FF",
    id: "01",
    description: "Industry-standard video editing workflows."
  },
  {
    name: "After Effects",
    icon: <Wind size={16} />,
    color: "#9999FF",
    id: "02",
    description: "Motion graphics and VFX pipelines."
  },
  {
    name: "DaVinci Resolve",
    icon: <Layers size={16} />,
    color: "#C084FC", // Purple variant
    id: "03",
    description: "Cinematic color grading and finishing."
  },
  {
    name: "Figma",
    icon: <Figma size={16} />,
    color: "#FFFFFF", // White for contrast
    id: "04",
    description: "UI systems and design architecture."
  },
  {
    name: "Photoshop",
    icon: <Palette size={16} />,
    color: "#31A8FF",
    id: "05",
    description: "Brand identity and asset design."
  },
  {
    name: "Meta Ads",
    icon: <Smartphone size={16} />,
    color: "#E9D5FF", // Light purple
    id: "06",
    description: "Performance marketing frameworks."
  },
  {
    name: "AI Strategy",
    icon: <Cpu size={16} />,
    color: "#A855F7", // Solid Purple
    id: "07",
    description: "Automation and AI-assisted workflows."
  }
];

export default function TechStackDashboard() {
  const loop = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-20 px-[5%] bg-[#0F0A1F] text-white overflow-hidden relative border-y border-purple-500/10 font-sans">
      
      {/* Background Texture Overlay - Purple tint dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#A855F7 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-900/20"
          >
            <Sparkles size={12} className="text-purple-400" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-purple-200/60">
              The TAC Suite Tools
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            The Execution <span className="italic font-serif text-purple-400">Stack.</span>
          </h2>

          <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base font-medium leading-relaxed">
            Master the production-grade tools used by elite creative teams and global marketing agencies.
          </p>
        </div>

        {/* Smaller Infinite Tool Stream */}
        <div className="relative">
          {/* Edge Fades to blend with Midnight Purple */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F0A1F] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0F0A1F] to-transparent z-10" />

          <div className="flex overflow-hidden py-4">
            <motion.div
              animate={{ x: [0, -1800] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex gap-5"
            >
              {loop.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl rounded-[1.5rem] px-6 py-6 min-w-[240px] border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:border-purple-500/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0"
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>

                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-purple-400 block leading-none mb-1">
                        Node {tool.id}
                      </span>
                      <h3 className="text-sm font-bold tracking-tight text-white">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] text-slate-400 font-medium leading-snug">
                      {tool.description}
                    </p>

                    <div className="flex items-center gap-1.5 mt-4 text-purple-400 text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <span>Curriculum</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom context */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-[11px] font-medium italic">
            * Agency-standard workflows for the TAC Suite Online.
          </p>
        </div>

      </div>
    </section>
  );
}