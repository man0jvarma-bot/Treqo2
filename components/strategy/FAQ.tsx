"use client";

import React, { useState } from "react";
import { Plus, Minus, Sparkles, HelpCircle, BookOpen, Rocket, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = {
  "TAC Suite": [
    { q: "What exactly is the TAC Suite?", a: "The TAC Suite is an elite ecosystem of 8 specialized modules designed to transform you into a full-stack growth operator. We bridge the gap between creative production and data-driven execution." },
    { q: "Is this for beginners or professionals?", a: "Both. Our curriculum is built on a Phase system. Phase 01 handles foundations, while Phase 04 focuses on boardroom-level pitching and placement with our 50+ industry partners." },
    { q: "What makes TAC different from other bootcamps?", a: "We don't teach theory; we run simulations. You work on real-world business challenges, use agency-grade tools, and pitch directly to founders." }
  ],
  "Curriculum": [
    { q: "Which tools will I master in the program?", a: "You will master the full industry stack: Premiere Pro, After Effects, Figma, Meta & Google Ads, and GA4/Looker Studio for data intelligence." },
    { q: "How are the modules structured?", a: "Each module is Execution-First. You spend 20% of your time on frameworks and 80% on building high-signal assets and live campaigns." },
    { q: "Can I choose specific modules?", a: "The suite is designed as a compounding system, but we offer specialized tracks depending on your career goal (Creative focus vs. Growth focus)." }
  ],
  "Marketing": [
    { q: "Does the program cover AI in Marketing?", a: "Absolutely. We integrate AI-powered workflows across the entire suite—from LLMs for copywriting to predictive analytics for scaling ad budgets." },
    { q: "What is the scope of a Growth Strategist?", a: "Growth Strategists manage the entire lifecycle: mapping customer journeys, reducing CAC, and building Go-To-Market frameworks." }
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("TAC Suite");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-[5%] font-sans text-slate-900 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6"
          >
            <Sparkles size={14} className="text-purple-600" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-purple-700">Support Center</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl tracking-tight leading-tight font-black uppercase text-slate-900">
            Curriculum <span className="font-serif italic font-light text-purple-600 lowercase">FAQ</span>
          </h2>
        </div>

        {/* FIXED HEIGHT CONTAINER (Prevents layout jumping) */}
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] gap-12 items-start h-[650px]">
          
          {/* LEFT SIDEBAR NAVIGATION */}
          <div className="w-full shrink-0">
            <div className="flex flex-col gap-2 p-3 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null); 
                  }}
                  className={`text-left px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-between group ${
                    activeTab === tab 
                      ? "text-white bg-purple-700 shadow-lg shadow-purple-900/20 translate-x-1" 
                      : "text-slate-400 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {tab}
                  <HelpCircle size={14} className={activeTab === tab ? "opacity-100" : "opacity-0 group-hover:opacity-100"} />
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-3xl bg-purple-50 border border-purple-100 hidden lg:block">
              <p className="text-[10px] font-black text-purple-700 uppercase tracking-widest mb-2">Need more help?</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Talk to our admissions team about specific module requirements.</p>
            </div>
          </div>

          {/* RIGHT CONTENT AREA - SCROLLABLE INTERNAL WINDOW */}
          <div className="flex-1 w-full h-full overflow-y-auto pr-4 custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {faqData[activeTab as keyof typeof faqData].map((item, idx) => (
                  <AccordionItem 
                    key={`${activeTab}-${idx}`}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === idx}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CUSTOM SCROLLBAR CSS */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d8b4fe;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c3aed;
        }
      `}</style>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }: any) {
  return (
    <div 
      className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        isOpen 
        ? "border-purple-200 bg-purple-50/30 shadow-xl shadow-purple-900/5" 
        : "border-slate-100 bg-white hover:border-purple-100 shadow-sm"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-7 md:p-8 text-left outline-none group"
      >
        <span className={`font-bold text-lg md:text-xl leading-snug pr-6 transition-colors ${
          isOpen ? "text-purple-700" : "text-slate-800 group-hover:text-purple-600"
        }`}>
          {question}
        </span>
        <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
          isOpen ? "bg-purple-700 text-white rotate-180" : "bg-slate-100 text-slate-400"
        }`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-10">
            <div className="pt-6 border-t border-purple-100 text-slate-500 text-base md:text-lg leading-relaxed font-medium">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}