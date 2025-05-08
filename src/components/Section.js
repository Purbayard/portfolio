import React from 'react';

const Section = ({ id, title, children, className = "", childrenClassName = "" }) => {
  return (
    <section id={id} className="overflow-hidden">
      <div className={`px-4 mx-auto sm:px-6 lg:px-8 ${className}`}>
        <div className="p-4 rounded-lg" >
          {title && (
            <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl dark:text-[var(--title)]" data-aos="fade-up">
              {title}
            </h2>
          )}
          <div className={childrenClassName}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;