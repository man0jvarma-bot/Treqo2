"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Terminal, ArrowRight, Zap } from "lucide-react";

const TERM_DATA = [
  {
    id: 1,
    title: "Marketing Foundations",
    subtitle: "Build the base",
    tools: ["Google Trends", "Canva", "ChatGPT", "Notion"],
    techniques: ["Market Research", "Customer Personas", "Brand Positioning", "Value Proposition"],
  },
  {
    id: 2,
    title: "Performance Marketing",
    subtitle: "Run paid campaigns",
    tools: ["Google Ads", "Meta Ads Manager", "Hotjar", "Triple Whale"],
    techniques: ["Paid Campaign Structuring", "Conversion Tracking", "A/B Testing", "ROAS Optimization"],
  },
  {
    id: 3,
    title: "Content & SEO",
    subtitle: "Own organic traffic",
    tools: ["Ahrefs", "SEMrush", "Surfer SEO", "Screaming Frog"],
    techniques: ["Keyword Research", "On-page SEO", "Content Calendars", "Topic Clustering"],
  },
  {
    id: 4,
    title: "Growth Funnels",
    subtitle: "Convert & retain",
    tools: ["Webflow", "Zapier", "Klaviyo", "Google Analytics"],
    techniques: ["Funnel Mapping", "Lead Magnets", "Email Automation", "Retention Loops"],
  },
  {
    id: 5,
    title: "Analytics & Optimization",
    subtitle: "Measure everything",
    tools: ["GA4", "Looker Studio", "Mixpanel", "Amplitude"],
    techniques: ["Cohort Analysis", "Event Tracking", "Funnel Analysis", "Data-led Decisions"],
  },
];

export default function TermToolsPage() {
  const [activeTerm, setActiveTerm] = useState(TERM_DATA[0]);

  return (
    <section
      style={{
        background: "#0B233F",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* GRID BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.1,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 5%",
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "24px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <Sparkles size={12} color="#7278ecff" />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Curriculum Stack
            </span>
          </div>

          <h2
            style={{
              margin: "0 auto 20px",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900,
                color: "white",
                background:
                  "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 35%, #60A5FA 36%, #60A5FA 100%)",
                backgroundClip: "text", // bug fix
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What You'll Learn
            </span>

            <span
              style={{
                display: "block",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900,
                color: "white",
                fontStyle: "italic",
              }}
            >
              Inside The System
            </span>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 500,
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Each term is engineered to build high-performance execution skills
            through a unified growth framework.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            borderRadius: "40px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
          }}
        >
          {/* LEFT PANEL */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                padding: "32px 32px 24px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "9px",
                  fontWeight: 800,
                  color: "#60A5FA",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em",
                }}
              >
                Program Timeline
              </p>
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                PHASES
              </h3>
            </div>

            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {TERM_DATA.map((term) => {
                const isActive = term.id === activeTerm.id;

                return (
                  <button
                    key={term.id}
                    onClick={() => setActiveTerm(term)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      width: "100%",
                      padding: "20px",
                      borderRadius: "20px",
                      textAlign: "left",
                      background: isActive ? "white" : "transparent",
                      border: `1px solid ${
                        isActive ? "white" : "transparent"
                      }`,
                      cursor: "pointer",
                      transition:
                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 900,
                        minWidth: "24px",
                        color: isActive ? "#0B233F" : "#60A5FA",
                        fontFamily: "serif",
                      }}
                    >
                      0{term.id}
                    </span>

                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "13px",
                          fontWeight: 800,
                          color: isActive
                            ? "#0B233F"
                            : "rgba(255,255,255,0.7)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {term.title}
                      </p>
                    </div>

                    {isActive && (
                      <Terminal size={14} color="#0B233F" opacity={0.5} />
                    )}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                padding: "24px",
                margin: "0 20px 20px",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#60A5FA",
                  color: "#0B233F",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  width: "100%",
                  justifyContent: "center",
                  boxShadow: "0 10px 20px rgba(96,165,250,0.2)",
                }}
              >
                Enroll Now <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={{ padding: "64px 72px" }}>
            <div style={{ marginBottom: "56px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#60A5FA",
                    boxShadow: "0 0 12px #60A5FA",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#60A5FA",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  Term 0{activeTerm.id}
                </span>
              </div>

              <h2
                style={{
                  margin: "0 0 8px",
                  fontSize: "48px",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {activeTerm.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 500,
                  fontStyle: "italic",
                }}
              >
                {activeTerm.subtitle}
              </p>
            </div>

            {/* TECH STACK */}
            <div style={{ marginBottom: "52px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <Zap size={14} color="#60A5FA" />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  Tech Stack
                </h3>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {activeTerm.tools.map((tool, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px 24px",
                      borderRadius: "14px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNIQUES */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <CheckCircle2 size={14} color="#60A5FA" />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  Core Methodology
                </h3>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(255,255,255,0.05)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {activeTerm.techniques.map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "24px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "10px",
                        flexShrink: 0,
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 900,
                        color: "#0B233F",
                      }}
                    >
                      {i + 1}
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}