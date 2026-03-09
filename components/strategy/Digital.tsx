"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Cpu, 
  MousePointerClick, 
  Share2, 
  ArrowUpRight, 
  CheckCircle2,
  TrendingUp,
  Zap,
  Sparkles
} from "lucide-react";

const marketingPillars = [
  {
    id: "ai",
    title: "AI-Powered Elevation",
    icon: <Cpu size={24} />,
    color: "#365C47",
    summary: "Leveraging Large Language Models to automate hyper-personalized customer journeys.",
    metrics: { label: "Efficiency Boost", value: "+140%" },
    features: [
      "Predictive intent scoring",
      "Automated creative production",
      "24/7 AI sales assistants",
      "Sentiment-driven retargeting"
    ],
    description: "In 2026, AI is the core. We move beyond simple automation to Predictive Experience Design inside the TAC Suite Online."
  },
  {
    id: "content",
    title: "Organic Authority",
    icon: <Share2 size={24} />,
    color: "#FFC62A",
    summary: "Dominating search engines and social feeds through high-signal, expert-led content.",
    metrics: { label: "Trust Factor", value: "9.2/10" },
    features: [
      "Answer Engine Optimization (AEO)",
      "Founder-led content flywheels",
      "Short-form video dominance",
      "UGC conversion engines"
    ],
    description: "Traditional SEO has evolved into AEO. We focus on being the primary source for AI answer engines by building authoritative content."
  },
  {
    id: "performance",
    title: "Performance Max",
    icon: <MousePointerClick size={24} />,
    color: "#FFC62A",
    summary: "Scaling high-ticket revenue through data-backed paid acquisition and CRO.",
    metrics: { label: "Average ROAS", value: "5.8x" },
    features: [
      "Cross-platform identity resolution",
      "Creative testing frameworks",
      "Post-purchase LTV scaling",
      "Dynamic pricing optimization"
    ],
    description: "Performance marketing is now about creative differentiation. We win through superior psychological hooks."
  },
  {
    id: "data",
    title: "Data Intelligence",
    icon: <BarChart3 size={24} />,
    color: "#365C47",
    summary: "Turning first-party data into a competitive moat that competitors can't replicate.",
    metrics: { label: "Data Accuracy", value: "99.9%" },
    features: [
      "First-party data integration",
      "Zero-click attribution models",
      "Privacy-first tracking (CDP)",
      "Revenue forecasting models"
    ],
    description: "Data is the new oil. We build custom data pipelines that unify your CRM and analytics into a single source of truth."
  }
];

export default function MarketingGrowthEngine() {
  const [activeTab, setActiveTab] = useState(marketingPillars[0]);

  return (
    <section className="py-24 px-[5%] bg-[#1A1A1A] text-white overflow-hidden relative font-sans">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F9F7E8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-black/40"
          >
            <Sparkles size={12} className="text-[#FFC62A]" />
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/60">
              The TAC Suite Online
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Marketing <br />
            <span className="font-serif italic font-medium text-[#FFC62A]">Ecosystem</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/40 text-base md:text-lg font-medium leading-relaxed">
            A unified, AI-driven engine built to transform your digital presence into a high-performance growth machine.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_480px] gap-8 items-stretch">
          
          {/* Strategic Insights Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-black/40 rounded-[48px] p-8 md:p-14 h-full flex flex-col justify-between border border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-[#365C47] text-white flex items-center justify-center shadow-lg shadow-[#365C47]/20">
                      {activeTab.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#365C47] mb-1 block">Module Strategy</span>
                      <h3 className="text-3xl font-bold tracking-tight">{activeTab.title}</h3>
                    </div>
                  </div>

                  <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-10 text-[#F9F7E8]">
                    "{activeTab.summary}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {activeTab.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 text-[#FFC62A]"><CheckCircle2 size={18} /></div>
                        <span className="text-base font-bold text-white/50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-8">
                  <div className="flex gap-10">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-white/20 tracking-widest mb-2">{activeTab.metrics.label}</p>
                      <p className="text-4xl font-bold text-[#FFC62A]">{activeTab.metrics.value}</p>
                    </div>
                  </div>
                  
                  <button className="bg-[#365C47] text-white px-10 py-5 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-[#FFC62A] hover:text-black transition-all flex items-center gap-3 group">
                    Enroll in Module <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selector Navigation */}
          <div className="flex flex-col gap-3">
            {marketingPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar)}
                className={`group relative p-6 rounded-[32px] text-left transition-all duration-300 flex items-center justify-between border-2
                  ${activeTab.id === pillar.id 
                    ? "bg-[#FFC62A] border-[#FFC62A] text-black shadow-lg shadow-[#FFC62A]/10" 
                    : "bg-black/40 border-white/5 text-white/40 hover:bg-black/60 hover:text-white"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                    ${activeTab.id === pillar.id ? "bg-black text-[#FFC62A]" : "bg-white/5 text-white/20"}
                  `}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">{pillar.title}</h4>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${activeTab.id === pillar.id ? "text-black/60" : "text-white/20"}`}>Module Details</span>
                  </div>
                </div>
                
                <TrendingUp size={18} className={`transition-all ${activeTab.id === pillar.id ? "text-black" : "text-white/20"}`} />
              </button>
            ))}

            {/* System Intelligence Widget */}
            <div className="mt-auto bg-black/40 border border-white/5 rounded-[32px] p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC62A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Zap className="absolute -bottom-4 -right-4 text-[#FFC62A]/10 scale-[4]" />
              
              <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10 text-white/80">
                <div className="w-2 h-2 rounded-full bg-[#FFC62A] animate-pulse shadow-[0_0_10px_#FFC62A]" />
                Live Node Analysis
              </h5>
              <p className="text-white/40 text-sm font-medium leading-relaxed mb-6 relative z-10">
                The TAC online suite maps <span className="text-[#FFC62A] font-bold">14.2M growth signals</span> to ensure our curriculum stays ahead of 2026 standards.
              </p>
              
              <div className="flex items-center gap-3 bg-white/5 self-start px-4 py-2 rounded-xl border border-white/5 relative z-10">
                <div className="text-[#FFC62A]"><TrendingUp size={14} /></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Node: Online-Suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}