"use client";
import { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeading title="Contact Me" />
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                required
              />
            </div>
            
            {/* Other form fields... */}
            
            <button
              type="submit"
              className="btn-primary px-6 py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}