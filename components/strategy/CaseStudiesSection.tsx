"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ================= CASE DATA ================= */

const CASES = [
  {
    name: "Utkarsh Gupta",
    role: "Founder, Comet",
    problem: "Scale operations on Ajio & Myntra while preserving Comet’s premium brand identity.",
    brand: "COMET",
    image: "/images/home-page.jpg",
  },
  {
    name: "Anil Goteti",
    role: "Founder, Scapia",
    problem: "Boost engagement, strengthen loyalty, and build a memorable travel-rewards brand.",
    brand: "SCAPIA",
    image: "/images/home-page.jpg",
  },
  {
    name: "Vibha Harish",
    role: "Founder, Cosmix Wellness",
    problem: "Increase TOFU awareness and virality through organic channels.",
    brand: "COSMIX",
    image: "/images/home-page.jpg",
  },
  {
    name: "Shamika Haldipurkar",
    role: "Founder, d’you",
    problem: "Launch product portfolio across quick-commerce platforms.",
    brand: "D’YOU",
    image: "/images/home-page.jpg",
  },
  {
    name: "Varun Khaitan",
    role: "Co-Founder, Urban Company",
    problem: "Improve NPS of Cleaning vertical crossing ₹80Cr ARR.",
    brand: "URBAN COMPANY",
    image: "/images/home-page.jpg",
  },
  {
    name: "Neha Agarwal",
    role: "Founder, Nua",
    problem: "Strengthen customer retention and improve LTV.",
    brand: "NUA",
    image: "/images/home-page.jpg",
  },
];

/* ================= SLIDES LOGIC (RETAINED) ================= */

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const SLIDES = chunkArray(CASES, 4);

