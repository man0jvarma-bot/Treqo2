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
    <section className="py-24 bg-[#FBF8E4] overflow-hidden relative">
      
      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-[5%] right-[5%] h-px bg-[#1D1D1D]/5" />

      <div className="w-full px-[5%]">
        
        {/* Heading */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="text-[#1D1D1D]/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Global Recognition
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-[#1D1D1D] tracking-tight">
            Trusted by <span className="italic font-serif text-[#FFC62A]">500+</span> of the world’s top brands
          </h2>
        </div>

        <div className="space-y-12">

          {/* ROW 1 → RIGHT */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10" />

            <div className="flex w-max gap-20 animate-scroll-right">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row1-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* ROW 2 → LEFT */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10" />

            <div className="flex w-max gap-20 animate-scroll-left">
              {[...logos, ...logos].map((logo, index) => (
                <Logo key={`row2-${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Logo({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="
      flex items-center justify-center
      opacity-30 grayscale
      transition-all duration-500
      hover:opacity-100 hover:grayscale-0
      min-w-[130px]
    ">
      <Image
        src={logo.src}
        alt={logo.name}
        width={130}
        height={50}
        className="object-contain"
      />
    </div>
  );
}