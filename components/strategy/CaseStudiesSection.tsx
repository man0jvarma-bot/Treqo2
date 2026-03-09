"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ================= EXPANDED CASE DATA ================= */

const CASES = [
  { name: "Utkarsh Gupta", role: "Founder, Comet", problem: "Scale operations on Ajio & Myntra while preserving brand identity.", brand: "COMET", image: "/images/home-page.jpg" },
  { name: "Anil Goteti", role: "Founder, Scapia", problem: "Boost engagement, strengthen loyalty, and build a travel-rewards brand.", brand: "SCAPIA", image: "/images/home-page.jpg" },
  { name: "Vibha Harish", role: "Founder, Cosmix", problem: "Increase TOFU awareness and virality through organic channels.", brand: "COSMIX", image: "/images/home-page.jpg" },
  { name: "Shamika Haldipurkar", role: "Founder, d’you", problem: "Launch product portfolio across quick-commerce platforms.", brand: "D’YOU", image: "/images/home-page.jpg" },
  { name: "Varun Khaitan", role: "Co-Founder, Urban Co", problem: "Improve NPS of Cleaning vertical crossing ₹80Cr ARR.", brand: "URBAN COMPANY", image: "/images/home-page.jpg" },
  { name: "Neha Agarwal", role: "Founder, Nua", problem: "Strengthen customer retention and improve LTV.", brand: "NUA", image: "/images/home-page.jpg" },
  { name: "Deepak V.", role: "Founder, Bare", problem: "Optimize supply chain for D2C scaling while maintaining margins.", brand: "BARE ANATOMY", image: "/images/home-page.jpg" },
  { name: "Rishabh P.", role: "Founder, Mensa", problem: "Acquisition strategy and brand integration for global markets.", brand: "MENSA", image: "/images/home-page.jpg" },
  { name: "Aditi S.", role: "Founder, Heads up", problem: "Omnichannel expansion and customer journey mapping.", brand: "HEADS UP", image: "/images/home-page.jpg" },
  { name: "Rahul M.", role: "Founder, Wakefit", problem: "Performance marketing scaling for high-ticket home categories.", brand: "WAKEFIT", image: "/images/home-page.jpg" },
  { name: "Pooja D.", role: "Founder, MyGlamm", problem: "Conversion rate optimization for content-to-commerce funnels.", brand: "MYGLAMM", image: "/images/home-page.jpg" },
  { name: "Sahil B.", role: "Founder, Zivame", problem: "Retargeting frameworks and lifecycle marketing strategy.", brand: "ZIVAME", image: "/images/home-page.jpg" },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// Grouping into sets of 4 for a 2x2 grid per slide
const SLIDES = chunkArray(CASES, 4);

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-[#1A1A1A] text-[#F9F7E8] py-28 overflow-hidden font-sans">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "repeating-linear-gradient(-12deg, #365C47 0px, #365C47 1px, transparent 1px, transparent 14px)" }}
      />

      <div className="relative w-full px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 items-start">

          {/* LEFT HEADER */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-white/10 mb-8">
              <Sparkles className="w-3 h-3 text-[#FFC62A]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/40">TAC Suite Online</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-none mb-8 tracking-tighter text-white">
              Real Case <br />
              <span className="italic font-serif text-[#FFC62A] relative">
                Studies
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#365C47]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-sm">
              Real founders solving real growth challenges. Explore the execution proof behind the TAC Suite.
            </p>

            <Link href="/case-studies" className="inline-flex items-center gap-4 rounded-2xl bg-[#365C47] text-white px-8 py-5 text-xs font-bold tracking-widest hover:bg-[#FFC62A] hover:text-black transition-all shadow-xl shadow-[#365C47]/20">
              EXPLORE MORE <ArrowRight className="w-4 h-4" />
            </Link>

            {/* NAVIGATION BUTTONS */}
            <div className="flex gap-4 mt-12">
              <button className="case-prev-btn w-14 h-14 rounded-2xl bg-black border border-white/10 text-white flex items-center justify-center hover:bg-[#FFC62A] hover:text-black transition-all cursor-pointer z-20">
                <ChevronLeft size={24} />
              </button>
              <button className="case-next-btn w-14 h-14 rounded-2xl bg-black border border-white/10 text-white flex items-center justify-center hover:bg-[#FFC62A] hover:text-black transition-all cursor-pointer z-20">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full min-w-0">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              navigation={{
                nextEl: ".case-next-btn",
                prevEl: ".case-prev-btn",
              }}
              className="overflow-visible"
            >
              {SLIDES.map((group, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                    {group.map((item, i) => (
                      <CaseCard key={i} {...item} />
                    ))}
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

function CaseCard({ name, role, problem, brand, image }: any) {
  return (
    <div className="relative h-[320px] rounded-[32px] overflow-hidden bg-black/40 backdrop-blur-md border border-white/5 flex group transition-all duration-500 hover:border-[#365C47]/50">
      <div className="w-[65%] p-8 flex flex-col justify-between z-10">
        <div>
          <p className="text-xl font-bold text-white tracking-tight mb-1">{name}</p>
          <p className="text-[#365C47] text-[9px] font-bold uppercase tracking-widest mb-6">{role}</p>
          <p className="text-[9px] uppercase font-bold text-[#FFC62A] tracking-[0.2em] mb-3">The Challenge</p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 font-medium">{problem}</p>
        </div>
        <p className="text-white font-bold italic font-serif text-2xl opacity-60 group-hover:text-[#FFC62A] transition-colors">{brand}</p>
      </div>
      <div className="relative w-[35%] h-full shrink-0">
        <Image src={image} alt={name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-30 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1A1A1A]/95 to-[#1A1A1A]" />
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
