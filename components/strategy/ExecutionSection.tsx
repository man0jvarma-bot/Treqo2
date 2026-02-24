"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, Globe, Search, Workflow, 
  Box, Code, Terminal, Layers, Sparkles 
} from "lucide-react";

const tools = [
  { name: "GA4", category: "Analytics", icon: <BarChart3 /> },
  { name: "Meta Ads", category: "Distribution", icon: <Globe /> },
  { name: "SEMrush", category: "Search", icon: <Search /> },
  { name: "Zapier", category: "Automation", icon: <Workflow /> },
  { name: "Webflow", category: "Execution", icon: <Box /> },
  { name: "Next.js", category: "Development", icon: <Code /> },
  { name: "Framer", category: "Motion", icon: <Layers /> },
  { name: "Cursor", category: "AI Ops", icon: <Terminal /> },
];

export function ToolStackSection() {
  return (
    <section className="relative py-32 bg-[#FBF8E4] overflow-hidden">
      {/* Continuity Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1D1D1D 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full px-[5%]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1D1D]/5 border border-[#1D1D1D]/10">
                <Sparkles className="w-3 h-3 text-[#1D1D1D]" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">Tech Infrastructure</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-[#1D1D1D] leading-tight tracking-tighter">
                The Execution <br />
                <span className="italic font-serif text-[#FFC62A]">Stack.</span>
              </h2>
            </div>
            <p className="text-[#1D1D1D]/60 text-lg lg:text-xl leading-relaxed max-w-lg">
              We don't just teach theory; we install the exact professional toolkit 
              used by top-tier revenue operators globally.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/40 backdrop-blur-xl border border-[#1D1D1D]/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-[#1D1D1D] overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                  <div className="w-12 h-12 rounded-2xl bg-[#1D1D1D]/5 flex items-center justify-center text-[#1D1D1D] group-hover:bg-[#FFC62A] group-hover:text-[#1D1D1D] transition-all duration-500">
                    {tool.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#1D1D1D]/40 group-hover:text-[#FFC62A]/60 transition-colors mb-1">
                      {tool.category}
                    </p>
                    <h4 className="text-xl font-black text-[#1D1D1D] group-hover:text-white uppercase tracking-tighter transition-colors">
                      {tool.name}
                    </h4>
                  </div>
                </div>
                {/* Decorative background number */}
                <span className="absolute -bottom-4 -right-2 text-7xl font-black text-[#1D1D1D]/5 group-hover:text-white/5 transition-colors pointer-events-none">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}