import React from "react";
import { motion } from "framer-motion";
import AnimatedWrapper from "./AnimatedWrapper";

const ExperienceCard = ({ job, index }) => {
  return (
    <AnimatedWrapper delay={index * 0.1} className="mb-6 last:mb-0">
      <motion.div
        whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.03)" }}
        className="relative p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-blue-500/30 transition-colors duration-300 shadow-lg group"
      >
        {/* Left Accent Border */}
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-linear-to-b from-blue-500 to-purple-600 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pl-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {job.company}
            </h3>
            <p className="text-slate-400 font-medium">
              {job.title} <span className="text-slate-600 px-2">|</span>{" "}
              {job.location}
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-200 bg-blue-900/30 border border-blue-500/20 rounded-full">
              {job.period}
            </span>
          </div>
        </div>

        <ul className="space-y-2 pl-4">
          {job.responsibilities.map((resp, i) => (
            <li
              key={i}
              className="text-slate-300 text-sm leading-relaxed flex items-start gap-2"
            >
              <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-blue-500 transition-colors" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatedWrapper>
  );
};

export default ExperienceCard;
