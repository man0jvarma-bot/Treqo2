"use client";

import Image from "next/image";

const logos = [
  { name: "Booking", src: "/logos/booking.svg" },
  { name: "BCG", src: "/logos/bcg.svg" },
  { name: "Coinbase", src: "/logos/coinbase.svg" },
  { name: "Colgate", src: "/logos/colgate.svg" },
  { name: "Databricks", src: "/logos/databricks.svg" },
  { name: "Dropbox", src: "/logos/dropbox.svg" },
  { name: "Vimeo", src: "/logos/vimeo.svg" },
  { name: "Intuit", src: "/logos/intuit.svg" },
  { name: "Lyft", src: "/logos/lyft.svg" },
  { name: "MasterClass", src: "/logos/masterclass.svg" },
  { name: "Palo Alto", src: "/logos/paloalto.svg" },
  { name: "Pernod Ricard", src: "/logos/pernod.svg" },
];

export function TrustedBySlider() {
  return (
    <section
      className="py-24 overflow-hidden relative"
      style={{ background: '#ecd7ff' }} // Updated to your natural flow color
    >
      {/* 1. TOP FLOW BLEED: Smoothes the transition from the previous section */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '100px', 
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)', 
        zIndex: 1 
      }} />

      {/* Subtle Blueprint Lines (Matching the brand detail) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.1 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #7C3AED 39px, #7C3AED 40px)' }} />
      </div>

      <div className="w-full px-[5%] relative z-10">
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p style={{ color: '#7C3AED', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800, marginBottom: '16px' }}>
            Global Recognition
          </p>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1A0B35', letterSpacing: '-0.02em', margin: 0 }}>
            Trusted by{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(to right, #7C3AED, #4F46E5)',
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
            }}>500+</span>{' '}
            of the world's top brands
          </h2>
        </div>

        <div className="space-y-12">
          {/* ROW 1 → RIGHT */}
          <div className="relative overflow-hidden">
            {/* Side Masks for smooth fading */}
            <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #E6D7F3, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #E6D7F3, transparent)' }} />
            
            <div className="flex w-max gap-20 animate-scroll-right">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row1-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #E6D7F3, transparent)' }} />
            <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #E6D7F3, transparent)' }} />
            
            <div className="flex w-max gap-20 animate-scroll-left">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row2-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 50s linear infinite; }
        .animate-scroll-right { animation: scroll-right 50s linear infinite; }
      `}</style>
    </section>
  );
}

function Logo({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="flex items-center justify-center min-w-[140px]"
      style={{ 
        opacity: 0.4, 
        transition: 'all 400ms ease', 
        filter: 'grayscale(1) brightness(0.2)' // Dark logos for light background
      }}
      onMouseEnter={e => { 
        (e.currentTarget as HTMLElement).style.opacity = '1'; 
        (e.currentTarget as HTMLElement).style.filter = 'grayscale(0) brightness(1)'; 
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
      }}
      onMouseLeave={e => { 
        (e.currentTarget as HTMLElement).style.opacity = '0.4'; 
        (e.currentTarget as HTMLElement).style.filter = 'grayscale(1) brightness(0.2)'; 
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      <Image src={logo.src} alt={logo.name} width={130} height={50} className="object-contain" />
    </div>
  );
}