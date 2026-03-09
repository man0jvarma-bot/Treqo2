"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Palette, Megaphone, Target,
  Users, Zap, Briefcase, Layout, ArrowRight,
  Sparkles, Download, CheckCircle2
} from "lucide-react";

const courses = [
  { id: 1, title: "Video Editing", icon: <Video size={18}/>, heading: "Master the Cut", description: "Learn how to tell stories that keep people watching. We cover everything from basic cuts to professional color grading.", whatYouLearn: ["Storytelling Flow", "Pro Color Correction"], project: "Edit a high-quality brand video.", benefit: "Get hired as a video editor." },
  { id: 2, title: "Motion Design", icon: <Zap size={18}/>, heading: "Bring Graphics to Life", description: "Add movement to your designs. Learn the animation secrets used in top-tier commercials and social media content.", whatYouLearn: ["Smooth Animations", "3D Basics"], project: "Create an animated logo intro.", benefit: "Stand out with moving visuals." },
  { id: 3, title: "Graphic Design", icon: <Palette size={18}/>, heading: "Beautiful Branding", description: "Design logos and brand identities that look professional and build trust instantly.", whatYouLearn: ["Logo Design", "Typography Rules"], project: "Build a brand from scratch.", benefit: "Start your design career." },
  { id: 4, title: "UI/UX Design", icon: <Layout size={18}/>, heading: "App & Web Design", description: "Design apps and websites that are easy to use. Learn how to turn ideas into clickable prototypes.", whatYouLearn: ["User Research", "Modern App Layouts"], project: "Design a mobile app prototype.", benefit: "Become a product designer." },
  { id: 5, title: "Marketing", icon: <Megaphone size={18}/>, heading: "Run Winning Ads", description: "Learn how to run ads that actually make money. We show you how to find the right audience and scale up.", whatYouLearn: ["Ad Strategy", "Tracking Results"], project: "Set up a live ad campaign.", benefit: "Grow any business online." },
  { id: 6, title: "Client Sales", icon: <Users size={18}/>, heading: "Get High-Paying Clients", description: "The secret to earning more is knowing how to talk to clients. Learn how to pitch, negotiate, and close deals.", whatYouLearn: ["Pitching Skills", "Pricing Secrets"], project: "Practice a live client pitch.", benefit: "Sign bigger, better contracts." },
  { id: 7, title: "Strategy", icon: <Target size={18}/>, heading: "The Big Picture", description: "Move beyond 'just a designer.' Learn how to plan full business launches and growth funnels.", whatYouLearn: ["Launch Plans", "Market Research"], project: "Write a full growth strategy.", benefit: "Move into management roles." },
  { id: 8, title: "Job Ready", icon: <Briefcase size={18}/>, heading: "Land Your Dream Job", description: "We help you put everything together into a portfolio that recruiters love. Get ready for interviews.", whatYouLearn: ["Portfolio Building", "Interview Prep"], project: "Polish your final portfolio.", benefit: "Get hired within months." }
];

export default function FriendlyKnowledgeHub() {
  const [active, setActive] = useState(1);
  const selected = courses.find((c) => c.id === active);

  return (
    <section className="py-24 px-[5%] bg-[#F9F7E8] text-[#1D1D1D] font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* REFINED LIGHT HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#365c47]/5 px-5 py-2 rounded-full mb-6 border border-[#365c47]/10">
            <Sparkles size={14} className="text-[#365c47]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#365c47]">Curated Learning Path</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The <span className="text-[#365c47] italic font-serif">8 Course</span> Suite
          </h2>
          
          <p className="max-w-xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed font-medium">
            Everything you need to go from a beginner to a pro, organized into 
            simple, easy-to-follow steps.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="w-full lg:w-[320px] flex flex-col gap-3">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActive(course.id)}
                className={`flex items-center gap-5 p-5 rounded-[24px] border transition-all duration-300 text-left
                  ${active === course.id 
                    ? "bg-white border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.04)] scale-[1.03]" 
                    : "bg-transparent border-transparent hover:bg-black/[0.03]"}`}
              >
                <div className={`w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-500 ${active === course.id ? "bg-[#365c47] text-white" : "bg-white/50 text-gray-400"}`}>
                  {course.icon}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Course 0{course.id}</p>
                  <p className={`text-sm font-bold transition-colors ${active === course.id ? "text-[#1D1D1D]" : "text-gray-400"}`}>
                    {course.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CONTENT CARD */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-black/[0.02] min-h-[600px] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-12">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{selected?.title}</h3>
                    <p className="text-[#365c47] font-serif italic text-2xl">{selected?.heading}</p>
                  </div>
                  
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">
                    {selected?.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300">Curriculum</h4>
                      <ul className="space-y-4">
                        {selected?.whatYouLearn.map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-base font-bold text-gray-600">
                            <div className="w-6 h-6 rounded-full bg-[#365c47]/5 flex items-center justify-center">
                              <CheckCircle2 size={14} className="text-[#365c47]" />
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-8 bg-[#F9F7E8]/50 rounded-[32px] border border-black/[0.02]">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-5">Main Project</h4>
                      <p className="text-lg font-bold text-[#1D1D1D] leading-snug mb-3">{selected?.project}</p>
                      <span className="text-xs text-[#365c47] font-bold uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-sm">
                        {selected?.benefit}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center mt-16 pt-10 border-t border-gray-50">
                  <button className="w-full sm:w-auto px-12 py-5 bg-[#365c47] text-white rounded-[22px] font-bold text-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    Start Learning <ArrowRight size={18} />
                  </button>
                  <button className="w-full sm:w-auto px-12 py-5 bg-transparent text-gray-400 border border-black/5 rounded-[22px] font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <Download size={18} /> Download Syllabus
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}