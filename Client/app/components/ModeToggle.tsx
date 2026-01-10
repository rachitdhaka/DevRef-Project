"use client";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun } from "@/public/svg/Sun";
import { Moon } from "@/public/svg/Moon";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer overflow-hidden relative w-10 h-10"
    >
            
     
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? 0 : -40, opacity: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon />
      </motion.div>
     
     
      <motion.div
        initial={false}
        animate={{ y: theme === "dark" ? 40 : 0, opacity: theme === "dark" ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun />
      </motion.div>
    
    </button>
  );
};
