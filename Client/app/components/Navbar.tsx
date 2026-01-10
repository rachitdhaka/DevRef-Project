"use client";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Navbar = () => {
  const pathname = usePathname();
  const navlinks = [
    { name: "Components", href: "/Main" },
    { name: "Blogs", href: "/Blogs" },
  ];
  return (
    <div className="relative z-10  max-w-5xl mt-2 mx-auto    px-4 py-2 flex  justify-evenly items-center rounded-lg ">
      <Link href="/">
        <button className="font-semibold cursor-pointer">DevRef</button>
      </Link>
      <div className="flex gap-8">
        {navlinks.map((link, index) => (
          <Link key={index} href={link.href} className="relative">
            <motion.span
              className={`transition-colors ${
                pathname === link.href
                  ? "text-blue-600 p-3 scale-105  dark:text-blue-400 font-semibold"
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

      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};
