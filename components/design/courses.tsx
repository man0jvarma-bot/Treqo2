"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Palette, Megaphone, Target,
  Users, Zap, Briefcase, Layout, ArrowRight, Calendar
} from "lucide-react";

const courses = [
  { id: 1, title: "Editing", icon: <Video />, heading: "Cinematic Storytelling", points: ["Narrative Pacing", "Color Grading", "Sound Design", "Multi-cam"] },
  { id: 2, title: "Motion", icon: <Zap />, heading: "After Effects & VFX", points: ["Keyframe Theory", "Lottie/Web", "Compositing", "Dynamic Branding"] },
  { id: 3, title: "Visuals", icon: <Palette />, heading: "Brand Identity", points: ["Layout Systems", "Typography", "Vector Art", "Illustrator Mastery"] },
  { id: 4, title: "UI/UX", icon: <Layout />, heading: "Product Design", points: ["Figma Systems", "Wireframing", "Responsive UI", "Usability Testing"] },
  { id: 5, title: "Ads", icon: <Megaphone />, heading: "Performance Marketing", points: ["Meta Manager", "Creative Testing", "CRO Strategy", "Scaling Budgets"] },
  { id: 6, title: "Clients", icon: <Users />, heading: "High-Ticket Sales", points: ["Closing Logic", "Stakeholder Comm", "Project Scoping", "Retainers"] },
  { id: 7, title: "GTM", icon: <Target />, heading: "Market Execution", points: ["Growth Funnels", "PLG Strategy", "Market Analysis", "KPI Mapping"] },
  { id: 8, title: "Career", icon: <Briefcase />, heading: "The Placement", points: ["Pitch Simulations", "Portfolio Proof", "Personal Branding", "Referrals"] },
];

export default function InteractiveTacSuite() {
  const [active, setActive] = useState(1);
  const selected = courses.find((c) => c.id === active);

  return (
    <section className="py-24 px-[5%] bg-[#FFF9E6] text-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* CENTERED HEADING SECTION */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.85] uppercase"
          >
            The Suite
            <span className="block font-serif italic font-light text-[#365c47] lowercase mt-2">
              Built for the next generation
            </span>
          </motion.h2>

          {/* GLASSY DURATION BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-8 px-5 py-2.5 bg-white/40 backdrop-blur-md border border-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#FFC62A] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/60">
              Duration : <span className="text-black">6 Months Immersion</span>
            </span>
          </motion.div>

          <p className="mt-8 max-w-xl mx-auto text-[#111111]/60 text-base md:text-lg font-medium leading-relaxed">
            A deep-dive curriculum designed to transform creative talent into industry-ready leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 items-stretch">

          {/* MAIN CONTENT CARD */}
          <div className="relative order-2 lg:order-1 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-[40px] p-8 md:p-14 h-full shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-white flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Decor Icon */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 scale-[4] pointer-events-none">
                  {selected?.icon}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-10 h-10 rounded-full bg-black text-[#FFC62A] flex items-center justify-center font-black text-sm shadow-lg">
                      0{selected?.id}
                    </span>
                    <span className="text-black/30 uppercase font-black tracking-widest text-[10px]">Strategic Focus</span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none uppercase">
                    {selected?.heading}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    {selected?.points.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 group cursor-default"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#FFF9E6] border border-black/5 flex items-center justify-center text-black transition-colors group-hover:bg-[#FFC62A]">
                          <ArrowRight size={12} />
                        </div>
                        <span className="text-lg font-bold text-black/70 tracking-tight">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5 flex flex-wrap justify-between items-center gap-4 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/30 mb-1">Standard</span>
                    <p className="text-xs font-bold text-black/60 uppercase tracking-widest leading-relaxed">
                      Certification 2026
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-[#FFC62A] px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:shadow-[#FFC62A]/10 transition-shadow"
                  >
                    Download Syllabus
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION GRID */}
          <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
            {courses.map((course) => (
              <motion.button
                key={course.id}
                onClick={() => setActive(course.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-start justify-between p-6 rounded-[32px] transition-all duration-500 text-left border-2
                  ${active === course.id
                    ? "bg-black border-black text-[#FFC62A] shadow-2xl"
                    : "bg-white/40 border-white text-black/40 hover:bg-white hover:text-black hover:border-black/10"
                  }`}
              >
                <div className={`p-3 rounded-xl transition-colors ${active === course.id ? "bg-white/10" : "bg-black/5"}`}>
                  {React.cloneElement(course.icon as React.ReactElement<any>, { size: 20 })}
                </div>

                <div className="mt-6">
                  <span className="block text-[8px] font-black uppercase tracking-[0.2em] mb-1 opacity-50">Module 0{course.id}</span>
                  <span className="text-[13px] font-black uppercase tracking-tight leading-none">{course.title}</span>
                </div>

                {active === course.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 rounded-[32px] ring-2 ring-black ring-offset-2 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 