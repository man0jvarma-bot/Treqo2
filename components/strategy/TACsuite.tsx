"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  ShieldCheck,
  Plus,
  TrendingUp,
  Sparkles,
  BookOpen
} from "lucide-react";

const advantages = [
  {
    id: "flexibility",
    colSpan: "lg:col-span-8",
    icon: Globe,
    title: "Learn Anywhere, Anytime",
    highlight: "Global Accessibility",
    desc: "Why settle for local when you can learn from the best worldwide? Our online suite eliminates geographical barriers, allowing you to master high-income skills at your own pace.",
    stats: [
      { label: "Access", value: "Lifetime" },
      { label: "Format", value: "4K Video" }
    ],
  },
  {
    id: "suite-count",
    colSpan: "lg:col-span-4",
    icon: BookOpen,
    title: "Master 8 Core",
    highlight: "Specializations",
    desc: "A comprehensive ecosystem covering Cinematic Editing, Motion Design, UI/UX, Growth Strategy, and more. One subscription, eight career paths.",
    stats: [
      { label: "Curriculum", value: "8 Modules" }
    ],
  },
  {
    id: "speed",
    colSpan: "lg:col-span-5",
    icon: Zap,
    title: "Accelerated Path",
    highlight: "Efficiency",
    desc: "Standard education is slow. The TAC Suite is engineered for rapid absorption, focusing on the 20% of skills that generate 80% of professional results.",
    stats: [
      { label: "Velocity", value: "2x Faster" }
    ],
  },
  {
    id: "community",
    colSpan: "lg:col-span-7",
    icon: ShieldCheck,
    title: "Verified Industry",
    highlight: "Standard",
    desc: "Get access to the private TAC discord, premium asset packs, and direct feedback loops that ensure your online work meets global agency standards.",
    stats: [
      { label: "Network", value: "Private Hub" },
      { label: "Resources", value: "100GB+ Assets" }
    ],
  }
];

export default function TacAdvantage() {
  return (
    <section className="py-24 px-[5%] bg-[#1A1A1A] text-[#F9F7E8] overflow-hidden relative font-sans">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F9F7E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-black"
          >
            <Sparkles size={12} className="text-[#FFC62A]" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">
              THE TAC SUITE ONLINE
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-2">
            The Art Code.
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif italic font-medium text-[#FFC62A]">
            Built for Mastery.
          </h3>

          <p className="mt-8 text-white/40 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            A curated collection of 8 high-performance courses designed to transform beginners into industry-ready creative professionals through a unified digital platform.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${adv.colSpan} group relative rounded-[2rem] h-full flex flex-col transition-all duration-500`}
            >
              <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 h-full flex flex-col justify-between relative z-10 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#365C47] group-hover:border-[#365C47]/20 group-hover:shadow-2xl">
                
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Container: Green/Yellow/Black interaction */}
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFC62A] group-hover:bg-white group-hover:text-[#365C47] transition-all duration-500 shadow-lg">
                      <adv.icon className="w-6 h-6" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#365C47] transition-all duration-500 shadow-sm">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold text-[#F9F7E8] mb-3 group-hover:text-white transition-colors leading-tight">
                    {adv.title} <br />
                    <span className="font-serif italic font-medium text-[#FFC62A] group-hover:text-[#F9F7E8]">
                      {adv.highlight}
                    </span>
                  </h4>

                  <p className="text-sm text-white/40 mb-6 leading-relaxed flex-1 group-hover:text-white/80 transition-colors">
                    {adv.desc}
                  </p>
                </div>

                {/* Card Footer Stats */}
                <div className="flex flex-wrap gap-3 pt-6 mt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                  {adv.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all shadow-inner">
                      <TrendingUp className="w-3.5 h-3.5 text-[#FFC62A] group-hover:text-white" />
                      <div>
                        <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest block leading-none mb-1 group-hover:text-white/60">
                          {stat.label}
                        </span>
                        <span className="text-xs font-bold text-white leading-none group-hover:text-white">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}