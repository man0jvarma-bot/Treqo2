"use client";

import { BookOpen, Target, Rocket, Briefcase, Sparkles } from "lucide-react";
import { useState } from "react";

// BG: #1A0A3D (deep violet) → bleed to #0D0520

const steps = [
  { num: "01", title: "Foundation", sub: "Core Principles", desc: "Build a solid base with core marketing principles, consumer psychology, and brand execution strategies.", icon: BookOpen, tags: ["Marketing 101", "Brand Strategy", "Consumer Psych"] },
  { num: "02", title: "Specialization", sub: "Advanced Mastery", desc: "Master advanced SEO, PPC, content architecture, and data-driven campaign management techniques.", icon: Target, tags: ["SEO & SEM", "PPC Funnels", "Content Systems"] },
  { num: "03", title: "Application", sub: "Live Projects", desc: "Work on real client briefs and live campaigns to apply expertise under high-pressure real-world conditions.", icon: Rocket, tags: ["Real Clients", "Live Campaigns", "Portfolio Build"] },
  { num: "04", title: "Career Launch", sub: "Industry Entry", desc: "Placement support, resume optimization, mock interviews, and direct hiring partner network access.", icon: Briefcase, tags: ["Placements", "Resume Craft", "Interview Prep"] },
];

export function FrameworkSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section style={{ position: 'relative', background: '#1A0A3D', overflow: 'hidden', padding: '100px 0 180px', fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <defs><pattern id="ch4" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="40" stroke="#C4B5FD" strokeWidth="0.4" strokeOpacity="0.07" /><line x1="0" y1="0" x2="40" y2="0" stroke="#C4B5FD" strokeWidth="0.4" strokeOpacity="0.07" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#ch4)" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, #1A0A3D 100%)' }} />
      </div>
      {/* Top bleed from #2D1B69 */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, #2D1B69, transparent)', pointerEvents: 'none', zIndex: 1 }} />
      {/* Bottom bleed → #0D0520 */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to bottom, transparent, #0D0520)', pointerEvents: 'none', zIndex: 1 }} />
      {/* Ambient */}
      <div style={{ position: 'absolute', top: -120, left: '15%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,181,253,0.06) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.22)', borderRadius: 999, padding: '5px 16px', marginBottom: 20 }}>
            <Sparkles size={11} color="#C4B5FD" />
            <span style={{ fontSize: 10, fontWeight: 800, color: '#C4B5FD', letterSpacing: '0.22em', textTransform: 'uppercase' }}>The Treqo Framework</span>
          </div>
          <h2 style={{ margin: '0 0 16px', lineHeight: 1 }}>
            <span style={{ display: 'block', fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, color: 'rgba(255,255,255,0.88)', letterSpacing: '-0.03em' }}>Our Learning</span>
            <span style={{ display: 'block', fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #C4B5FD 0%, #7C3AED 50%, #b3affd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Execution Framework</span>
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', maxWidth: 400, margin: '0 auto', lineHeight: 1.7 }}>A battle-tested 4-stage system that transforms beginners into industry-ready marketers.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, position: 'relative' }}>
          {/* Connector */}
          <div style={{ position: 'absolute', top: 52, left: '12.5%', width: '75%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(196,181,253,0.3), rgba(124,58,237,0.6), rgba(196,181,253,0.3), transparent)', zIndex: 0 }} />

          {steps.map((step, i) => {
            const isH = hovered === i;
            return (
              <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', transition: 'transform .35s', transform: isH ? 'translateY(-8px)' : 'none' }}>
                {/* Node */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: isH ? 'linear-gradient(135deg, #C4B5FD, #7C3AED, #3730A3)' : 'rgba(196,181,253,0.1)', border: `2px solid ${isH ? 'transparent' : 'rgba(196,181,253,0.25)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 13, fontWeight: 900, color: isH ? 'white' : '#C4B5FD', boxShadow: isH ? '0 0 28px rgba(124,58,237,0.6)' : 'none', transition: 'all .35s', zIndex: 2 }}>
                  {step.num}
                </div>
                {/* Card */}
                <div style={{ background: isH ? 'rgba(196,181,253,0.08)' : 'rgba(255,255,255,0.03)', border: `1.5px solid ${isH ? 'rgba(196,181,253,0.3)' : 'rgba(196,181,253,0.08)'}`, borderRadius: 24, padding: '26px 22px', flex: 1, display: 'flex', flexDirection: 'column', transition: 'all .35s', boxShadow: isH ? '0 20px 60px rgba(55,48,163,0.4)' : 'none', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -40, right: -40, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,181,253,0.15) 0%, transparent 70%)', opacity: isH ? 1 : 0, transition: 'opacity .4s', pointerEvents: 'none' }} />
                  <div style={{ width: 42, height: 42, borderRadius: 13, background: isH ? 'linear-gradient(135deg, #7C3AED, #3730A3)' : 'rgba(196,181,253,0.1)', border: `1px solid ${isH ? 'transparent' : 'rgba(196,181,253,0.15)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, transition: 'all .35s' }}>
                    <step.icon size={19} color={isH ? 'white' : '#C4B5FD'} />
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: isH ? '#C4B5FD' : 'rgba(196,181,253,0.35)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 6, transition: 'color .3s' }}>{step.sub}</div>
                  <h3 style={{ margin: '0 0 12px', fontSize: 22, fontWeight: 900, color: isH ? 'white' : 'rgba(255,255,255,0.75)', letterSpacing: '-0.02em', lineHeight: 1.1, transition: 'color .3s' }}>{step.title}</h3>
                  <p style={{ margin: '0 0 18px', fontSize: 12, color: isH ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)', lineHeight: 1.65, flex: 1, transition: 'color .3s' }}>{step.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {step.tags.map(tag => (
                      <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: 8, background: isH ? 'rgba(196,181,253,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${isH ? 'rgba(196,181,253,0.2)' : 'rgba(196,181,253,0.07)'}`, borderRadius: 8, padding: '6px 10px', transition: 'all .3s' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: isH ? '#C4B5FD' : 'rgba(196,181,253,0.3)', flexShrink: 0, transition: 'background .3s' }} />
                        <span style={{ fontSize: 9, fontWeight: 700, color: isH ? '#C4B5FD' : 'rgba(196,181,253,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'color .3s' }}>{tag}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 18, height: 2, borderRadius: 999, background: isH ? 'linear-gradient(90deg, #C4B5FD, #7C3AED, #3730A3, transparent)' : 'rgba(196,181,253,0.08)', transition: 'all .4s', width: isH ? '100%' : '25%' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}