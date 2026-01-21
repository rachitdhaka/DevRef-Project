"use client";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { name: "Components", href: "/Main" },
    { name: "Blogs", href: "/Blogs" },
  ];

  return (
    <div className="relative z-50">
      {/* Main Navbar */}
      <div className="max-w-5xl mt-2 mx-auto px-4 py-2 flex justify-between md:justify-evenly items-center rounded-lg">
        <Link href="/">
          <button className="font-semibold cursor-pointer text-lg">
            DevRef
          </button>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navlinks.map((link, index) => (
            <Link key={index} href={link.href} className="relative">
              <motion.span
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-blue-600 p-3 scale-105 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {link.name}
              </motion.span>
              {pathname === link.href && (
                <motion.div
                  className="absolute inset-0 rounded-full -z-10"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b dark:border-neutral-800 shadow-lg"
          >
            <div className="flex flex-col px-4 py-2">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-2 border-b dark:border-neutral-800 last:border-b-0 transition-colors ${
                    pathname === link.href
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
