"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CASES = [
  {
    name: "Utkarsh Gupta",
    role: "Founder, Comet",
    problem:
      "Scale operations on Ajio & Myntra while preserving Comet’s premium brand identity.",
    brand: "COMET",
    image: "/images/home-page.jpg",
  },
  {
    name: "Anil Goteti",
    role: "Founder, Scapia",
    problem:
      "Boost engagement, strengthen loyalty, and build a memorable travel-rewards brand.",
    brand: "SCAPIA",
    image: "/images/home-page.jpg",
  },
  {
    name: "Vibha Harish",
    role: "Founder, Cosmix Wellness",
    problem:
      "Increase TOFU awareness and virality through organic channels and partnerships.",
    brand: "COSMIX",
    image: "/images/home-page.jpg",
  },
  {
    name: "Shamika Haldipurkar",
    role: "Founder, d’you",
    problem:
      "Launch D’you’s product portfolio across quick-commerce platforms.",
    brand: "D’YOU",
    image: "/images/home-page.jpg",
  },
  {
    name: "Varun Khaitan",
    role: "Co-Founder, Urban Company",
    problem:
      "Improve NPS of the Cleaning vertical crossing ₹80Cr ARR.",
    brand: "URBAN COMPANY",
    image: "/images/home-page.jpg",
  },
];

export default function ProjectsStudiesSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative py-28 overflow-hidden bg-[#1E1E1E] text-white">
      <div className="relative w-full px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_2fr] gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Real Case Studies
              <br />
              <span className="bg-gradient-to-r from-[#FFC62A] to-white bg-clip-text text-transparent">
                Done by Founders
              </span>
            </h2>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Real businesses. Real founders. Real growth challenges solved
              inside the Treqo ecosystem.
            </p>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 rounded-full bg-[#FFC62A] text-[#1E1E1E] px-6 py-3 text-sm font-medium hover:bg-[#e6b320] transition"
            >
              Explore More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full min-w-0">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1.15}
              spaceBetween={24}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              className="w-full overflow-visible"
            >
              {CASES.map((item, index) => (
                <SwiperSlide key={index} className="pb-16">
                  <CaseCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Controls */}
            <div className="absolute right-0 bottom-0 flex gap-3 z-20">
              <button
                ref={prevRef}
                className="p-3 rounded-full bg-[#2A2A2A] hover:bg-[#333] transition"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                ref={nextRef}
                className="p-3 rounded-full bg-[#2A2A2A] hover:bg-[#333] transition"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function CaseCard({
  name,
  role,
  problem,
  brand,
  image,
}: {
  name: string;
  role: string;
  problem: string;
  brand: string;
  image: string;
}) {
  return (
    <div className="relative w-full h-[320px] rounded-[26px] overflow-hidden bg-[#252525] border border-white/10 shadow-xl flex">
      <div className="w-[62%] p-6 flex flex-col justify-between z-10">
        <div>
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-[#FFC62A] text-sm mb-4">{role}</p>

          <p className="text-xs uppercase text-white/40 mb-2">
            Problem Statement
          </p>

          <p className="text-sm text-white/70 leading-relaxed">
            {problem}
          </p>
        </div>

        <p className="text-[#FFC62A] font-semibold tracking-wide">
          {brand}
        </p>
      </div>

      <div className="relative w-[38%] h-full">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#252525]/80 to-[#252525]" />
      </div>
    </div>
  );
}
