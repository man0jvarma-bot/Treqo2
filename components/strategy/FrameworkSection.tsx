"use client";

import { BookOpen, Target, Rocket, Briefcase, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Foundation",
    description: "Build a solid base with core marketing principles and execution strategies.",
    icon: BookOpen,
  },
  {
    title: "Specialization",
    description: "Master advanced techniques in SEO, PPC, and content architecture.",
    icon: Target,
  },
  {
    title: "Application",
    description: "Work on live projects to apply your knowledge in real-world scenarios.",
    icon: Rocket,
  },
  {
    title: "Career Launch",
    description: "Get placement support, resume optimization, and interview prep.",
    icon: Briefcase,
  },
];

export function FrameworkSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#1A1A1A] font-sans">
      
      {/* Subtle Background Texture - Matching Dark Asset */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F9F7E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full px-[5%]">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-white/10 mb-8">
            <Sparkles className="w-3 h-3 text-[#FFC62A]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/60">
              The TAC Suite Online
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Our Learning <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Execution Framework
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#365C47]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          
          {/* THE GLOWING LINE: Connecting the Nodes */}
          <div className="absolute top-[22%] left-0 w-full hidden md:block z-0">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#365C47] to-transparent opacity-40 shadow-[0_0_20px_#365C47]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">

                {/* Connection Node - Yellow & Black combo */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFC62A] text-black text-sm font-black flex items-center justify-center shadow-[0_0_25px_rgba(255,198,42,0.4)] z-20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                  0{index + 1}
                </div>

                {/* Card Architecture - Black & Green accents */}
                <div className="pt-16 pb-12 px-8 rounded-[2.5rem] bg-black/40 backdrop-blur-xl border border-white/5 transition-all duration-500 group-hover:bg-black/60 group-hover:border-[#365C47]/50 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] h-full flex flex-col items-center text-center">

                  <div className="inline-flex p-4 rounded-2xl bg-[#365C47]/20 text-[#FFC62A] mb-8 transition-all duration-500 group-hover:bg-[#365C47] group-hover:text-white">
                    <step.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-bold text-xl mb-4 text-white tracking-tight uppercase leading-tight group-hover:text-[#FFC62A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    {step.description}
                  </p>
                  
                  {/* Interactive Underline - Green */}
                  <div className="mt-8 w-6 h-1 bg-[#365C47] group-hover:w-12 group-hover:bg-[#FFC62A] transition-all duration-500 shadow-[0_0_10px_rgba(54,92,71,0.5)]" />
                </div>

                {/* Mobile Connector */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-6">
                    <div className="w-[1px] h-10 bg-gradient-to-b from-[#FFC62A] to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Context */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.4em]">
            Step-by-Step Industry Transformation
          </p>
        </div>
      </div>
    </section>
  );
}