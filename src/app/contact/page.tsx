'use client';

import React, { useState, useEffect } from 'react';

export default function ContactUsPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    plan: '',
    message: '',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const businessPhoneNumber = '+917060057683';

    const fullMessage = `Hello,

I'm interested in digital marketing services. Please find my details below:

Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Address: ${form.address}
Looking For: ${form.plan}

Message:
${form.message}

Please get in touch. Thank you!`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0c1222] to-[#131a2e] text-white px-6 py-10">

      {/* Heading */}
      <section className="max-w-6xl mx-auto text-left mb-14 fade-up opacity-0 translate-y-6 transition-all duration-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
          Get in Touch with Moon Arc
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Want to skyrocket your brand digital presence? Fill out this form and our team will connect with you shortly.
        </p>
        <p className="text-gray-400 mt-4 max-w-3xl">
          We offer performance-driven SEO, social media, paid campaigns and automation tools to scale your business online.
        </p>
      </section>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <section className="max-w-6xl mx-auto bg-[#1f263f] border border-purple-700 rounded-2xl p-10 md:p-16 space-y-10 fade-up opacity-0 translate-y-6 transition-all duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
            <FormField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} type="tel" />
            <FormField label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
            <FormField label="Company / Address" name="address" value={form.address} onChange={handleChange} />
          </div>

          <div>
            <label className="block mb-2 text-base text-white">Looking For</label>
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-[#0e1525] border border-gray-600 text-white focus:ring-1 focus:ring-purple-500 transition"
              required
            >
              <option value="">Select a Service</option>
              <option>SEO & Organic Growth</option>
              <option>Paid Ads (Google/Facebook)</option>
              <option>Social Media Management</option>
              <option>Email / WhatsApp Automation</option>
              <option>Full Digital Strategy</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-base text-white">Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your goals, challenges or anything specific."
              className="w-full px-5 py-3 rounded-lg bg-[#0e1525] border border-gray-600 text-white resize-none focus:ring-1 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <label className="flex items-center gap-2 text-gray-400 text-base">
              <input type="checkbox" required className="accent-purple-500 scale-110" />
              I agree to the <a href="#" className="text-purple-400 underline">Terms</a> & <a href="#" className="text-purple-400 underline">Privacy Policy</a>
            </label>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white text-base font-semibold px-8 py-3 rounded-lg transition shadow hover:shadow-purple-500/50"
            >
              Send via WhatsApp
            </button>
          </div>
        </section>
      </form>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto mt-20 text-left fade-up opacity-0 translate-y-6 transition-all duration-700">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">📞 Contact Information</h3>
        <p className="text-gray-300 mb-2">🏢 <strong>Moon Arc HQ</strong></p>
        <p className="text-gray-400 mb-1">D-404, Digital Avenue, Sector 5, Noida, India</p>
        <p className="text-gray-400 mb-1">📞 +91 92110 62253</p>
        <p className="text-gray-400">📧 hello@moonarc.in</p>
      </section>

      <style jsx>{`
        .fade-up {
          will-change: transform, opacity;
        }
      `}</style>
    </main>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormField({ label, name, value, onChange, type = 'text' }: FormFieldProps) {
  return (
    <div>
      <label className="block mb-2 text-base text-white">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full px-5 py-3 rounded-lg bg-[#0e1525] border border-gray-600 text-white focus:ring-1 focus:ring-purple-500 transition"
        required
      />
    </div>
  );
}
