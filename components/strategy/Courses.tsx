"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Palette, Megaphone, Target,
  Users, Zap, Briefcase, Layout, ArrowRight,
  Sparkles, Download, CheckCircle2, Terminal, Layers
} from "lucide-react";

const courses = [
  { 
    id: 1, 
    title: "Video Editing", 
    icon: <Video size={18}/>, 
    heading: "Master the Cut", 
    description: "Engineer emotion through structured pacing, cinematic transitions, and professional color science. You aren't just learning software; you're learning the psychology of visual retention used by top-tier creators and agencies globally.", 
    whatYouLearn: ["Storytelling Flow & Pacing", "Pro Color Correction & Grading", "Sound Design & Foley", "Multi-cam Syncing"], 
    project: "Edit a high-quality brand video.", 
    benefit: "Get hired as a video editor.",
    roadmap: ["Assembly Cut", "Pacing & Rhythm", "Soundscapes", "Final Color Grade"],
    tools: ["Premiere Pro", "DaVinci Resolve", "Audition"]
  },
  { 
    id: 2, 
    title: "Motion Design", 
    icon: <Zap size={18}/>, 
    heading: "Bring Graphics to Life", 
    description: "Master the logic of movement. From kinetic typography to complex VFX compositing, this course installs the technical foundation required to build high-energy assets for digital campaigns and broadcast media.", 
    whatYouLearn: ["Kinetic Typography", "2D/3D Animation Systems", "Visual Effects Compositing", "Lottie for Web"], 
    project: "Create an animated logo intro.", 
    benefit: "Stand out with moving visuals.",
    roadmap: ["Keyframe Theory", "Graph Editor Mastery", "VFX Basics", "Render Optimization"],
    tools: ["After Effects", "Cinema 4D", "Lottie"]
  },
  { 
    id: 3, 
    title: "Graphic Design", 
    icon: <Palette size={18}/>, 
    heading: "Beautiful Branding", 
    description: "Design scalable visual systems rooted in color theory and brand psychology. Learn to move beyond 'pretty pictures' to create strategic assets that build instant trust and authority for any business.", 
    whatYouLearn: ["Brand Identity Systems", "Typography Science", "Layout & Grid Systems", "Print & Digital Assets"], 
    project: "Build a brand from scratch.", 
    benefit: "Start your design career.",
    roadmap: ["Discovery Phase", "Moodboarding", "Vector Construction", "Brand Guidelines"],
    tools: ["Illustrator", "Photoshop", "InDesign"]
  },
  { 
    id: 4, 
    title: "UI/UX Design", 
    icon: <Layout size={18}/>, 
    heading: "App & Web Design", 
    description: "Architect user-centric experiences. Learn to balance aesthetic elegance with functional utility through deep research, wireframing, and high-fidelity prototyping in modern product environments.", 
    whatYouLearn: ["User Research & Personas", "Wireframing & Mapping", "Component-Based Design", "Interactive Prototyping"], 
    project: "Design a mobile app prototype.", 
    benefit: "Become a product designer.",
    roadmap: ["User Flow Mapping", "Low-Fi Wireframes", "Design Systems", "Prototyping"],
    tools: ["Figma", "Framer", "FigJam"]
  },
  { 
    id: 5, 
    title: "Marketing", 
    icon: <Megaphone size={18}/>, 
    heading: "Run Winning Ads", 
    description: "Master the art of paid acquisition. Learn to engineer growth through creative testing, data-driven funnel optimization, and scalable ad systems across the world's most powerful platforms.", 
    whatYouLearn: ["Media Buying Strategy", "Ad Copywriting", "Audience Segmentation", "A/B Testing Frameworks"], 
    project: "Set up a live ad campaign.", 
    benefit: "Grow any business online.",
    roadmap: ["Funnel Mapping", "Creative Production", "Campaign Launch", "Scaling Logic"],
    tools: ["Meta Ads", "Google Ads", "TikTok Ads"]
  },
  { 
    id: 6, 
    title: "Client Sales", 
    icon: <Users size={18}/>, 
    heading: "Get High-Paying Clients", 
    description: "Technical skill is only half the battle. This module installs the high-ticket sales psychology required to source global leads, navigate complex negotiations, and secure premium retainers.", 
    whatYouLearn: ["Lead Generation Systems", "Pitching & Closing", "Pricing Frameworks", "Client Onboarding"], 
    project: "Practice a live client pitch.", 
    benefit: "Sign bigger, better contracts.",
    roadmap: ["Prospecting", "Value Discovery", "The Pitch", "Negotiation & Close"],
    tools: ["HubSpot", "LinkedIn Sales Nav", "Notion"]
  },
  { 
    id: 7, 
    title: "Strategy", 
    icon: <Target size={18}/>, 
    heading: "The Big Picture", 
    description: "Bridge the gap between execution and operations. Learn to map out product-market fit using KPI engineering and build growth funnels that ensure long-term market penetration.", 
    whatYouLearn: ["Go-To-Market Strategy", "Data Analytics & GA4", "Conversion Rate Optimization", "Revenue Operations"], 
    project: "Write a full growth strategy.", 
    benefit: "Move into management roles.",
    roadmap: ["Market Analysis", "KPI Definition", "Funnel Build", "Data Feedback"],
    tools: ["GA4", "GTM", "Hotjar"]
  },
  { 
    id: 8, 
    title: "Job Ready", 
    icon: <Briefcase size={18}/>, 
    heading: "Land Your Dream Job", 
    description: "Convert your education into professional positioning. We help you synthesize your work into a high-performance portfolio and prepare you for the rigorous interview process of top agencies.", 
    whatYouLearn: ["Portfolio Optimization", "CV & Resume Design", "Interview Psychology", "Personal Branding"], 
    project: "Polish your final portfolio.", 
    benefit: "Get hired within months.",
    roadmap: ["Work Selection", "Case Study Writing", "Platform Build", "Pitch Practice"],
    tools: ["Warp", "Read.cv", "Polywork"]
  }
];

