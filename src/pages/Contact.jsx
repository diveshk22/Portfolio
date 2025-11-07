import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Demo: Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        Want to work together? You can reach me at:
      </p>

      {/* Contact info with icons */}
      <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <FaEnvelope className="text-teal-500 text-xl" />
          <a
            href="mailto:diveshk960@gmail.com"
            className="text-gray-800 hover:text-teal-500"
          >
            diveshk960@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaPhone className="text-teal-500 text-xl" />
          <a
            href="tel:9465670766"
            className="text-gray-800 hover:text-teal-500"
          >
            +91 9465670766
          </a>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
      >
        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300"
          />
        </label>

        <button
          type="submit"
          className="bg-teal-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
