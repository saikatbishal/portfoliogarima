import React from "react";
import { motion } from "framer-motion";
import LinkedIn from "../../assets/LinkedIn";
import Gmail from "../../assets/Gmail";
import Phone from "../../assets/Phone";
const Header = ({ personal }) => {
  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText(personal.phone);
      // Optional: You could add a toast notification here
      console.log("Phone number copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy phone number: ", err);
    }
  };

  return (
    <header className="relative flex flex-col md:flex-row items-start gap-8 mb-12 px-4 py-8 sm:px-6 lg:px-8 w-full">
      {/* Profile Image with Glow Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000"></div>
        <img
          src={personal.image}
          alt={personal.name}
          className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-900 shadow-xl"
        />
      </motion.div>

      {/* Text Content */}
      <div className="flex-1 text-left space-y-3">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-400 font-medium tracking-wide"
        >
          {personal.title}
        </motion.p>

        {/* Contact Links with Micro-interactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-start items-center gap-4 mt-4 text-slate-300 text-sm"
        >
          {/* <ContactItem
            href={`mailto:${personal.email}`}
            label={personal.email}
          /> */}
          <a href={`mailto:${personal.email}`} label={personal.email}>
            <Gmail />
          </a>
          <a href={personal.linkedin} target="_blank">
            <LinkedIn />
          </a>

          <span
            className="cursor-pointer hover:text-blue-300 transition-colors flex items-center gap-2"
            onClick={handlePhoneClick}
            title="Click to copy phone number"
          >
            <Phone />
          </span>
        </motion.div>
      </div>
    </header>
  );
};

// Helper component for links
const ContactItem = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="relative group overflow-hidden pb-0.5"
  >
    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
      {label}
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
  </a>
);

export default Header;
