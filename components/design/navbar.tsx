"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  "Home",
  "About",
  "Team",
  "Services",
  "Portfolio",
  "Testimonials",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 40);
      setHidden(current > lastScrollY.current && current > 120);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledStyles: React.CSSProperties = {
    maxWidth: "90%",
    margin: "12px auto 0",
    padding: "16px 40px",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(20px)",
    borderRadius: "9999px",
    border: "1px solid rgba(54,92,71,0.2)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 500ms ease-in-out",
  };

  const topStyles: React.CSSProperties = {
    maxWidth: "100%",
    padding: "30px 5%",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 500ms ease-in-out",
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 500ms ease-in-out",
        }}
      >
        <div style={scrolled ? scrolledStyles : topStyles}>
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Image
              src="/logo.png"
              alt="TAC"
              width={scrolled ? 130 : 155}
              height={52}
              priority
              style={{ transition: "all 500ms" }}
            />
          </div>

          {/* DESKTOP NAV */}
          <ul
            className="hidden md:flex items-center"
            style={{ gap: scrolled ? 40 : 44, listStyle: "none", margin: 0, padding: 0 }}
          >
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                style={{ position: "relative", cursor: "pointer" }}
                className="group"
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: active === item ? "16px" : scrolled ? "13px" : "15px",
                    fontStyle: active === item ? "italic" : "normal",
                    fontFamily: active === item ? "serif" : "inherit",
                    textTransform: active === item ? "capitalize" : "uppercase",
                    letterSpacing: active === item ? "normal" : "0.15em",
                    color: active === item ? "#FFC62A" : scrolled ? "#2F2F2F" : "#ffffff",
                    transition: "all 300ms",
                  }}
                >
                  {item}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute -bottom-1 left-1/2 h-[2px]
                    bg-[#FFC62A]
                    transition-all duration-300
                    ${
                      active === item
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
                    }
                  `}
                />
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            style={{
              fontSize: 26,
              color: scrolled ? "#2F2F2F" : "#ffffff",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 300ms",
            }}
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "#365c47",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 700ms ease-in-out",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 5%" }}>
          <Image
            src="/logo.png"
            alt="TAC"
            width={120}
            height={40}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <button
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: 28, color: "#FFC62A", background: "none", border: "none", cursor: "pointer" }}
          >
            ✕
          </button>
        </div>

        <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, marginTop: 48, listStyle: "none", padding: 0 }}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                fontSize: 22,
                fontWeight: 800,
                fontStyle: active === item ? "italic" : "normal",
                fontFamily: active === item ? "serif" : "inherit",
                textTransform: active === item ? "capitalize" : "uppercase",
                color: active === item ? "#FFC62A" : "#ffffff",
                cursor: "pointer",
                transition: "all 300ms",
              }}
              onClick={() => {
                setActive(item);
                setMobileOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
