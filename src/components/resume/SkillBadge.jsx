import React from "react";
import { motion } from "framer-motion";
const SkillBadge = ({ skill, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
      whileHover={{
        y: -5,
        scale: 1.05,
        backgroundColor: "rgba(59, 130, 246, 0.15)",
        borderColor: "rgba(59, 130, 246, 0.5)",
      }}
      className="inline-block px-4 py-2 text-sm text-slate-300 bg-slate-800/50 border border-slate-700 rounded-xl cursor-default backdrop-blur-sm transition-colors duration-300"
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
