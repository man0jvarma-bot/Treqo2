"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  MousePointerClick,
  Cpu,
  Zap,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const marketingData = [
  {
    title: "Algorithmic Sovereignty",
    tag: "AI Strategy",
    desc: "The future of marketing is no longer about human intuition but algorithmic mastery. Architecting campaigns that speak the language of the algorithm is the only way to ensure brand survival.",
    icon: <Cpu size={20} />,
    stat: { value: "+140%", label: "Efficiency" },
    color: "#7C3AED",
  },
  {
    title: "Attention Economics",
    tag: "Growth Science",
    desc: "Human attention is the world's most scarce commodity. Digital marketing is the science of capturing, retaining, and converting that attention into measurable equity.",
    icon: <MousePointerClick size={20} />,
    stat: { value: "8.4s", label: "Avg. Hook Time" },
    color: "#4F46E5",
  },
  {
    title: "Performance Synergy",
    tag: "Paid + Organic",
    desc: "Integrating Paid Media with organic Growth Strategies creates a compounding effect. Every marketing dollar spent is an investment into a self-optimizing ecosystem.",
    icon: <BarChart size={20} />,
    stat: { value: "5.8x", label: "Avg. ROAS" },
    color: "#7C3AED",
  },
  {
    title: "Cognitive Branding",
    tag: "Brand Psychology",
    desc: "Modern digital strategy transcends simple advertising; it enters the realm of cognitive psychology to leave a permanent psychological impact on target audiences.",
    icon: <Zap size={20} />,
    stat: { value: "9.2", label: "Trust Score" },
    color: "#4F46E5",
  },
];

const DigitalMarketingDeepDive = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      width: '100%',
      background: '#F7F5FF',
      padding: '100px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>

      {/* Straight grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(124,58,237,0.025) 59px, rgba(124,58,237,0.025) 60px)
        `,
      }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '-150px', right: '-80px', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 5%', position: 'relative', zIndex: 10 }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'white', border: '1px solid #ede9fe',
              borderRadius: '999px', padding: '5px 16px', marginBottom: '20px',
              boxShadow: '0 2px 12px rgba(124,58,237,0.08)',
            }}
          >
            <Sparkles size={11} color="#7C3AED" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Industry Evolution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ margin: '0 0 20px', lineHeight: 0.9, letterSpacing: '-0.04em' }}
          >
            <span style={{ display: 'block', fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 900, color: '#0D0D1A' }}>The Digital</span>
            <span style={{ display: 'block', fontSize: 'clamp(44px, 7vw, 90px)', fontWeight: 400, color: '#7C3AED', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>Future.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: '15px', color: '#64748b', fontWeight: 500, maxWidth: '460px', margin: '0 auto', lineHeight: 1.75 }}
          >
            We build <span style={{ color: '#7C3AED', fontWeight: 800 }}>Integrated Intelligence</span> frameworks that scale global market leaders.
          </motion.p>
        </div>

        {/* CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {marketingData.map((item, index) => {
            const isHov = hovered === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? item.color : 'white',
                  borderRadius: '32px',
                  padding: '36px',
                  border: `1.5px solid ${isHov ? item.color : '#ede9fe'}`,
                  boxShadow: isHov ? `0 24px 60px ${item.color}35` : '0 2px 16px rgba(124,58,237,0.05)',
                  transition: 'all 0.4s ease',
                  transform: isHov ? 'translateY(-6px)' : 'translateY(0)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '280px',
                }}
              >
                {/* BG decoration */}
                <div style={{
                  position: 'absolute', bottom: '-50px', right: '-50px',
                  width: '180px', height: '180px', borderRadius: '50%',
                  background: isHov ? 'rgba(255,255,255,0.06)' : `${item.color}06`,
                  pointerEvents: 'none', transition: 'all 0.4s',
                }} />
                <div style={{
                  position: 'absolute', top: '-60px', left: '-60px',
                  width: '160px', height: '160px', borderRadius: '50%',
                  background: isHov ? 'rgba(255,255,255,0.04)' : `${item.color}04`,
                  pointerEvents: 'none', transition: 'all 0.4s',
                }} />

                {/* Top row */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' }}>
                    {/* Icon + tag */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '48px', height: '48px', borderRadius: '14px',
                        background: isHov ? 'rgba(255,255,255,0.2)' : `${item.color}12`,
                        border: `1px solid ${isHov ? 'rgba(255,255,255,0.3)' : `${item.color}25`}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.35s',
                        flexShrink: 0,
                      }}>
                        {React.cloneElement(item.icon as React.ReactElement<{ size?: number; color?: string }>, {
                          size: 20,
                          color: isHov ? 'white' : item.color,
                        })}
                      </div>
                      <div style={{
                        padding: '4px 10px',
                        background: isHov ? 'rgba(255,255,255,0.15)' : `${item.color}10`,
                        border: `1px solid ${isHov ? 'rgba(255,255,255,0.25)' : `${item.color}20`}`,
                        borderRadius: '999px',
                        fontSize: '9px', fontWeight: 800,
                        color: isHov ? 'rgba(255,255,255,0.9)' : item.color,
                        textTransform: 'uppercase', letterSpacing: '0.12em',
                        transition: 'all 0.35s',
                      }}>{item.tag}</div>
                    </div>

                    {/* Stat */}
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '22px', fontWeight: 900, color: isHov ? 'white' : item.color, letterSpacing: '-0.03em', lineHeight: 1, transition: 'color 0.35s' }}>{item.stat.value}</div>
                      <div style={{ fontSize: '9px', fontWeight: 700, color: isHov ? 'rgba(255,255,255,0.5)' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '2px', transition: 'color 0.35s' }}>{item.stat.label}</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    margin: '0 0 12px',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 900,
                    color: isHov ? 'white' : '#0D0D1A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    transition: 'color 0.35s',
                  }}>{item.title}</h3>

                  {/* Divider */}
                  <div style={{
                    height: '1px',
                    background: isHov ? 'rgba(255,255,255,0.15)' : '#f1f5f9',
                    marginBottom: '16px',
                    transition: 'background 0.35s',
                  }} />

                  {/* Desc */}
                  <p style={{
                    margin: 0,
                    fontSize: '13.5px',
                    color: isHov ? 'rgba(255,255,255,0.7)' : '#64748b',
                    fontWeight: 500,
                    lineHeight: 1.7,
                    transition: 'color 0.35s',
                  }}>{item.desc}</p>
                </div>

                {/* Bottom CTA */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  marginTop: '28px',
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'all 0.35s ease',
                }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: 'white', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Explore Module</span>
                  <ArrowRight size={13} color="white" />
                </div>

                {/* Corner arrow — always visible */}
                <div style={{
                  position: 'absolute', top: '28px', right: '28px',
                  opacity: isHov ? 0 : 0.3,
                  transition: 'opacity 0.3s',
                }}>
                  <ArrowUpRight size={16} color={item.color} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              position: 'relative',
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '18px 40px',
              background: '#0D0D1A',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              fontSize: '11px', fontWeight: 800,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: 'pointer',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
            }}
          >
            {/* Hover fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.45 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #7C3AED, #4F46E5)',
                transformOrigin: 'left',
                borderRadius: '999px',
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>Secure Your Legacy</span>
            <ArrowRight size={15} style={{ position: 'relative', zIndex: 1 }} />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingDeepDive;