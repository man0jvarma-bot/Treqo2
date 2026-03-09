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
    color: "#FFB347",
    id: "03",
    description: "Cinematic color grading and finishing."
  },
  {
    name: "Figma",
    icon: <Figma size={16} />,
    color: "#0ACF83",
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
    color: "#0668E1",
    id: "06",
    description: "Performance marketing frameworks."
  },
  {
    name: "AI Strategy",
    icon: <Cpu size={16} />,
    color: "#FFC62A",
    id: "07",
    description: "Automation and AI-assisted workflows."
  }
];

export default function TechStackDashboard() {
  const loop = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-20 px-[5%] bg-[#1A1A1A] text-white overflow-hidden relative border-y border-white/5 font-sans">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F9F7E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-black/40"
          >
            <Sparkles size={12} className="text-[#FFC62A]" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40">
              The TAC Suite Tools
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Execution <span className="italic font-serif text-[#FFC62A]">Stack.</span>
          </h2>

          <p className="max-w-xl mx-auto text-white/40 text-sm md:text-base font-medium leading-relaxed">
            Master the production-grade tools used by elite creative teams and global marketing agencies.
          </p>
        </div>

        {/* Smaller Infinite Tool Stream */}
        <div className="relative">
          {/* Edge Fades to blend with Dark Theme */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

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
                  className="group flex flex-col justify-between bg-black/40 backdrop-blur-xl rounded-[1.5rem] px-6 py-6 min-w-[240px] border border-white/5 shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(54,92,71,0.08)] hover:border-[#365C47]/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0"
                      style={{ color: tool.color }}
                    >
                      {tool.icon}
                    </div>

                    <div>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 block leading-none mb-1">
                        Node {tool.id}
                      </span>
                      <h3 className="text-sm font-bold tracking-tight text-[#F9F7E8]">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] text-white/40 font-medium leading-snug">
                      {tool.description}
                    </p>

                    <div className="flex items-center gap-1.5 mt-4 text-[#FFC62A] text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
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
          <p className="text-white/20 text-[11px] font-medium italic">
            * Agency-standard workflows for the TAC Suite Online.
          </p>
        </div>

      </div>
    </section>
  );
}