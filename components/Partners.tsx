"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from "framer-motion";
import { wrap } from "@motionone/utils";

const topLogos = [
  { name: "Facebook", src: "/partners/amazon.png" },
  { name: "Gartner", src: "/partners/amazon.png" },
  { name: "Leadsquared", src: "/partners/amazon.png" },
  { name: "Druva", src: "/partners/amazon.png" },
  { name: "Amazon", src: "/partners/amazon.png" },
  { name: "SPRY", src: "/partners/amazon.png" },
  { name: "LambdaTest", src: "/partners/amazon.png" },
];

const bottomLogos = [
  { name: "Shiprocket", src: "/partners/amazon.png" },
  { name: "VWO", src: "/partners/amazon.png" },
  { name: "Zuddl", src: "/partners/amazon.png" },
  { name: "Pee Safe", src: "/partners/amazon.png" },
  { name: "Bummer", src: "/partners/amazon.png" },
  { name: "Ridash", src: "/partners/amazon.png" },
  { name: "B3T", src: "/partners/amazon.png" },
];

interface VelocityLogosProps {
  logos: { name: string; src: string }[];
  baseVelocity: number;
}

function VelocityRow({ logos, baseVelocity = 100 }: VelocityLogosProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap flex-nowrap">
      <motion.div className="flex gap-4 md:gap-12 py-4" style={{ x }}>
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center w-[140px] md:w-[220px] h-16 md:h-20 relative transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 shrink-0">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              sizes="220px"
              className="object-contain px-4"
            />
          </div>
        ))}
      </motion.div>
      <BlurEdges />
    </div>
  );
}

export default function PartneredCompanies() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Soft Purple Glow in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-[5%] mb-12 text-center flex flex-col items-center">
        <span className="mb-4 text-purple-600 font-bold tracking-[0.4em] uppercase text-[10px]">
          Industrial Footprint
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
          Partnered <br />
          <span className="font-serif italic font-light text-purple-700 lowercase">Companies</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
          Our mentors bring real-world experience from the most respected global brands.
        </p>
      </div>

      <div className="relative w-full px-[5%] space-y-12 md:space-y-4">
        <VelocityRow logos={topLogos} baseVelocity={1.5} />
        <VelocityRow logos={bottomLogos} baseVelocity={-1.5} />
      </div>
    </section>
  );
}

function BlurEdges() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[15%] bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[15%] bg-gradient-to-l from-white via-white/80 to-transparent z-20" />
    </>
  );
}