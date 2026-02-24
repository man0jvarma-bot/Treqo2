"use client";

import { BookOpen, Target, Rocket, Briefcase, Sparkles, ChevronRight } from "lucide-react";

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
    description: "Get placement support, resume optimization, and high-stakes interview prep.",
    icon: Briefcase,
  },
];

export function FrameworkSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#1D1D1D]">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FBF8E4 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full px-[5%]">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3 h-3 text-[#FFC62A]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/60">
              The Execution Stack
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#FBF8E4] leading-tight">
            Our Learning <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Execution Framework
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          
          {/* THE GLOWING LINE: Connecting the Boxes */}
          <div className="absolute top-[22%] left-0 w-full hidden md:block z-0">
            <div className="h-[2px] w-full bg-[#FFC62A] shadow-[0_0_15px_#FFC62A,0_0_30px_#FFC62A] opacity-40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">

                {/* Connection Node with Pulse Glow */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFC62A] text-[#1D1D1D] text-sm font-black flex items-center justify-center shadow-[0_0_20px_#FFC62A] z-20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FBF8E4]">
                  0{index + 1}
                </div>

                {/* Card Architecture - Increased spacing via gap above */}
                <div className="pt-16 pb-12 px-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#FFC62A]/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] h-full flex flex-col items-center text-center">

                  <div className="inline-flex p-4 rounded-2xl bg-white/5 text-[#FBF8E4] mb-8 transition-all duration-500 group-hover:bg-[#FFC62A] group-hover:text-[#1D1D1D]">
                    <step.icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-black text-xl mb-4 text-[#FBF8E4] tracking-tighter uppercase leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#FBF8E4]/40 leading-relaxed font-medium">
                    {step.description}
                  </p>
                  
                  {/* Decorative Finish */}
                  <div className="mt-8 w-8 h-1 bg-[#FFC62A]/20 group-hover:w-16 group-hover:bg-[#FFC62A] transition-all duration-500" />
                </div>

                {/* Visible Glowing Connector for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-6">
                    <div className="w-0.5 h-10 bg-[#FFC62A] shadow-[0_0_15px_#FFC62A]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}