export default function FriendlyKnowledgeHub() {
  const [active, setActive] = useState(1);
  const selected = courses.find((c) => c.id === active);

  return (
    <section className="py-24 px-[5%] bg-[#F9F7E8] text-[#1D1D1D] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* REFINED LIGHT HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#365c47]/5 px-5 py-2 rounded-full mb-6 border border-[#365c47]/10">
            <Sparkles size={14} className="text-[#365c47]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#365c47]">Curated Learning Path</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Inside the <span className="text-[#365c47] italic font-serif">8 Course</span> Suite
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed font-medium">
            A unified ecosystem engineered to install high-performance, job-ready 
            execution skills through professional studio scenarios.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="w-full lg:w-[320px] flex flex-col gap-2 shrink-0">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActive(course.id)}
                className={`flex items-center gap-4 p-4 rounded-[20px] border transition-all duration-300 text-left
                  ${active === course.id 
                    ? "bg-white border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.04)] scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-black/[0.03]"}`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-500 ${active === course.id ? "bg-[#365c47] text-white" : "bg-white/50 text-gray-400"}`}>
                  {course.icon}
                </div>
                <div>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Module 0{course.id}</p>
                  <p className={`text-xs font-bold transition-colors ${active === course.id ? "text-[#1D1D1D]" : "text-gray-400"}`}>
                    {course.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CONTENT CARD - FILLED WITH MORE DETAIL */}
          <div className="flex-1 w-full min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-black/[0.02] min-h-[700px] flex flex-col"
              >
                <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-12">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#365c47]/5 text-[#365c47] text-[10px] font-bold uppercase rounded-md border border-[#365c47]/10">Course Syllabus</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#365c47] animate-pulse" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{selected?.title}</h3>
                    <p className="text-[#365c47] font-serif italic text-2xl mb-6">{selected?.heading}</p>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                      {selected?.description}
                    </p>
                  </div>

                  <div className="w-full xl:w-72 space-y-4 shrink-0">
                    <div className="p-6 bg-[#F9F7E8] rounded-[30px] border border-black/[0.02]">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                           <Terminal size={12} /> Pro Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {selected?.tools.map((tool, i) => (
                                <span key={i} className="text-[10px] font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-black/5">{tool}</span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 flex-1">
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 border-b pb-2">Core Curriculum</h4>
                    <ul className="space-y-4">
                      {selected?.whatYouLearn.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                          <div className="w-5 h-5 rounded-full bg-[#365c47]/5 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-[#365c47]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 border-b pb-2">Strategic Roadmap</h4>
                    <div className="space-y-4">
                        {selected?.roadmap.map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="text-[10px] font-black text-[#365c47]/20">0{i+1}</span>
                                <span className="text-sm font-bold text-gray-500">{step}</span>
                            </div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 border-b pb-2">Primary Outcome</h4>
                    <div className="p-6 bg-[#365c47] text-white rounded-[32px] shadow-lg shadow-[#365c47]/10 relative overflow-hidden group">
                      <Layers className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform duration-500" size={100} />
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">Hands-on Project</h4>
                      <p className="text-lg font-bold leading-snug mb-6 relative z-10">{selected?.project}</p>
                      <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl inline-block border border-white/20">
                         <p className="text-[10px] font-bold uppercase tracking-widest">{selected?.benefit}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center pt-8 border-t border-gray-50">
                  <button className="w-full sm:w-auto px-10 py-4 bg-[#365c47] text-white rounded-[18px] font-bold text-sm hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                    Start Learning Module <ArrowRight size={18} />
                  </button>
                  <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-gray-400 border border-black/5 rounded-[18px] font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                    <Download size={18} /> Syllabus (PDF)
                  </button>
                  <div className="hidden xl:flex items-center gap-2 ml-auto text-gray-300">
                    <span className="text-[10px] font-bold uppercase tracking-widest italic">Part of the TAC Online Suite</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}