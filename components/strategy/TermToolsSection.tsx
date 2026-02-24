"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Terminal } from "lucide-react";

/* ===================== DATA ===================== */

const TERM_DATA = [
  {
    id: 1,
    title: "Marketing Foundations",
    tools: ["Google Trends", "Canva", "ChatGPT"],
    techniques: [
      "Market Research",
      "Customer Personas",
      "Brand Positioning",
      "Value Proposition",
    ],
  },
  {
    id: 2,
    title: "Performance Marketing",
    tools: ["Google Ads", "Meta Ads", "Hotjar"],
    techniques: [
      "Paid Campaign Structuring",
      "Conversion Tracking",
      "A/B Testing",
      "ROAS Optimization",
    ],
  },
  {
    id: 3,
    title: "Content & SEO",
    tools: ["Ahrefs", "SEMrush", "Surfer SEO"],
    techniques: [
      "Keyword Research",
      "On-page SEO",
      "Content Calendars",
      "Topic Clustering",
    ],
  },
  {
    id: 4,
    title: "Growth Funnels",
    tools: ["Webflow", "Zapier", "Google Analytics"],
    techniques: [
      "Funnel Mapping",
      "Lead Magnets",
      "Email Automation",
      "Retention Loops",
    ],
  },
  {
    id: 5,
    title: "Analytics & Optimization",
    tools: ["GA4", "Looker Studio", "Mixpanel"],
    techniques: [
      "Cohort Analysis",
      "Event Tracking",
      "Funnel Analysis",
      "Data-led Decisions",
    ],
  },
];

/* ===================== PAGE ===================== */

export default function TermToolsPage() {
  const [activeTerm, setActiveTerm] = useState(TERM_DATA[0]);

  return (
    <section className="bg-[#FBF8E4] py-32 relative overflow-hidden">
      
      {/* Seamless Transition Detail */}
      <div className="absolute top-0 left-[5%] right-[5%] h-px bg-[#1D1D1D]/5" />

      <div className="w-full px-[5%] relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D]/5 border border-[#1D1D1D]/10 mb-6">
            <Sparkles className="w-3 h-3 text-[#1D1D1D]" />
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">
              Curriculum Stack
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] leading-tight mb-8">
            What You’ll Learn <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Inside The System
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h2>
          <p className="text-[#1D1D1D]/60 text-lg md:text-xl max-w-2xl mx-auto">
            Each term is engineered to build high-performance, job-ready 
            execution skills through real-world scenarios.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] rounded-[2.5rem] overflow-hidden border border-[#1D1D1D]/10 bg-white/40 backdrop-blur-xl shadow-2xl">

          <TermList
            terms={TERM_DATA}
            active={activeTerm}
            onSelect={setActiveTerm}
          />

          <ToolsPanel data={activeTerm} />

        </div>
      </div>
    </section>
  );
}

/* ===================== TERM LIST ===================== */

function TermList({
  terms,
  active,
  onSelect,
}: {
  terms: typeof TERM_DATA;
  active: typeof TERM_DATA[number];
  onSelect: (t: typeof TERM_DATA[number]) => void;
}) {
  return (
    <div className="bg-[#1D1D1D] text-[#FBF8E4] px-4 py-8">

      <div className="px-6 py-6 mb-4 border-b border-white/5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#FFC62A] font-black mb-2">
          Execution Path
        </p>
        <h3 className="text-xl font-black uppercase tracking-tighter">
          Program Terms
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {terms.map((term) => {
          const isActive = term.id === active.id;

          return (
            <button
              key={term.id}
              onClick={() => onSelect(term)}
              className={`
                relative flex items-center gap-6
                w-full px-6 py-6 text-left rounded-2xl
                transition-all duration-500 group
                ${
                  isActive
                    ? "bg-[#FBF8E4] text-[#1D1D1D]"
                    : "text-white/40 hover:bg-white/5"
                }
              `}
            >
              <span className={`
                text-sm font-black transition-colors
                ${isActive ? "text-[#FFC62A]" : "text-white/20 group-hover:text-white/40"}
              `}>
                0{term.id}
              </span>

              <div>
                <p className={`
                  text-[10px] uppercase tracking-widest font-bold mb-1
                  ${isActive ? "text-[#1D1D1D]/40" : "text-white/20"}
                `}>
                  Term Phase
                </p>
                <p className="font-black text-sm uppercase tracking-tight leading-none">
                  {term.title}
                </p>
              </div>
              
              {isActive && (
                <div className="ml-auto">
                  <Terminal className="w-4 h-4 text-[#FFC62A]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ===================== TOOLS PANEL ===================== */

function ToolsPanel({ data }: { data: typeof TERM_DATA[number] }) {
  return (
    <div className="px-10 lg:px-16 py-16 bg-white/30">

      <div className="grid grid-cols-1 gap-16">

        {/* TOOLS */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-black text-[#1D1D1D] uppercase tracking-tighter">
              Tools You’ll Use
            </h3>
            <div className="h-px flex-grow bg-[#1D1D1D]/5" />
          </div>

          <div className="flex flex-wrap gap-4">
            {data.tools.map((tool, i) => (
              <Badge key={i} label={tool} />
            ))}
          </div>
        </div>

        {/* TECHNIQUES */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-black text-[#1D1D1D] uppercase tracking-tighter">
              Execution Mastery
            </h3>
            <div className="h-px flex-grow bg-[#1D1D1D]/5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.techniques.map((tech, i) => (
              <Technique key={i} label={tech} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===================== UI ELEMENTS ===================== */

function Badge({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 rounded-xl border border-[#1D1D1D]/10 bg-white/50 text-xs font-black uppercase tracking-widest text-[#1D1D1D] transition-all duration-500 hover:bg-[#FFC62A] hover:border-[#FFC62A] hover:shadow-xl cursor-default">
      {label}
    </div>
  );
}

function Technique({ label }: { label: string }) {
  return (
    <div className="group flex items-center gap-4 px-8 py-6 rounded-3xl bg-white/40 border border-[#1D1D1D]/5 transition-all duration-500 hover:bg-white/80 hover:border-[#FFC62A]/30 hover:shadow-2xl">
      <CheckCircle2 className="w-5 h-5 text-[#FFC62A]" />
      <p className="font-bold text-[#1D1D1D] text-sm uppercase tracking-tight">{label}</p>
    </div>
  );
}