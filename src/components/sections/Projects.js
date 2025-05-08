import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <Section id="projects" title="Projects" className="py-10 dark:bg-[var(--primary)]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="overflow-hidden transition-shadow rounded-lg shadow-md dark:bg-[var(--card)] hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="relative h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "fill" }}
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold dark:text-white">{project.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 text-sm rounded-full dark:bg-blue-900 dark:text-white"
                    data-aos="zoom-in"
                    data-aos-delay={idx * 50 + 100}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center font-medium dark:text-white"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;