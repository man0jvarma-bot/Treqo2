"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, HelpCircle, Award, NotebookText } from "lucide-react";

const features = [
  { id: 1, title: "Mentorship", icon: <Users size={32} strokeWidth={1.5} /> },
  { id: 2, title: "Personal Projects", icon: <Lightbulb size={32} strokeWidth={1.5} /> },
  { id: 3, title: "Assignment & Quiz", icon: <HelpCircle size={32} strokeWidth={1.5} /> },
  { id: 4, title: "Certificates", icon: <Award size={32} strokeWidth={1.5} /> },
  { id: 5, title: "Detailed Notes", icon: <NotebookText size={32} strokeWidth={1.5} /> },
];

const TacFeatures = () => {
  return (
    <section className="py-20 px-[5%] bg-[#1D1D1D] text-white">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
          Why Choose <br />
          <span className="text-[#FFC62A] font-serif italic font-medium">
            TAC
          </span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Build dynamic web applications from scratch with expert guidance and real-world projects.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col items-center justify-center
                       w-[160px] h-[160px]
                       bg-[#2A2A2A] rounded-xl
                       border border-white/10
                       transition-all duration-300
                       hover:bg-[#365c47]
                       hover:border-[#FFC62A]/40
                       cursor-pointer"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-[#FFC62A]/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />

            <div className="text-[#FFC62A] mb-3 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3 className="text-sm font-semibold text-center px-3">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default TacFeatures;