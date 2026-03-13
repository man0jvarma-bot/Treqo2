"use client";

import Image from "next/image";
import { Download, TrendingUp, BarChart3, Megaphone, Zap, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const placements = [
  { name: "Aman Gupta", company: "Meta", initials: "AG", color: "#1877F2" },
  { name: "Sanya Iyer", company: "Google", initials: "SI", color: "#34A853" },
  { name: "Rohan Shah", company: "Microsoft", initials: "RS", color: "#00A4EF" },
  { name: "Vikram R.", company: "Amazon", initials: "VR", color: "#FF9900" },
  { name: "Priya K.", company: "Netflix", initials: "PK", color: "#E50914" },
  { name: "Karan J.", company: "Apple", initials: "KJ", color: "#555555" },
  { name: "Neha M.", company: "Flipkart", initials: "NM", color: "#2874F0" },
  { name: "Dev S.", company: "Zomato", initials: "DS", color: "#E23744" },
];

export default function PortfolioProof() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      width: '100%',
      background: '#E5E9F0', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 0',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 5%', width: '100%' }}>

        {/* Header — centered */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'white', border: '1px solid rgba(88,41,229,0.1)',
            borderRadius: '999px', padding: '8px 20px', marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          }}>
            <Sparkles size={14} color="#5829E5" />
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>The Treqo Advantage</span>
          </div>
          
          <h2 style={{ margin: 0, lineHeight: 1.05 }}>
            <span style={{ 
              display: 'block', 
              fontSize: 'clamp(54px, 7vw, 84px)', 
              fontWeight: 900, 
              color: '#1A0B35', 
              letterSpacing: '-0.04em' 
            }}>
              Why Choose
            </span>
            <span style={{ 
              display: 'inline-block', // CRITICAL FIX: prevents gradient cutoff
              fontSize: 'clamp(54px, 7vw, 84px)', 
              fontWeight: 900, 
              letterSpacing: '-0.04em', 
              fontStyle: 'italic',
              background: 'linear-gradient(to right, #5829E5 0%, #311882 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '10px' // CRITICAL FIX: provides space for descenders
            }}>
              Treqo?
            </span>
          </h2>
          
          <p style={{ fontSize: '16px', color: '#4B5563', fontWeight: 500, lineHeight: 1.6, margin: '20px auto 0', maxWidth: '480px' }}>
            Master real campaigns with live clients. Build a high-performance portfolio that gets you hired by the world&apos;s best.
          </p>
        </div>

        {/* BENTO GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 320px',
          gridTemplateRows: '1fr 1fr',
          gap: '20px',
          height: 'clamp(500px, 60vh, 650px)',
        }}>

          {/* CARD 1 — Paid Growth */}
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridRow: '1 / 3',
              background: hovered === 1 ? '#471ecb' : '#1A0B35',
              borderRadius: '32px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 1 ? 'translateY(-8px)' : 'translateY(0)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hovered === 1 ? '0 30px 60px -12px rgba(88, 41, 229, 0.3)' : 'none',
            }}
          >
            <div style={{
              position: 'absolute', width: '250px', height: '250px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              top: '-60px', right: '-60px', pointerEvents: 'none',
              transition: 'opacity 0.4s', opacity: hovered === 1 ? 0.9 : 0.4
            }} />
            <div>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(255,255,255,0.1)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', marginBottom: '24px'
              }}>
                <TrendingUp size={24} color="white" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>Module 01</div>
              <h3 style={{ margin: '0 0 20px', fontSize: '24px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>Paid Growth<br />& Performance</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Google & Meta ad funnels', 'ROAS optimization tactics', 'AI-driven bid strategies', 'Budget allocation models'].map(t => (
                  <li key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A78BFA', flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', borderRadius: '12px',
              padding: '10px 18px', alignSelf: 'flex-start',
              fontSize: '11px', fontWeight: 800, color: 'white',
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              STRATEGY_GUIDE.PDF <Download size={14} />
            </div>
          </div>

          {/* CARD 2 — SEO */}
          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'white',
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #E2E8F0',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 2 ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hovered === 2 ? '0 25px 50px rgba(0,0,0,0.06)' : '0 4px 12px rgba(0,0,0,0.02)',
              cursor: 'default',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 size={20} color="#5829E5" />
                </div>
                <ArrowUpRight size={18} color="#94A3B8" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Module 02</div>
              <h3 style={{ margin: '0 0 14px', fontSize: '20px', fontWeight: 900, color: '#1A0B35' }}>SEO &<br />Analytics</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Full-funnel audits', 'GA4 setup', 'KPI Tracking'].map(t => (
                  <li key={t} style={{ fontSize: '13px', color: '#64748B', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#5829E5', flexShrink: 0 }} />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '8px 16px',
              alignSelf: 'flex-start', fontSize: '10px', fontWeight: 800,
              color: '#5829E5', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              SEO_STACK.XLS <Download size={12} />
            </div>
          </div>

          {/* CARD 3 — Brand */}
          <div
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'linear-gradient(135deg, #5829E5 0%, #311882 100%)',
              borderRadius: '32px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 3 ? 'translateY(-8px)' : 'translateY(0)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hovered === 3 ? '0 25px 50px rgba(88,41,229,0.3)' : 'none',
            }}
          >
            <div style={{
              position: 'absolute', bottom: '-50px', right: '-50px',
              width: '160px', height: '160px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)', pointerEvents: 'none'
            }} />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Megaphone size={20} color="white" />
                </div>
                <ArrowUpRight size={18} color="rgba(255,255,255,0.4)" />
              </div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>Module 03</div>
              <h3 style={{ margin: '0 0 14px', fontSize: '20px', fontWeight: 900, color: 'white' }}>Brand &<br />Content</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Voice identity', 'Viral campaign pitching'].map(t => (
                  <li key={t} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />{t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '8px 16px',
              alignSelf: 'flex-start', fontSize: '10px', fontWeight: 800,
              color: 'white', letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>
              BRAND_SYSTEM.PPT <Download size={12} />
            </div>
          </div>

          {/* CARD 4 — Growth Challenge */}
          <div
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
            style={{
              gridColumn: '2 / 4',
              background: '#FFFFFF',
              borderRadius: '32px',
              padding: '32px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '30px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered === 4 ? 'translateY(-8px)' : 'translateY(0)',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: hovered === 4 ? '0 20px 40px rgba(0,0,0,0.05)' : '0 4px 12px rgba(0,0,0,0.02)',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color="#5829E5" />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Capstone Project</span>
              </div>
              <h3 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 900, color: '#1A0B35' }}>Growth Challenge</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#64748B', fontWeight: 500, lineHeight: 1.5, maxWidth: '440px' }}>
                Showcase your mastery by presenting a full-stack digital campaign live before a jury of industry leaders.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <div style={{
                padding: '14px 28px',
                background: '#5829E5',
                borderRadius: '999px',
                fontSize: '12px', fontWeight: 800, color: 'white',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                boxShadow: '0 10px 25px rgba(88,41,229,0.2)',
                whiteSpace: 'nowrap'
              }}>
                Live Pitch
              </div>
            </div>
          </div>

          {/* CARD 5 — Placements */}
          <div style={{
            gridColumn: '4',
            gridRow: '1 / 3',
            background: '#1A0B35',
            borderRadius: '32px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(88,41,229,0.2)',
          }}>
            <div style={{
              padding: '30px 24px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'linear-gradient(180deg, rgba(88,41,229,0.15) 0%, transparent 100%)',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 10px #4ADE80' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Global Network</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: 'white', lineHeight: 1.2 }}>
                Treqo <span style={{ color: '#A78BFA', fontStyle: 'italic' }}>Alumni</span>
              </h3>
            </div>

            <div style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '0 16px' }}>
              <div className="scroll-track" style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '20px' }}>
                {[...placements, ...placements, ...placements].map((p, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '16px', padding: '14px 18px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: p.color + '22', border: `1.5px solid ${p.color}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 900, color: p.color, flexShrink: 0
                    }}>
                      {p.initials}
                    </div>
                    <div style={{ overflow: 'hidden', flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.company}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to bottom, #1A0B35, transparent)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to top, #1A0B35, transparent)', zIndex: 2 }} />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .scroll-track {
          animation: scrollUp 40s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.33%); }
        }
      `}</style>
    </section>
  );
}