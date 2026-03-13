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
  { name: "Deepak V.", role: "Founder, Bare", problem: "Optimize supply chain for D2C scaling while maintaining margins.", brand: "BARE ANATOMY", tag: "D2C Beauty" },
  { name: "Rishabh P.", role: "Founder, Mensa", problem: "Acquisition strategy and brand integration for global markets.", brand: "MENSA", tag: "Brand Aggregator" },
  { name: "Aditi S.", role: "Founder, Heads up", problem: "Omnichannel expansion and customer journey mapping.", brand: "HEADS UP", tag: "Omnichannel" },
  { name: "Rahul M.", role: "Founder, Wakefit", problem: "Performance marketing scaling for high-ticket home categories.", brand: "WAKEFIT", tag: "Home & Living" },
  { name: "Pooja D.", role: "Founder, MyGlamm", problem: "Conversion rate optimization for content-to-commerce funnels.", brand: "MYGLAMM", tag: "Beauty Tech" },
  { name: "Sahil B.", role: "Founder, Zivame", problem: "Retargeting frameworks and lifecycle marketing strategy.", brand: "ZIVAME", tag: "Fashion D2C" },
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
        width: '44px', height: '44px', borderRadius: '10px',
        background: hov ? '#7C3AED' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hov ? '#7C3AED' : 'rgba(255,255,255,0.12)'}`,
        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
      }}
    >
      <Icon size={18} />
    </button>
  );
}

function CaseCard({ name, role, problem, brand, tag }: {
  name: string; role: string; problem: string; brand: string; tag: string;
}) {
  return (
    <div style={{
      borderRadius: '16px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: '24px 24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '280px',
    }}>
      {/* TOP */}
      <div>
        {/* Tag + icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px', padding: '4px 12px',
          }}>
            <span style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{tag}</span>
          </div>
          <TrendingUp size={13} color="rgba(255,255,255,0.25)" />
        </div>

        {/* Name */}
        <p style={{ margin: '0 0 5px', fontSize: '18px', fontWeight: 800, color: 'white', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{name}</p>

        {/* Role */}
        <p style={{ margin: '0 0 22px', fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{role}</p>

        {/* Problem label */}
        <p style={{ margin: '0 0 8px', fontSize: '9px', fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Problem Statement</p>

        {/* Problem text */}
        <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 400, lineHeight: 1.65 }}>{problem}</p>
      </div>

      {/* BOTTOM */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
        <span style={{
          fontSize: '16px', fontStyle: 'italic', fontWeight: 600,
          color: 'rgba(255,255,255,0.2)',
          fontFamily: 'Georgia, "Times New Roman", serif',
          letterSpacing: '0.03em',
        }}>{brand}</span>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ArrowRight size={13} color="rgba(255,255,255,0.5)" />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section style={{
      background: '#08061A',
      padding: '90px 0',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle glow bottom-left */}
      <div style={{ position: 'absolute', bottom: '-200px', left: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '80px', alignItems: 'start' }}>

          {/* ── LEFT ── */}
          <div style={{ position: 'sticky', top: '80px' }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              background: 'rgba(124,58,237,0.18)',
              border: '1px solid rgba(124,58,237,0.35)',
              borderRadius: '999px', padding: '5px 14px', marginBottom: '20px',
            }}>
              <Sparkles size={10} color="#A78BFA" />
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#A78BFA', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Execution Proof</span>
            </div>

            {/* Title — exactly like screenshot */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>Real Case</div>
              <div style={{ fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: 900, color: '#7C3AED', fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1.05, fontFamily: 'Georgia, serif' }}>Studies</div>
              <div style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 800, color: 'rgba(255,255,255,0.25)', letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '2px' }}>Done by Founders</div>
            </div>

            {/* Description */}
            <p style={{ margin: '0 0 28px', fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, fontWeight: 400 }}>
              Real businesses. Real founders. Real growth challenges solved inside the Treqo ecosystem.
            </p>

            {/* CTA — pill shaped purple */}
            <Link href="/case-studies" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: '#7C3AED', color: 'white',
              borderRadius: '999px', padding: '13px 24px',
              fontSize: '11px', fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              textDecoration: 'none', marginBottom: '44px',
            }}>
              Explore More <ArrowRight size={13} />
            </Link>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '44px', paddingBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {[['12+', 'Case Studies'], ['₹500Cr+', 'Revenue Impacted'], ['40+', 'Partner Brands']].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '22px', fontWeight: 900, color: 'white', minWidth: '90px', letterSpacing: '-0.02em' }}>{val}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Nav arrows + dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <NavBtn cls="case-prev-btn" icon={ChevronLeft} />
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', margin: '0 4px' }}>
                {SLIDES.map((_, i) => (
                  <div key={i} style={{
                    width: i === 0 ? '22px' : '7px', height: '7px',
                    borderRadius: '999px',
                    background: i === 0 ? '#7C3AED' : 'rgba(255,255,255,0.18)',
                  }} />
                ))}
              </div>
              <NavBtn cls="case-next-btn" icon={ChevronRight} />
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={16}
              navigation={{ nextEl: '.case-next-btn', prevEl: '.case-prev-btn' }}
            >
              {SLIDES.map((group, i) => (
                <SwiperSlide key={i}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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