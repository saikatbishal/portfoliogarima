import React from "react";
import { motion } from "framer-motion";

// Standardizes the "fade up" animation used across the resume
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1], // Custom bezier for premium feel
      delay: delay 
    },
  }),
};

const AnimatedWrapper = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;