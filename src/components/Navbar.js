// src/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "dark:bg-[var(--background)] shadow-xl" : "bg-transparent shadow-xl"}`}>
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-xl font-bold transition-colors duration-300 text-[var(--foreground)] dark:text-[var(--foreground)]">
              PURBAYA
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={toggleTheme} className="mr-4 text-gray-500 dark:text-[var(--foreground)]/70 hover:text-gray-700 dark:hover:text-[var(--foreground)]" aria-label="Toggle theme">
              {mounted && theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-gray-500 bg-white rounded-md dark:bg-[var(--background)] dark:text-[var(--foreground)]/70 hover:text-gray-700 dark:hover:text-[var(--foreground)] focus:outline-none" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-medium text-gray-700 dark:text-[var(--foreground)]/90 hover:text-gray-900 dark:hover:text-[var(--foreground)]">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="items-center justify-end flex-1 hidden md:flex">
            <button onClick={toggleTheme} className="ml-6 text-gray-500 dark:text-[var(--foreground)]/70 hover:text-gray-700 dark:hover:text-[var(--foreground)]" aria-label="Toggle theme">
              {mounted && theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Fullscreen */}
      <div className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />
      <div className={`fixed inset-y-0 left-0 z-50 w-1/2 bg-[var(--background)] dark:bg-[var(--background)] bg-opacity-100 shadow-xl transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-[var(--foreground)]">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 px-4 py-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={toggleMenu} className="block py-3 border-b text-base font-medium text-gray-700 dark:text-[var(--foreground)]/90 dark:border-gray-700">
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="block w-full text-left py-3 border-b text-base font-medium text-gray-700 dark:text-[var(--foreground)]/90 dark:border-gray-700">
            {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
