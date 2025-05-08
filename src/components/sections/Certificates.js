import React from 'react';
import Image from 'next/image';
import Section from '../Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { certificates } from '../../data/certificates';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Certificates = () => {
  return (
    <Section id="certificates" title="Certificates" className="py-16 dark:bg-[var(--secondary)]">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-md certificate-slider-container">
          {/* Previous button */}
          <button 
            className="absolute left-0 z-10 p-2 text-blue-600 -translate-y-1/2 bg-white border border-blue-600 rounded-full shadow-md swiper-button-prev-custom dark:text-blue-400 dark:border-blue-400 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 top-1/2"
            aria-label="Previous certificate"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next button */}
          <button 
            className="absolute right-0 z-10 p-2 text-blue-600 -translate-y-1/2 bg-white border border-blue-600 rounded-full shadow-md swiper-button-next-custom dark:text-blue-400 dark:border-blue-400 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 top-1/2"
            aria-label="Next certificate"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-10 mb-6"
          >
            {certificates.map((certificate) => (
              <SwiperSlide key={certificate.id}>
                <div 
                  className="overflow-hidden transition-shadow rounded-lg shadow-md dark:bg-[var(--primary)] hover:shadow-lg" 
                  data-aos="fade-up" 
                  data-aos-delay={100 + (certificate.id % 3) * 100}
                >
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium">{certificate.title}</h3>
                    <p className="text-sm dark:text-gray-600">{certificate.issuer} • {certificate.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center justify-center w-full gap-4 swiper-pagination-custom"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certificates;