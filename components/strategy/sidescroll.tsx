"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";
import {
  Trophy,
  TrendingUp,
  Search,
  ArrowRight,
  Star,
  Plus,
  Megaphone,
  Briefcase,
  Building2,
  Sparkles,
  BarChart3,
  Target,
} from "lucide-react";

const programData = [
  {
    id: 1,
    title: "Paid Ads Mastery",
    role: "Performance Marketing",
    description: "Run high-converting Google & Meta campaigns from scratch. Learn bidding strategies, audience targeting, creative testing, and ROAS optimization that agencies charge ₹5L/month for.",
    image: "/program/paid-ads.jpg",
    icon: <TrendingUp size={20} />,
  },
  {
    id: 2,
    title: "SEO & Content",
    role: "Organic Growth Engine",
    description: "Build traffic that compounds. Master technical SEO, keyword architecture, content calendars, and link building systems that rank pages and drive consistent inbound leads.",
    image: "/program/seo.jpg",
    icon: <Search size={20} />,
  },
  {
    id: 3,
    title: "Brand Strategy",
    role: "Identity & Positioning",
    description: "Craft a brand that people remember. From tone of voice and visual identity to positioning frameworks and go-to-market strategy — build brands that command premium.",
    image: "/program/brand.jpg",
    icon: <Star size={20} />,
  },
  {
    id: 4,
    title: "Analytics & Data",
    role: "Growth Intelligence",
    description: "Turn numbers into decisions. Set up GA4, build dashboards, run A/B tests, and create attribution models that reveal exactly where your growth is coming from.",
    image: "/program/analytics.jpg",
    icon: <BarChart3 size={20} />,
  },
  {
    id: 5,
    title: "Growth Capstone",
    role: "Live Campaign Challenge",
    description: "Present a full-funnel digital marketing strategy to real industry judges. Defend your channel mix, budget allocation, and KPIs in a live boardroom simulation.",
    image: "/program/capstone.jpg",
    icon: <Trophy size={20} />,
  },
];

const placementsData = [
  { id: 1, name: "Aravind Swamy", company: "Google", role: "Growth Manager", image: "/placements/p1.jpg" },
  { id: 2, name: "Sneha Kapoor", company: "Netflix", role: "Performance Marketer", image: "/placements/p2.jpg" },
  { id: 3, name: "Rohan Das", company: "Adobe", role: "SEO Strategist", image: "/placements/p3.jpg" },
  { id: 4, name: "Megha Rao", company: "Meta", role: "Brand Marketer", image: "/placements/p4.jpg" },
  { id: 5, name: "Vikram Jeet", company: "Amazon", role: "Digital Analyst", image: "/placements/p5.jpg" },
  { id: 6, name: "Priya Nair", company: "Zomato", role: "Content Strategist", image: "/placements/p6.jpg" },
];

export default function ProgramExperience() {
  const [activeId, setActiveId] = useState(1);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 0.8 * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative w-full py-24 bg-[#F7F5FF] overflow-hidden px-[5%]"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}
    >

      {/* Straight line background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px)`,
      }} />

      {/* Ambient glow */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* ── HEADER ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 mb-2 shadow-sm"
        >
          <Sparkles className="w-3 h-3 text-purple-600" />
          <span className="text-[10px] tracking-[0.3em] font-bold text-purple-700 uppercase">
            What You'll Master
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
          The Treqo
        </h2>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
          <span className="italic font-serif text-purple-700">Curriculum</span>
        </h2>

        <p className="text-base md:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed font-medium tracking-tight pt-2">
          Five battle-tested modules designed around real campaigns, live data, and
          <span className="inline-block ml-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wider">
            Industry Outcomes
          </span>
        </p>
      </div>

      {/* ── ACCORDION ── */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-4 h-[650px] mb-32 relative z-10">
        {programData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              layout
              transition={{ layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              onClick={() => setActiveId(item.id)}
              className={`relative h-full cursor-pointer overflow-hidden rounded-[40px] border transition-all duration-500 ${
                isActive
                  ? "bg-white border-purple-200 shadow-[0_30px_60px_rgba(124,58,237,0.12)]"
                  : "bg-[#0D0D1A] border-transparent hover:bg-[#1a1035]"
              }`}
              style={{ flex: isActive ? 6 : 1 }}
            >
              {/* Collapsed state */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-12">
                  <Plus className="text-white/20" size={18} />
                  <p className="text-white font-bold uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-[10px] opacity-40">
                    {item.title}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </div>
              )}

              {/* Expanded state */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col lg:flex-row h-full w-full"
                  >
                    {/* Left image panel */}
                    <div className="relative w-full lg:w-[45%] h-full p-4">
                      <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-950">
                        <Image src={item.image} alt={item.title} fill className="object-cover opacity-60" />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-6 left-6 bg-purple-600 text-white p-4 rounded-2xl shadow-xl">
                          {item.icon}
                        </div>
                        {/* Module number */}
                        <div className="absolute bottom-6 left-6">
                          <span style={{ fontSize: '72px', fontWeight: 900, color: 'rgba(255,255,255,0.08)', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                            0{item.id}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-3">
                        {item.role}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1] mb-5">
                        {item.title}
                      </h3>
                      <p className="text-base text-slate-500 max-w-sm leading-relaxed font-medium">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6 mb-8">
                        {['Hands-on', 'Live Projects', 'Mentor-Led'].map(tag => (
                          <span key={tag} style={{
                            fontSize: '10px', fontWeight: 700,
                            color: '#7C3AED', background: 'rgba(124,58,237,0.08)',
                            border: '1px solid rgba(124,58,237,0.2)',
                            borderRadius: '999px', padding: '4px 12px',
                            textTransform: 'uppercase', letterSpacing: '0.1em',
                          }}>{tag}</span>
                        ))}
                      </div>

                      <button className="self-start flex items-center gap-3 px-8 py-4 bg-purple-700 text-white rounded-2xl font-bold hover:bg-purple-800 transition-all text-sm shadow-lg shadow-purple-900/20">
                        Explore Module <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── PLACEMENTS HEADER ── */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-100 mb-2 shadow-sm">
          <Target className="w-3 h-3 text-purple-600" />
          <span className="text-[10px] tracking-[0.3em] font-bold text-purple-700 uppercase">Placement Results</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
          Our Students Got <br />
          <span className="font-serif italic font-light text-purple-600 lowercase">Placed</span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
          From digital marketing beginners to <span className="text-purple-700 font-bold">Industry Leaders</span> at top global brands.
        </p>
      </div>

      {/* ── VELOCITY MARQUEE ── */}
      <div className="relative flex overflow-hidden -mx-[5%] z-10">
        <motion.div className="flex gap-6 py-6" style={{ x }}>
          {[...placementsData, ...placementsData, ...placementsData, ...placementsData].map((p, i) => (
            <div
              key={i}
              style={{
                width: '260px', flexShrink: 0,
                background: 'white',
                borderRadius: '28px',
                border: '1px solid #ede9fe',
                padding: '20px',
                boxShadow: '0 8px 32px rgba(124,58,237,0.06)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                height: '340px',
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '18px', overflow: 'hidden', background: 'linear-gradient(135deg, #1a0533, #2d1060)' }}>
                <Image src={p.image} alt={p.name} fill className="object-cover opacity-70" />
              </div>
              <div style={{ marginTop: '16px' }}>
                <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 900, color: '#0D0D1A', letterSpacing: '-0.01em' }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Building2 size={12} color="#7C3AED" />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.company}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={12} color="#94a3b8" />
                  <span style={{ fontSize: '11px', fontWeight: 500, color: '#94a3b8' }}>{p.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}