import React from 'react';
import Image from 'next/image';
import Section from '../Section';

const Hero = () => {
  return (
    <Section id="hero" className="py-36 dark:bg-[var(--secondary)]">
      <div className="flex flex-col items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
        <div className="mb-10 text-center md:w-1/2 md:text-left md:mb-0" data-aos="fade-right" data-aos-delay="100">
          <h1 className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl">
            Hi, I&apos;m <span className="dark:text-blue-600">Purbaya Ardiansyah</span>
          </h1>
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center px-6 py-3 text-center text-white transition-colors rounded-md hover:bg-green-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2" data-aos="fade-left" data-aos-delay="200">
          <div className="relative w-64 h-64 overflow-hidden border-4 rounded-full md:w-80 md:h-80 dark:border-blue-600">
            <Image
              src="/img/profil.png"
              alt="Profile"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;