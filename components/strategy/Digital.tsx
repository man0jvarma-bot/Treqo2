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
  Sparkles,
} from "lucide-react";

const marketingPillars = [
  {
    id: "ai",
    title: "AI-Powered Elevation",
    Icon: Cpu,
    color: "#4F46E5",
    summary: "Leveraging Large Language Models to automate hyper-personalized customer journeys at scale.",
    metrics: { label: "Efficiency Boost", value: "+140%" },
    features: ["Predictive intent scoring", "Automated creative production", "24/7 AI sales assistants", "Sentiment-driven retargeting"],
    tag: "Module 01",
  },
  {
    id: "content",
    title: "Organic Authority",
    Icon: Share2,
    color: "#7C3AED",
    summary: "Dominating search engines and social feeds through high-signal, expert-led content systems.",
    metrics: { label: "Trust Factor", value: "9.2/10" },
    features: ["Answer Engine Optimization (AEO)", "Founder-led content flywheels", "Short-form video dominance", "UGC conversion engines"],
    tag: "Module 02",
  },
  {
    id: "performance",
    title: "Performance Max",
    Icon: MousePointerClick,
    color: "#4F46E5",
    summary: "Scaling high-ticket revenue through data-backed paid acquisition and conversion rate optimization.",
    metrics: { label: "Average ROAS", value: "5.8x" },
    features: ["Cross-platform identity resolution", "Creative testing frameworks", "Post-purchase LTV scaling", "Dynamic pricing optimization"],
    tag: "Module 03",
  },
  {
    id: "data",
    title: "Data Intelligence",
    Icon: BarChart3,
    color: "#7C3AED",
    summary: "Turning first-party data into a competitive moat that competitors can never replicate.",
    metrics: { label: "Data Accuracy", value: "99.9%" },
    features: ["First-party data integration", "Zero-click attribution models", "Privacy-first tracking (CDP)", "Revenue forecasting models"],
    tag: "Module 04",
  },
];

export default function MarketingGrowthEngine() {
  const [activeTab, setActiveTab] = useState(marketingPillars[0]);

  return (
    <section style={{
      background: '#B39CD4',
      padding: '140px 0',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* 1. SEAMLESS TOP FLOW: Multi-stop gradient to erase the horizontal line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '300px',
        background: 'linear-gradient(to bottom, #E6D7F3 0%, rgba(230, 215, 243, 0.5) 40%, rgba(179, 156, 212, 0) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* 2. CONNECTED GRID: Matches 80px frequency of previous component */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.06 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px' // Perfect connection
        }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 10 }}>

        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'white', border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <Sparkles size={12} color="#7C3AED" />
            <span style={{ fontSize: '10px', fontWeight: 900, color: '#7C3AED', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Growth Architecture</span>
          </motion.div>

          <h2 style={{ margin: '0 0 20px', lineHeight: 1, letterSpacing: '-0.04em' }}>
            <span style={{
              display: 'block', fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 900,
              background: 'linear-gradient(to right, #c3c1d6 0%, #8d99ff 35%, #a574ff 36%, #c9d0ff 100%);',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Marketing</span>
            <span style={{ display: 'block', fontSize: 'clamp(44px, 6vw, 76px)', fontWeight: 900, color: '#1A0B35', fontStyle: 'italic' }}>Ecosystem</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(26, 11, 53, 0.6)', fontWeight: 600, maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            A unified execution framework engineered to dominate customer acquisition loops.
          </p>
        </div>

        {/* MAIN GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '28px', alignItems: 'stretch' }}>

          {/* LEFT — Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '44px',
                padding: '64px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid white',
                backdropFilter: 'blur(25px)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(124, 58, 237, 0.15)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '22px',
                    background: activeTab.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 15px 35px ${activeTab.color}40`,
                  }}>
                    <activeTab.Icon size={32} color="white" />
                  </div>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 900, color: activeTab.color, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{activeTab.tag}</span>
                    <h3 style={{ margin: 0, fontSize: '46px', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.03em' }}>{activeTab.title}</h3>
                  </div>
                </div>

                <p style={{
                  margin: '0 0 48px', fontSize: '22px', fontWeight: 600,
                  color: '#4B5563', lineHeight: 1.6,
                  paddingLeft: '28px', borderLeft: `5px solid ${activeTab.color}`,
                }}>
                  "{activeTab.summary}"
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {activeTab.features.map((feature, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '20px 24px', background: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.6)', borderRadius: '20px',
                    }}>
                      <CheckCircle2 size={18} color={activeTab.color} />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#1A0B35' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: '56px', paddingTop: '44px', borderTop: '1px solid rgba(26, 11, 53, 0.1)',
              }}>
                <div>
                  <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 900, color: 'rgba(26, 11, 53, 0.4)', textTransform: 'uppercase' }}>{activeTab.metrics.label}</p>
                  <p style={{ margin: 0, fontSize: '56px', fontWeight: 900, color: activeTab.color, lineHeight: 1 }}>{activeTab.metrics.value}</p>
                </div>
                <button style={{
                  background: '#1A0B35', color: 'white', border: 'none',
                  borderRadius: '18px', padding: '18px 36px', fontSize: '13px', fontWeight: 900,
                  textTransform: 'uppercase', cursor: 'pointer', boxShadow: `0 15px 35px rgba(0,0,0,0.2)`,
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  Curriculum <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT — Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {marketingPillars.map((pillar) => {
              const isActive = activeTab.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    padding: '28px', borderRadius: '28px', textAlign: 'left',
                    background: isActive ? pillar.color : 'rgba(255,255,255,0.2)',
                    border: `1px solid ${isActive ? pillar.color : 'rgba(255,255,255,0.4)'}`,
                    cursor: 'pointer', transition: 'all 0.3s ease',
                    transform: isActive ? 'translateX(-10px)' : 'none',
                  }}
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '15px',
                    background: isActive ? 'rgba(255,255,255,0.2)' : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <pillar.Icon size={22} color={isActive ? 'white' : pillar.color} />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '10px', fontWeight: 900, color: isActive ? 'white' : pillar.color, textTransform: 'uppercase' }}>{pillar.tag}</p>
                    <p style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: isActive ? 'white' : '#1A0B35' }}>{pillar.title}</p>
                  </div>
                </button>
              );
            })}

            {/* AI Node Widget */}
            <div style={{
              marginTop: 'auto', padding: '32px', borderRadius: '32px',
              background: '#1A0B35',
              border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden'
            }}>
              <Zap size={70} style={{ position: 'absolute', right: '-15px', bottom: '-15px', opacity: 0.1, color: 'white' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 12px #4ADE80' }} />
                <span style={{ fontSize: 11, fontWeight: 900, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Treqo Intelligence</span>
              </div>
              <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Processing <span style={{ color: 'white', fontWeight: 800 }}>14.2M signals</span> to ensure your path stays ahead of the market.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}