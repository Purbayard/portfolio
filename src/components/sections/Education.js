import React from 'react';
import Section from '../Section';
import { education } from '../../data/education';

const Education = () => {
  return (
    <Section id="education" title="Education" className="py-16 dark:bg-[var(--secondary)]">
      {/* Timeline container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline center line - visible only on desktop */}
        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full dark:bg-blue-600 hidden md:block" aria-hidden="true"></div>
        
        {/* Timeline left line - visible only on mobile */}
        <div className="absolute left-4 w-0.5 h-full dark:bg-blue-600 md:hidden" aria-hidden="true"></div>
        
        {education.map((item, index) => (
          <div 
            key={index}
            className={`relative mb-8 md:mb-12`} 
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} 
            data-aos-delay={300 + (index * 100)}
          >
            {/* Duration */}
            {/* dekstop */}
            <div className="items-center hidden mb-1 md:flex md:mb-2">
              <div className="absolute z-10 flex items-center justify-center w-8 h-8 -ml-4 text-xs font-bold text-white border-4 rounded-full dark:border-[var(--timeline)] left-1/2 dark:bg-blue-600">
              </div>
              <div className={`w-1/2 pr-8 text-right md:pr-12 ${index % 2 !== 0 && 'opacity-0'}`}>
                <div className="text-lg font-semibold text-blue-600 md:text-xl">
                  {index % 2 === 0 ? item.duration : ''}
                </div>
              </div>
              <div className={`w-1/2 pl-8 md:pl-12 ${index % 2 === 0 && 'opacity-0'}`}>
                <div className="text-lg font-semibold text-blue-600 md:text-xl">
                  {index % 2 !== 0 ? item.duration : ''}
                </div>
              </div>
            </div>
            {/* mobile */}
            <div className="flex items-center mb-1 md:hidden">
              <div className="absolute z-10 flex items-center justify-center w-6 h-6 -ml-3 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full dark:border-[var(--timeline)] left-4 dark:bg-blue-400"></div>
              <div className="w-full pl-10">
                <div className="text-base font-semibold text-blue-600">
                  {item.duration}
                </div>
              </div>
            </div>
            
            {/* institution and major */}
            {/* dekstop */}
            <div className="hidden md:flex">
              <div className={`w-1/2 pr-8 text-right md:pr-12 ${index % 2 !== 0 && 'opacity-0'}`}>
                {index % 2 === 0 && (
                  <div className="p-4 transition-all duration-300 transform bg-blue-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                    <h3 className="text-lg font-bold dark:text-white">{item.institution}</h3>
                    <p className="dark:text-gray-300">{item.major}</p>
                  </div>
                )}
              </div>
              <div className={`w-1/2 pl-8 md:pl-12 ${index % 2 === 0 && 'opacity-0'}`}>
                {index % 2 !== 0 && (
                  <div className="p-4 transition-all duration-200 transform bg-blue-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                    <h3 className="text-lg font-bold dark:text-white">{item.institution}</h3>
                    <p className="dark:text-gray-300">{item.major}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile */}
            <div className="flex mt-1 md:hidden">
              <div className="w-full pl-10">
                <div className="p-4 transition-all duration-300 transform bg-blue-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                  <h3 className="text-lg font-bold dark:text-white">{item.institution}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.major}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;