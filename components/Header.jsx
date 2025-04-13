"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/constants/data";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Abdulhadi
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.hash}
                className={`relative transition ${
                  activeLink === link.name
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-0 top-full mt-1 h-0.5 w-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}