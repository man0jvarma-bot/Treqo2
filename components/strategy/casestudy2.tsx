"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CASES = [
  { name: "Utkarsh Gupta", role: "Founder, Comet", problem: "Scale operations on Ajio & Myntra while preserving brand identity.", brand: "COMET", tag: "E-Commerce" },
  { name: "Anil Goteti", role: "Founder, Scapia", problem: "Boost engagement, strengthen loyalty, and build a travel-rewards brand.", brand: "SCAPIA", tag: "FinTech" },
  { name: "Vibha Harish", role: "Founder, Cosmix", problem: "Increase TOFU awareness and virality through organic channels.", brand: "COSMIX", tag: "D2C Wellness" },
  { name: "Shamika Haldipurkar", role: "Founder, d'you", problem: "Launch product portfolio across quick-commerce platforms.", brand: "D'YOU", tag: "Quick Commerce" },
  { name: "Varun Khaitan", role: "Co-Founder, Urban Co", problem: "Improve NPS of Cleaning vertical crossing ₹80Cr ARR.", brand: "URBAN COMPANY", tag: "Marketplace" },
  { name: "Neha Agarwal", role: "Founder, Nua", problem: "Strengthen customer retention and improve LTV.", brand: "NUA", tag: "Consumer Health" },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}
const SLIDES = chunkArray(CASES, 4);

function NavBtn({ cls, icon: Icon }: { cls: string; icon: React.ElementType }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      className={cls}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '44px', height: '44px', borderRadius: '12px',
        background: hov ? '#5829E5' : 'rgba(255,255,255,0.5)',
        border: `1px solid ${hov ? 'transparent' : 'rgba(255,255,255,0.3)'}`,
        color: hov ? 'white' : '#1A0B35', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.3s ease', flexShrink: 0,
        boxShadow: hov ? '0 8px 24px rgba(88,41,229,0.2)' : 'none',
      }}
    >
      <Icon size={18} />
    </button>
  );
}

function CaseCard({ name, role, problem, brand, tag }: { name: string; role: string; problem: string; brand: string; tag: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '24px',
        background: hovered ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.45)',
        border: `1.5px solid ${hovered ? '#5829E5' : 'rgba(255, 255, 255, 0.4)'}`,
        padding: '32px',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minHeight: '320px',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 30px 60px rgba(26,11,53,0.1)' : 'none',
        cursor: 'default', overflow: 'hidden', position: 'relative',
        backdropFilter: 'blur(20px)'
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: hovered ? '#5829E5' : 'rgba(255,255,255,0.6)',
            borderRadius: '999px', padding: '5px 14px', transition: 'all 0.3s ease'
          }}>
            <span style={{ fontSize: '9px', fontWeight: 800, color: hovered ? 'white' : '#5829E5', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
          </div>
          <TrendingUp size={14} color={hovered ? '#5829E5' : 'rgba(26,11,53,0.3)'} />
        </div>

        <p style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.02em' }}>{name}</p>
        <p style={{ margin: '0 0 24px', fontSize: '11px', fontWeight: 700, color: '#5829E5', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{role}</p>

        <p style={{ margin: '0 0 6px', fontSize: '9px', fontWeight: 800, color: 'rgba(26,11,53,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Growth Focus</p>
        <p style={{ margin: 0, fontSize: '14px', color: '#334155', fontWeight: 500, lineHeight: 1.6 }}>{problem}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
        <span style={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 800, color: '#1A0B35', fontFamily: 'Georgia, serif' }}>{brand}</span>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: hovered ? '#1A0B35' : 'rgba(26,11,53,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
        }}>
          <ArrowRight size={16} color={hovered ? 'white' : '#1A0B35'} />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section style={{
      background: '#A5A9D4', // Updated to A5A9D4
      padding: '120px 0',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative', overflow: 'hidden',
    }}>
      
      {/* Structural Invisible Grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.1 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)' }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '80px', alignItems: 'start' }}>

          {/* LEFT STICKY PANEL */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid rgba(255,255,255,0.6)',
              borderRadius: '999px', padding: '6px 16px', marginBottom: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <Sparkles size={11} color="#5829E5" />
              <span style={{ fontSize: '10px', fontWeight: 800, color: '#5829E5', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Execution Proof</span>
            </div>

            <h2 style={{ marginBottom: '24px', lineHeight: 1.1 }}>
              <span style={{ display: 'block', fontSize: 'clamp(40px, 4vw, 56px)', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.03em' }}>Real Case</span>
              <span style={{
                display: 'inline-block', 
                fontSize: 'clamp(40px, 4vw, 56px)', 
                fontWeight: 900,
                fontStyle: 'italic', 
                background: 'linear-gradient(to right, #1A0B35 0%, #5829E5 50%, #1A0B35 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                paddingBottom: '8px'
              }}>Studies</span>
              <span style={{ display: 'block', fontSize: '24px', fontWeight: 800, color: 'rgba(26, 11, 53, 0.4)', letterSpacing: '-0.02em', marginTop: '4px' }}>Done by Founders</span>
            </h2>

            <p style={{ margin: '0 0 32px', fontSize: '15px', color: '#1A0B35', lineHeight: 1.7, fontWeight: 500, opacity: 0.8 }}>
              Real businesses. Real founders. Real growth challenges solved inside the Treqo ecosystem.
            </p>

            <Link href="/case-studies" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#1A0B35', color: 'white', borderRadius: '16px', padding: '16px 32px',
              fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', marginBottom: '48px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 20px rgba(26,11,53,0.2)'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Explore All <ArrowRight size={14} />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <NavBtn cls="case-prev-btn" icon={ChevronLeft} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {SLIDES.map((_, i) => (
                  <div key={i} style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: i === 0 ? '#1A0B35' : 'rgba(255,255,255,0.6)',
                  }} />
                ))}
              </div>
              <NavBtn cls="case-next-btn" icon={ChevronRight} />
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div style={{ minWidth: 0 }}>
            <Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={24} navigation={{ nextEl: '.case-next-btn', prevEl: '.case-prev-btn' }}>
              {SLIDES.map((group, i) => (
                <SwiperSlide key={i}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    {group.map((item, j) => <CaseCard key={j} {...item} />)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}