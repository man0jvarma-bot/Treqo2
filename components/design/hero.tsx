"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function DesignHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#FBF8E4]">
      
      {/* ================= Background Video ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[20%] opacity-75"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8E4]/25 via-[#FBF8E4]/35 to-[#FBF8E4]/45" />
      </div>

      {/* ================= Soft Atmosphere Glow ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#FFC62A]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#1D1D1D]/5 rounded-full blur-[100px]" />
      </div>

      {/* ================= Content ================= */}
      <div className="relative z-20 w-full px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D1D1D] mb-6 shadow-lg">
            <Sparkles className="w-3 h-3 text-[#FFC62A]" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-white">
              TAC – The Art Code
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#1D1D1D] mb-6">
            Build Your Career <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Like a System,
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>{" "}
            <span className="opacity-40">Not a Shortcut</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-[#1D1D1D]/80 max-w-2xl mx-auto leading-relaxed mb-10">
            An 8-course execution ecosystem designed to transform you into a{" "}
            <span className="font-semibold text-[#1D1D1D]">
              revenue operator
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#1D1D1D]">
              high-performance contributor
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/apply"
              className="group w-full sm:w-auto px-10 py-4 rounded-full bg-[#FFC62A] text-[#1D1D1D] font-extrabold text-base transition-all hover:bg-[#e6b225] hover:shadow-xl flex items-center justify-center gap-3"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/curriculum"
              className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-[#1D1D1D] text-[#1D1D1D] font-bold text-base hover:bg-[#1D1D1D] hover:text-[#FBF8E4] transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Glass Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Integrated Courses", value: "8" },
              { label: "Structured Journey", value: "4 Months" },
              { label: "Execution Framework", value: "Live" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-md py-6 px-4 rounded-2xl border border-white/60 shadow-sm"
              >
                <p className="text-2xl font-black text-[#1D1D1D] mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#1D1D1D]/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
