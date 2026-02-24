"use client";

import Link from "next/link";
import {
  ArrowRight,
  Play,
  Calendar,
  Clock,
  MapPin,
  Users,
  Zap,
  BookOpen,
  Award,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FBF8E4] flex items-center">
      
      {/* BRAND SYSTEM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC62A]/10 rounded-full blur-[140px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1D1D1D]/5 rounded-full blur-[120px] -ml-32 -mb-32" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#1D1D1D 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 w-full px-[5%] pt-28 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-[#1D1D1D] text-lg font-semibold mb-4 tracking-wide uppercase opacity-80">
              Advanced Program in
            </p>

            <h1 className="leading-[1.05] mb-8">
              <span className="block text-5xl lg:text-7xl font-black text-[#1D1D1D]">
                Digital Marketing
              </span>
              <span className="block text-5xl lg:text-7xl font-serif italic text-[#FFC62A] mt-2 relative">
                & Growth Strategy
                <svg className="absolute -bottom-4 left-0 w-3/4 h-3 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
                </svg>
              </span>
            </h1>

            {/* META LOGISTICS */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#1D1D1D]/70 mb-8">
              <Meta icon={Calendar} text="12 Weeks" />
              <Meta icon={Clock} text="Live + Self-Paced" />
              <Meta icon={MapPin} text="Online & Offline" />
              <Meta icon={Users} text="50 Seats" />
            </div>

            {/* CTA AREA */}
            <Link href="/apply">
              <button className="bg-[#1D1D1D] hover:bg-black text-[#FBF8E4] px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 mb-8 shadow-xl shadow-black/15 hover:-translate-y-1 group">
                APPLY NOW
                <ArrowRight className="w-5 h-5 text-[#FFC62A] group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* TRUST SYSTEM */}
            <div className="flex gap-12 border-t border-[#1D1D1D]/10 pt-8">
              <Trust label="Built by alumni from" value="Top B-Schools" />
              <Trust label="Mentors from" value="Google, Meta" />
              <Trust label="Backed by" value="Industry Leaders" />
            </div>
          </div>

          {/* RIGHT MEDIA BLOCK */}
          <div className="relative">
            <div className="rounded-[32px] bg-gradient-to-br from-[#1D1D1D] via-[#1D1D1D] to-[#FFC62A]/40 p-[2px] shadow-2xl">
              <div className="rounded-[30px] bg-gradient-to-br from-white to-[#FBF8E4] p-4">
                <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden group">
                  <img
                    src="/images/home-page.jpg"
                    alt="Founder's Vision"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D]/50 via-transparent to-transparent" />

                  {/* Video Play Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group/play">
                      <Play className="w-8 h-8 text-[#1D1D1D] fill-[#1D1D1D] ml-1 group-hover/play:text-[#FFC62A] group-hover/play:fill-[#FFC62A] transition-colors" />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-[#FFC62A] text-[#1D1D1D] font-bold px-4 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg">
                    <Clock className="w-4 h-4" />
                    2 MIN WATCH
                  </div>

                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-[#1D1D1D]/10 text-right">
                    <p className="font-bold text-sm text-[#1D1D1D]">Founder’s Vision</p>
                    <p className="text-[10px] uppercase tracking-wider text-[#1D1D1D]/50 font-bold">
                      TAC Executive Team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float Stats */}
            <Stat value="500+" label="Students Trained" className="-left-8 top-24" />
            <Stat value="95%" label="Outcome Rate" className="-right-8 bottom-24" />
          </div>

        </div>
      </div>
    </section>
  );
}

/* COMPONENTS STYLED TO SYSTEM */

function Meta({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-[#FFC62A]" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Trust({ label, value }: any) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-[#1D1D1D]/40 font-bold mb-1">
        {label}
      </p>
      <p className="font-extrabold text-sm text-[#1D1D1D]">
        {value}
      </p>
    </div>
  );
}

function Stat({ value, label, className }: any) {
  return (
    <div
      className={`absolute hidden lg:block bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border-l-4 border-[#FFC62A] ${className} transition-transform hover:-translate-y-2`}
    >
      <p className="text-3xl font-black text-[#1D1D1D]">{value}</p>
      <p className="text-[10px] uppercase tracking-tighter font-bold text-[#1D1D1D]/50">
        {label}
      </p>
    </div>
  );
}