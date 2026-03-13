"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useVelocity, 
  useSpring, 
  useTransform, 
  useAnimationFrame, 
  useMotionValue 
} from "framer-motion";
import { wrap } from "@motionone/utils";

const videoTestimonials = [
  {
    id: "video1",
    name: "Isabella Rodriguez",
    role: "Head of Growth, Nexa SaaS",
    metric: "40% CTR Increase",
    thumbnail: "/testimonials/isabella.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video2",
    name: "Gabrielle Williams",
    role: "Creative Director, Flow State",
    metric: "High-End Production",
    thumbnail: "/testimonials/gabrielle.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video3",
    name: "Samantha Johnson",
    role: "CEO, Pillar Fintech",
    metric: "Scalable ROI",
    thumbnail: "/testimonials/samantha.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video4",
    name: "Victoria Thompson",
    role: "Product Lead, Global Core",
    metric: "Scalable Systems",
    thumbnail: "/testimonials/victoria.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video5",
    name: "John Peter",
    role: "Founder, Zenith Agency",
    metric: "3x Lead Quality",
    thumbnail: "/testimonials/john.jpg",
    videoId: "dQw4w9WgXcQ"
  }
];

export default function Testimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Velocity Logic
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

  const x = useTransform(baseX, (v) => `${wrap(-66.66, -33.33, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    if (activeVideoId) return;

    let moveBy = directionFactor.current * 0.5 * (delta / 1000); 

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden px-[5%]">
      {/* HEADER - CENTERED */}
      <div className="relative w-full z-10 mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
          Proven <br />
          <span className="font-serif italic font-light text-purple-600 lowercase">Impact</span>
        </h2>

        <p className="text-base md:text-lg text-slate-500 max-w-md leading-relaxed font-medium tracking-tight border-b-2 border-purple-100 pb-5">
          Visual proof from the practitioners <br />
          shaping digital excellence.
        </p>
      </div>

      {/* INFINITE VELOCITY MARQUEE */}
      <div className="relative overflow-hidden py-4">
        <motion.div className="flex w-max gap-8" style={{ x }}>
          {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((v, i) => (
            <VideoCard
              key={`${v.id}-${i}`}
              {...v}
              isHovered={activeVideoId === `${v.id}-${i}`}
              onMouseEnter={() => setActiveVideoId(`${v.id}-${i}`)}
              onMouseLeave={() => setActiveVideoId(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  id?: string;
  name: string;
  role: string;
  metric: string;
  thumbnail: string;
  videoId: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function VideoCard({ name, role, metric, thumbnail, videoId, isHovered, onMouseEnter, onMouseLeave }: VideoCardProps) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial="initial"
      whileHover="hover"
      className="
        group relative w-[300px] h-[400px] shrink-0 overflow-hidden 
        bg-slate-100 rounded-[40px] block
        transition-all duration-700 hover:-translate-y-2 cursor-pointer
        border border-slate-200/50 shadow-sm
      "
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black"
          >
            <iframe
              className="w-full h-full scale-[1.5]"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}&rel=0`}
              title={name}
              allow="autoplay; encrypted-media"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 transition-opacity duration-700 z-20 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
        />
        {/* Adjusted Gradient for Light Theme card readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-90" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div
          variants={{
            initial: { scale: 0.8, opacity: 0 },
            hover: { scale: 1, opacity: isHovered ? 0 : 1 }
          }}
          className="p-6 rounded-full bg-white text-purple-600 shadow-xl shadow-purple-900/20"
        >
          <Play fill="currentColor" size={32} />
        </motion.div>
      </div>

      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md border border-purple-100 text-purple-700 rounded-full text-[9px] font-black uppercase tracking-widest z-30">
        {metric}
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-30">
        <h3 className="text-xl font-black text-white tracking-tighter leading-tight">
          {name}
        </h3>
        <p className="text-[10px] text-purple-200 font-bold uppercase tracking-[0.2em] mt-2 border-l-2 border-purple-400 pl-4">
          {role}
        </p>
      </div>
    </motion.div>
  );
}