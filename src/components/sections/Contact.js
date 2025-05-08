import React, { useState, useEffect } from 'react';
import Section from '../Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); 
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const form = e.target;
      const formData = new FormData(form);
      
      fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setError("There was an error submitting the form. Please try again.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      setError("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Contact Me" className="py-10 dark:bg-[var(--secondary)]">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        {/* Netlify Form */}
        <div className="p-6 rounded-lg shadow-md dark:bg-[var(--form)]" data-aos="zoom-in" data-aos-delay="100">
          {isSubmitted ? (
            <div className="py-8 text-center" data-aos="zoom-in">
              <svg className="w-16 h-16 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
              <p className="text-gray-700 dark:text-gray-300">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </div>
              
              <div data-aos="fade-up" data-aos-delay="100">
                <label htmlFor="name" className="block mb-1 text-sm font-medium dark:text-[var(--label)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--input)]"
                  placeholder="Your name"
                  aria-label="Your name"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="email" className="block mb-1 text-sm font-medium dark:text-[var(--label)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--input)]"
                  placeholder="Your email"
                  aria-label="Your email"
                />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="message" className="block mb-1 text-sm font-medium dark:text-[var(--label)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--input)]"
                  placeholder="Your message"
                  aria-label="Your message"
                />
              </div>
              
              {error && (
                <div className="text-sm text-red-500" role="alert">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
                data-aos="zoom-in" 
                data-aos-delay="400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;