"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Globe, Search, Workflow,
  Target, Mail, MessageSquare, Zap, Sparkles, ArrowUpRight
} from "lucide-react";

const marketingTools = [
  { name: "GA4", category: "Analytics", icon: <BarChart3 />, color: "#7C3AED", desc: "Track every user action, funnel drop-off, and conversion event in real time.", level: "Advanced" },
  { name: "Meta Ads", category: "Paid Media", icon: <Target />, color: "#4F46E5", desc: "Build, launch, and scale high-converting ad campaigns across Facebook & Instagram.", level: "Core" },
  { name: "SEMrush", category: "SEO Strategy", icon: <Search />, color: "#7C3AED", desc: "Dominate search rankings with keyword research, site audits, and competitor analysis.", level: "Core" },
  { name: "Zapier", category: "Automation", icon: <Workflow />, color: "#4F46E5", desc: "Automate repetitive workflows and connect your entire marketing stack without code.", level: "Intermediate" },
  { name: "Klaviyo", category: "Email Mkt", icon: <Mail />, color: "#7C3AED", desc: "Build lifecycle email flows that drive retention, upsells, and repeat purchases.", level: "Advanced" },
  { name: "GTM", category: "Tag Management", icon: <Zap />, color: "#4F46E5", desc: "Deploy tracking scripts, pixels, and conversion tags without touching the codebase.", level: "Intermediate" },
  { name: "Google Ads", category: "Distribution", icon: <Globe />, color: "#7C3AED", desc: "Run search, display, and shopping campaigns that capture high-intent buying traffic.", level: "Core" },
  { name: "Social Ops", category: "Engagement", icon: <MessageSquare />, color: "#4F46E5", desc: "Manage community, schedule content, and track social performance at scale.", level: "Intermediate" },
];

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  Core: { bg: 'rgba(34,197,94,0.1)', text: '#166534', border: 'rgba(34,197,94,0.2)' },
  Intermediate: { bg: 'rgba(234,179,8,0.1)', text: '#854d0e', border: 'rgba(234,179,8,0.2)' },
  Advanced: { bg: 'rgba(124,58,237,0.1)', text: '#5b21b6', border: 'rgba(124,58,237,0.2)' },
};

export function ToolStackSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{
      position: 'relative',
      background: '#E6D7F3', // Updated to your requested light purple
      padding: '120px 0',
      overflow: 'hidden',
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
    }}>

      {/* INVISIBLE GHOST GRID: Soft white lines for structure */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.4 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1300px', margin: '0 auto', padding: '0 5%' }}>

        {/* HEADER - CENTERED */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'white', border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: '999px', padding: '6px 16px', marginBottom: '24px',
            boxShadow: '0 4px 12px rgba(124,58,237,0.08)'
          }}>
            <Sparkles size={12} color="#7C3AED" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Curriculum Stack</span>
          </div>

          <h2 style={{ margin: '0 auto 20px', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
            <span style={{
              display: 'block', fontSize: 'clamp(42px, 5.5vw, 72px)', fontWeight: 900,
              background: 'linear-gradient(to right, #ffffff61 0%, #8f4eff 40%, #88a5ff 41%, #001340 100%);',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>Master The</span>
            <span style={{
              display: 'block', fontSize: 'clamp(42px, 5.5vw, 72px)', fontWeight: 900,
              color: '#0F172A', fontStyle: 'italic'
            }}>Marketing System.</span>
          </h2>

          <p style={{ maxWidth: '480px', fontSize: '16px', color: '#475569', fontWeight: 500, lineHeight: 1.7, margin: '0 auto' }}>
            Master the exact professional toolkit used by global growth operators to architect high-performance digital campaigns.
          </p>
        </div>

        {/* GRID STRUCTURE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {marketingTools.map((tool, i) => {
            const isHov = hovered === i;
            const lvl = levelColors[tool.level];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  borderRadius: '28px',
                  background: isHov ? 'white' : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${isHov ? 'white' : 'rgba(255,255,255,0.6)'}`,
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '240px',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: isHov ? 'translateY(-8px)' : 'none',
                  boxShadow: isHov ? '0 30px 60px rgba(124,58,237,0.15)' : '0 4px 12px rgba(0,0,0,0.02)',
                  cursor: 'default',
                  overflow: 'hidden',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: isHov ? tool.color : 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}>
                    {React.cloneElement(tool.icon as React.ReactElement<any>, {
                      size: 24,
                      color: isHov ? 'white' : tool.color,
                    })}
                  </div>
                  <ArrowUpRight size={18} color={isHov ? tool.color : '#94A3B8'} />
                </div>

                <div style={{ marginTop: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{tool.category}</span>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: lvl.text }} />
                    <span style={{ fontSize: '9px', fontWeight: 800, color: lvl.text, textTransform: 'uppercase' }}>{tool.level}</span>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>{tool.name}</h4>
                  <p style={{
                    margin: '12px 0 0', fontSize: '13.5px',
                    color: isHov ? '#475569' : 'rgba(71,85,105,0)',
                    maxHeight: isHov ? '85px' : '0', overflow: 'hidden',
                    transition: 'all 0.4s ease', lineHeight: 1.6
                  }}>{tool.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STRIP */}
        <div style={{
          marginTop: '64px',
          padding: '24px 40px',
          borderRadius: '24px',
          background: 'white',
          border: '1px solid rgba(255,255,255,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
          boxShadow: '0 10px 30px rgba(124,58,237,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 12px #22C55E' }} />
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#1E293B' }}>
              Enterprise standard tools included in your fee. Full access provided.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry Certified Stack</span>
            <Zap size={18} color="#EAB308" fill="#EAB308" />
          </div>
        </div>
      </div>
    </section>
  );
}