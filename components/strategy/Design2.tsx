"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Command,
  ArrowRight,
  Fingerprint,
  Globe,
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Users,
} from "lucide-react";

export default function KineticMosaic() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      style={{
        background: '#F7F5FF',
        padding: '100px 0',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Straight grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(124,58,237,0.05) 59px, rgba(124,58,237,0.05) 60px),
          repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(124,58,237,0.025) 59px, rgba(124,58,237,0.025) 60px)
        `,
      }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '-180px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 10 }}>

        {/* HEADER */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'flex-end', gap: '40px', marginBottom: '48px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}
            >
              <div style={{ width: '32px', height: '1px', background: 'rgba(124,58,237,0.4)' }} />
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Creative Intelligence</span>
            </motion.div>
            <h2 style={{ margin: 0, lineHeight: 0.88, letterSpacing: '-0.03em' }}>
              <span style={{ display: 'block', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 900, color: '#0D0D1A', textTransform: 'uppercase' }}>The Art</span>
              <span style={{ display: 'block', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 300, color: '#7C3AED', fontStyle: 'italic', fontFamily: 'Georgia, serif', textTransform: 'lowercase' }}>of Impact</span>
            </h2>
          </div>
          <div style={{ paddingLeft: '32px' }}>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#64748b', lineHeight: 1.7, maxWidth: '380px', margin: 0 }}>
              We design digital systems that bridge the gap between{' '}
              <span style={{ color: '#0D0D1A', fontWeight: 700 }}>pure aesthetics</span> and{' '}
              <span style={{ color: '#0D0D1A', fontWeight: 700 }}>raw performance</span>.
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '16px' }}>

          {/* CARD 1 — Identity Systems, tall */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: '1 / 5',
              gridRow: '1 / 3',
              background: hoveredCard === 1 ? '#7C3AED' : 'white',
              borderRadius: '32px',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: `1.5px solid ${hoveredCard === 1 ? '#7C3AED' : '#ede9fe'}`,
              boxShadow: hoveredCard === 1 ? '0 24px 60px rgba(124,58,237,0.25)' : '0 2px 16px rgba(124,58,237,0.06)',
              transition: 'all 0.4s ease',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px',
            }}
          >
            {/* Dot pattern */}
            <div style={{
              position: 'absolute', inset: 0, opacity: hoveredCard === 1 ? 0.06 : 0.03,
              backgroundImage: 'radial-gradient(#7C3AED 1px, transparent 1px)',
              backgroundSize: '18px 18px', pointerEvents: 'none', transition: 'opacity 0.4s',
            }} />

            {/* Corner glow */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px',
              width: '200px', height: '200px', borderRadius: '50%',
              background: `radial-gradient(circle, ${hoveredCard === 1 ? 'rgba(255,255,255,0.15)' : 'rgba(124,58,237,0.08)'} 0%, transparent 70%)`,
              pointerEvents: 'none', transition: 'all 0.4s',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: hoveredCard === 1 ? 'rgba(255,255,255,0.2)' : '#EDE9FE',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px', transition: 'all 0.3s',
              }}>
                <Fingerprint size={22} color={hoveredCard === 1 ? 'white' : '#7C3AED'} />
              </div>
              <div style={{ fontSize: '9px', fontWeight: 800, color: hoveredCard === 1 ? 'rgba(255,255,255,0.5)' : '#C4B5FD', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Module 01</div>
              <h3 style={{ margin: '0 0 12px', fontSize: '26px', fontWeight: 900, color: hoveredCard === 1 ? 'white' : '#0D0D1A', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                Identity<br />Systems
              </h3>
              <p style={{ margin: '0 0 24px', fontSize: '13px', color: hoveredCard === 1 ? 'rgba(255,255,255,0.65)' : '#64748b', fontWeight: 500, lineHeight: 1.65, transition: 'color 0.4s' }}>
                Visual languages built for market leadership and long-term brand equity.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Brand identity kits', 'Typography systems', 'Visual positioning', 'Style guide creation'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: hoveredCard === 1 ? 'rgba(255,255,255,0.7)' : '#64748b', fontWeight: 500 }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: hoveredCard === 1 ? 'rgba(255,255,255,0.5)' : '#A78BFA', flexShrink: 0 }} />{t}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: hoveredCard === 1 ? 'rgba(255,255,255,0.2)' : '#7C3AED',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s',
                transform: hoveredCard === 1 ? 'translateX(4px)' : 'none',
              }}>
                <ArrowRight size={18} color="white" />
              </div>
            </div>
          </motion.div>

          {/* CARD 2 — Performance Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: '5 / 9',
              background: '#0D0D1A',
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '180px',
              transition: 'transform 0.3s ease',
              transform: hoveredCard === 2 ? 'scale(0.98)' : 'scale(1)',
              cursor: 'default',
            }}
          >
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.07 }}>
              <TrendingUp size={100} color="white" />
            </div>
            <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '8px', fontWeight: 800, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Module 02</span>
              <h4 style={{ margin: '6px 0 0', fontSize: '20px', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Performance<br />Marketing</h4>
            </div>
            <p style={{ position: 'relative', zIndex: 1, margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.45)', fontWeight: 500, lineHeight: 1.6 }}>
              Data-driven campaigns built to convert at every stage of the funnel.
            </p>
          </motion.div>

          {/* CARD 3 — Global GTM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: '9 / 13',
              background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '180px',
              transition: 'transform 0.3s ease',
              transform: hoveredCard === 3 ? 'scale(0.98)' : 'scale(1)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Globe size={22} color="rgba(255,255,255,0.8)" />
              <div style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', fontSize: '8px', fontWeight: 800, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 6px #4ADE80' }} />
                Live
              </div>
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 900, color: 'white', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Global GTM</h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 500, lineHeight: 1.6 }}>Scaling brands across borders with precision.</p>
            </div>
          </motion.div>

          {/* CARD 4 — Full Stack Creative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: '5 / 10',
              background: '#EDE9FE',
              borderRadius: '32px',
              padding: '32px 36px',
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '180px',
              transition: 'transform 0.3s ease',
              transform: hoveredCard === 4 ? 'translateY(-4px)' : 'translateY(0)',
              cursor: 'default',
            }}
          >
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <h3 style={{ margin: '0 0 14px', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 900, color: '#3B0764', letterSpacing: '-0.03em', lineHeight: 0.95, textTransform: 'uppercase' }}>
                Full Stack<br />Creative
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Design', 'Code', 'Data', 'Strategy'].map(tag => (
                  <span key={tag} style={{
                    padding: '4px 12px',
                    background: '#7C3AED', color: 'white',
                    borderRadius: '8px', fontSize: '9px',
                    fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{
              width: '88px', height: '88px', flexShrink: 0,
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              transition: 'transform 0.5s ease',
              transform: hoveredCard === 4 ? 'rotate(6deg)' : 'rotate(0deg)',
              zIndex: 1,
            }}>
              <Sparkles size={28} color="#7C3AED" />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-10px', right: '-10px',
                  width: '32px', height: '32px',
                  background: '#3B0764', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Command size={14} color="#C4B5FD" />
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 5 — Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              gridColumn: '10 / 13',
              background: 'white',
              borderRadius: '32px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1.5px solid #ede9fe',
              minHeight: '180px',
              transition: 'all 0.3s ease',
              boxShadow: hoveredCard === 5 ? '0 16px 48px rgba(124,58,237,0.12)' : '0 2px 12px rgba(124,58,237,0.04)',
              transform: hoveredCard === 5 ? 'translateY(-4px)' : 'translateY(0)',
              cursor: 'default',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart3 size={16} color="#7C3AED" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={11} color="#4ADE80" />
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#4ADE80', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 900, color: '#7C3AED', letterSpacing: '-0.03em', lineHeight: 1 }}>5.8x</div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '4px' }}>Avg. ROAS</div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM NAV */}
        <div style={{
          marginTop: '48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '20px',
          borderTop: '1px solid #ede9fe',
          paddingTop: '36px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users size={14} color="#A78BFA" />
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Trusted by <span style={{ color: '#0D0D1A' }}>500+ Students</span> across India
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {[{ v: '95%', l: 'Placement Rate' }, { v: '₹500Cr+', l: 'Revenue Driven' }].map(s => (
              <div key={s.l} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'white', border: '1px solid #ede9fe',
                borderRadius: '999px', padding: '8px 16px',
                boxShadow: '0 2px 10px rgba(124,58,237,0.06)',
              }}>
                <span style={{ fontSize: '13px', fontWeight: 900, color: '#7C3AED' }}>{s.v}</span>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</span>
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#7C3AED', color: 'white',
                border: 'none', borderRadius: '16px',
                padding: '14px 24px',
                fontSize: '10px', fontWeight: 800,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(124,58,237,0.3)',
              }}
            >
              Start a Project <ArrowRight size={14} />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}