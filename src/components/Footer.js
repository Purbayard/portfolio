"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-10 pb-5 bg-[var(--footer)] text-white overflow-hidden">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 mb-8 text-left md:w-1/3" data-aos="fade-right" data-aos-delay="100">
            <h2 className="mb-5 text-4xl font-bold text-white">PURBAYA</h2>
            <p className="text-white/80">purbayaardiansyah63@gmail.com</p>
            <p className="text-white/80">Sumedang</p>
          </div>
          <div className="w-full px-4 mb-8 text-left md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <h3 className="mb-5 text-xl font-semibold text-white">Connect with me</h3>
            <ul className="text-white/70">
              <li>
                <a href="https://github.com/Purbayard" target="_blank" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/purbaya-ardiansyah" target="_blank" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/purbayard_/" target="_blank" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-8 text-left md:w-1/3" data-aos="fade-left" data-aos-delay="300">
            <h3 className="mb-5 text-xl font-semibold text-white">Tautan</h3>
            <ul className="text-white/70">
              <li>
                <a href="#hero" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#about" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">About Me</a>
              </li>
              <li>
                <a href="#education" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Education</a>
              </li>
              <li>
                <a href="#skills" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Skills</a>
              </li>
              <li>
                <a href="#certificates" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Certificate</a>
              </li>
              <li>
                <a href="#projects" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Projects</a>
              </li>
              <li>
                <a href="#contact" className="inline-block mb-3 text-base text-white/80 hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t dark:border-[var(--secondary)]">
          <div className="flex items-center justify-center mb-5" >
            <a
              href="https://github.com/Purbayard"
              target="_blank"
              className="flex items-center justify-center mr-3 border border-gray-300 rounded-full dark:border-gray-700 h-9 w-9 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/github.svg"
                  alt="GitHub"
                  fill
                  className="p-1 transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 ring-2 ring-gray-300 dark:ring-gray-700"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/purbaya-ardiansyah"
              target="_blank"
              className="flex items-center justify-center mr-3 border border-gray-300 rounded-full dark:border-gray-700 h-9 w-9 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/linkedin.svg"
                  alt="LinkedIn"
                  fill
                  className="p-1 transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 ring-2 ring-gray-300 dark:ring-gray-700"
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/purbayard_/"
              target="_blank"
              className="flex items-center justify-center mr-3 border border-gray-300 rounded-full dark:border-gray-700 h-9 w-9 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/img/ig.svg"
                  alt="Instagram"
                  fill
                  className="p-1 transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0 ring-2 ring-gray-300 dark:ring-gray-700"
                />
              </div>
            </a>
          </div>
          <p className="text-base font-bold text-center text-white/60">
            {currentYear} <span className="text-white">&copy; </span>Purbaya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;