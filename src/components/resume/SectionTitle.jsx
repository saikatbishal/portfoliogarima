import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <motion.div 
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      <div className="h-px grow bg-linear-to-r from-blue-500/50 to-transparent" />
    </motion.div>
  );
};

export default SectionTitle;