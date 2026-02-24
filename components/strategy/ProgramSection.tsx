"use client";

import { ArrowRight, Monitor, Building2, Sparkles } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "sam-pro",
    name: "SAM Pro",
    badge: "100% ONLINE",
    icon: Monitor,
    tagline: "Master Digital Marketing from Anywhere",
    description:
      "Flexible, self-paced learning with live sessions, real projects, and expert mentorship.",
    highlights: [
      "Live interactive sessions",
      "Real client projects",
      "Flexible scheduling",
      "1-on-1 mentorship",
    ],
    duration: "12 Weeks",
    path: "/sam-pro",
  },
  {
    id: "mark-pro",
    name: "MARK Pro",
    badge: "ONLINE + OFFLINE",
    icon: Building2,
    tagline: "The Complete Hybrid Experience",
    description:
      "Combine the best of both worlds with online learning and in-person campus sessions.",
    highlights: [
      "In-person workshops",
      "Peer networking",
      "Campus experience",
      "Industry visits",
    ],
    duration: "16 Weeks",
    path: "/mark-pro",
  },
];

export function ProgramsSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#FBF8E4]">
      
      {/* Brand Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC62A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1D1D1D]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full px-[5%]">

        <div className="text-center max-w-3xl mx-auto mb-24">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D]/5 border border-[#1D1D1D]/10 mb-6">
            <Sparkles className="w-3 h-3 text-[#1D1D1D]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">
              Select Your Path
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] leading-tight mb-8">
            Choose Your <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Learning System
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#1D1D1D]/60 max-w-2xl mx-auto">
            Two specialized frameworks engineered for different learning trajectories and career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative rounded-[40px] p-[1.5px] bg-[#1D1D1D]/10 transition-all duration-500 hover:bg-[#FFC62A]"
            >
              <div className="rounded-[38.5px] bg-white/60 backdrop-blur-xl p-10 lg:p-14 h-full flex flex-col transition-all duration-500 group-hover:bg-white/90 group-hover:shadow-2xl">

                <div className="flex items-start justify-between mb-10">
                  <div>
                    <span className="inline-block mb-4 px-3 py-1 text-[10px] font-black tracking-widest rounded-full bg-[#1D1D1D] text-white">
                      {program.badge}
                    </span>

                    <h3 className="text-3xl font-black text-[#1D1D1D] tracking-tighter">
                      {program.name}
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1D1D1D]/5 text-[#1D1D1D] border border-[#1D1D1D]/10 transition-all duration-500 group-hover:bg-[#1D1D1D] group-hover:text-[#FFC62A]">
                    <program.icon className="w-7 h-7" />
                  </div>
                </div>

                <p className="text-xl font-bold text-[#1D1D1D] mb-4">
                  {program.tagline}
                </p>

                <p className="text-[#1D1D1D]/60 text-base leading-relaxed mb-10">
                  {program.description}
                </p>

                <ul className="space-y-4 mb-12 flex-grow">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFC62A]" />
                      <span className="text-[#1D1D1D]/80 font-bold uppercase tracking-tight">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-8 border-t border-[#1D1D1D]/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1D1D1D]/40 font-bold mb-1">
                      System Duration
                    </p>
                    <p className="font-black text-[#1D1D1D] text-lg">
                      {program.duration}
                    </p>
                  </div>

                  <Link
                    href={program.path}
                    className="flex items-center gap-2 text-sm font-black text-[#1D1D1D] uppercase tracking-widest hover:gap-4 transition-all group/link"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 text-[#FFC62A] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}