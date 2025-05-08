import React from 'react';
import Section from '../Section';

const About = () => {
  return (
    <Section id="about" className="py-28 dark:bg-[var(--primary)]">
      <div className="flex flex-col md:flex-row md:items-center md:gap-12">
        <div className="w-full mb-6 text-center md:w-1/3 md:mb-0" data-aos="fade-right" data-aos-delay="100">
          <h2 className="mb-2 text-3xl font-bold dark:text-[var(--title)] md:text-4xl">About Me</h2>
        </div>
        <div className="w-full md:w-2/3" data-aos="fade-left" data-aos-delay="200">
          <p className="text-lg text-justify">
            Saya lulusan diploma sistem informasi yang memiliki ketertarikan dalam <span className="dark:text-blue-600">pengembangan perangkat lunak dan analisis sistem</span>. 
            Saya memiliki pengalaman membuat <span className="dark:text-blue-600">dokumentasi perangkat lunak, melakukan analisis sistem dan pengembangan web</span>. 
            Memiliki kemampuan komunikasi dan kerja sama tim melalui pengalaman organisasi. Saya adalah individu yang analitis dan memiliki semangat untuk berkembang dalam bidang teknologi informasi.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;