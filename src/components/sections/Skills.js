import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="py-28 dark:bg-[var(--primary)]">
      <div className="flex flex-wrap justify-center gap-8 mx-auto" data-aos="fade-up">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 50}>
            <div className="flex items-center justify-center w-20 h-20 p-5 mb-3 transition duration-300 rounded-full bg-[var(--input)] hover:scale-110">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;