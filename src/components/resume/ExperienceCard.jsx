import React from "react";
import { motion } from "framer-motion";
import AnimatedWrapper from "./AnimatedWrapper";

const ExperienceCard = ({ job, index }) => {
  return (
    <AnimatedWrapper delay={index * 0.1} className="mb-12 last:mb-0">
      <motion.div
        whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.03)" }}
        className="relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-blue-500/30 transition-colors duration-300 shadow-lg group"
      >
        {/* Left Accent Border */}
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-linear-to-b from-blue-500 to-purple-600 rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pl-4 text-left">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors text-left mb-2">
              {job.company}
            </h3>
            <p className="text-slate-400 font-medium text-left text-lg">
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

        <ul className="space-y-6 pl-4 text-left">
          {job.responsibilities.map((resp, i) => (
            <li
              key={i}
              className="text-slate-300 text-sm leading-loose tracking-wide flex gap-2 text-left"
            >
              <span className="mt-[7px] mr-[4px] w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-blue-500 transition-colors" />
              <span className="text-left text-lg tracking-wide">{resp}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatedWrapper>
  );
};

export default ExperienceCard;