/* ================= SECTION ================= */

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-[#1D1D1D] text-[#FBF8E4] py-28 overflow-hidden">

      {/* Brand Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, rgba(255,198,42,0.25) 0px, rgba(255,198,42,0.25) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Gold Glow */}
      <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] bg-[#FFC62A]/15 blur-[160px] pointer-events-none" />

      {/* 5% Padding */}
      <div className="relative w-full px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_2fr] gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tighter">
              Real Case Studies
              <br />
              <span className="italic font-serif text-[#FFC62A] relative">
                Done by Founders
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-[#FBF8E4]/60 text-lg leading-relaxed mb-8">
              Real businesses. Real founders. Real growth challenges solved
              inside the TAC ecosystem.
            </p>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 rounded-full bg-[#FFC62A] text-[#1D1D1D] px-8 py-4 text-xs font-black tracking-widest hover:bg-white hover:scale-105 transition-all"
            >
              EXPLORE MORE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT SLIDER (FUNCTIONALITY RETAINED) */}
          <div className="relative w-full overflow-hidden">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
            >
              {SLIDES.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-2 gap-6">
                    {group.map((item, i) => (
                      <CaseCard key={i} {...item} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAVIGATION STYLE UPDATED */}
            <div className="flex justify-end gap-4 mt-10">
              <button className="prev-btn w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#FFC62A] hover:text-[#1D1D1D] transition-all">
                <ChevronLeft />
              </button>
              <button className="next-btn w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#FFC62A] hover:text-[#1D1D1D] transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENT CARD ================= */

interface CaseCardProps {
  name: string;
  role: string;
  problem: string;
  brand: string;
  image: string;
}

function CaseCard({
  name,
  role,
  problem,
  brand,
  image,
}: CaseCardProps) {
  return (
    <div className="relative h-[320px] rounded-[32px] overflow-hidden bg-white/[0.03] border border-white/10 shadow-2xl flex group transition-all duration-500 hover:border-[#FFC62A]/30">

      <div className="w-[62%] p-8 flex flex-col justify-between z-10">
        <div>
          <p className="text-xl font-black text-[#FBF8E4] tracking-tight">{name}</p>
          <p className="text-[#FFC62A] text-[10px] font-bold uppercase tracking-widest mb-6">{role}</p>

          <p className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-3">
            Problem Statement
          </p>

          <p className="text-sm text-[#FBF8E4]/60 leading-relaxed line-clamp-4">
            {problem}
          </p>
        </div>

        <p className="text-[#FFC62A] font-black italic font-serif text-lg">
          {brand}
        </p>
      </div>

      <div className="relative w-[38%] h-full">
        <Image src={image} alt={name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1D1D1D]/90 to-[#1D1D1D]" />
      </div>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const CASES = [
//   {
//     name: "Utkarsh Gupta",
//     role: "Founder, Comet",
//     problem:
//       "Scale operations on Ajio & Myntra while preserving Comet’s premium brand identity.",
//     brand: "COMET",
//     image: "/founders/utkarsh.jpg",
//   },
//   {
//     name: "Anil Goteti",
//     role: "Founder, Scapia",
//     problem:
//       "Boost engagement, strengthen loyalty, and build a memorable travel-rewards brand.",
//     brand: "SCAPIA",
//     image: "/founders/anil.jpg",
//   },
//   {
//     name: "Vibha Harish",
//     role: "Founder, Cosmix Wellness",
//     problem:
//       "Increase TOFU awareness and virality through organic channels and partnerships.",
//     brand: "COSMIX",
//     image: "/founders/vibha.jpg",
//   },
//   {
//     name: "Shamika Haldipurkar",
//     role: "Founder, d’you",
//     problem:
//       "Launch D’you’s product portfolio across quick-commerce platforms.",
//     brand: "d’you",
//     image: "/founders/shamika.jpg",
//   },
//   {
//     name: "Varun Khaitan",
//     role: "Co-Founder, Urban Company",
//     problem:
//       "Improve NPS of the Cleaning vertical crossing ₹80Cr ARR.",
//     brand: "Urban Company",
//     image: "/founders/varun.jpg",
//   },
//   {
//     name: "Vivek Sinha",
//     role: "Founder, Emversity",
//     problem:
//       "Reduce CAC below 15% using scalable, low-cost growth channels.",
//     brand: "EMVERSITY",
//     image: "/founders/vivek.jpg",
//   },
// ];

// export default function CaseStudiesSection() {
//   return (
//     <section className="relative bg-[#07050f] text-white py-28 overflow-hidden">

//       {/* BACKGROUND PATTERN */}
//       <div className="absolute inset-0 wave-bg opacity-60" />

//       {/* PURPLE GLOWS */}
//       <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[160px]" />
//       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[160px]" />

//       <div className="relative max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="flex items-end justify-between mb-14">
//           <div className="max-w-md">
//             <h2 className="text-3xl font-semibold mb-4">
//               Real Case Studies
//               <br />
//               <span className="text-purple-400">Done by Founders</span>
//             </h2>
//             <p className="text-white/60 text-sm">
//               Real businesses. Real founders. Real growth challenges solved
//               inside the Treqo ecosystem.
//             </p>
//           </div>

//           <button className="flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-500">
//             Explore More
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* SLIDER */}
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           navigation={{
//             nextEl: ".next-btn",
//             prevEl: ".prev-btn",
//           }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {CASES.map((item, i) => (
//             <SwiperSlide key={i}>
//               <CaseCard {...item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* NAV BUTTONS */}
//         <div className="flex justify-center gap-4 mt-10">
//           <button className="prev-btn w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40">
//             <ChevronLeft />
//           </button>
//           <button className="next-btn w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center hover:bg-purple-500/40">
//             <ChevronRight />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// function CaseCard({
//   name,
//   role,
//   problem,
//   brand,
//   image,
// }: any) {
//   return (
//     <div className="relative rounded-[28px] overflow-hidden bg-[#120a24] h-[320px]">

//       {/* TEXT */}
//       <div className="p-6 pr-24 h-full flex flex-col justify-between">
//         <div>
//           <p className="text-lg font-semibold">{name}</p>
//           <p className="text-purple-300 text-sm mb-4">{role}</p>

//           <p className="text-xs uppercase text-white/40 mb-2">
//             Problem Statement
//           </p>
//           <p className="text-sm text-white/70 leading-relaxed">
//             {problem}
//           </p>
//         </div>

//         <p className="text-purple-400 font-semibold tracking-wide">
//           {brand}
//         </p>
//       </div>

//       {/* IMAGE */}
//       <div className="absolute right-0 top-0 h-full w-[38%]">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#120a24]" />
//       </div>
//     </div>
//   );
// }
