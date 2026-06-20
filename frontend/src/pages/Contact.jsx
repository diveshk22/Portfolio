import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const keyMap = { from_name: "name", from_email: "email", message: "message" };
  const handleChange = (e) =>
    setForm({ ...form, [keyMap[e.target.name]]: e.target.value });

const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("sending");

  emailjs
    .sendForm(
      "service_sjeexqc",
      "template_05dpc4r",
      formRef.current,
      "5xY1lOeqpWg2NZYeG",
    )
    .then(() => {
      // Auto-reply user ko
      emailjs.send(
        "service_sjeexqc",
        "template_vutrjvn",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "5xY1lOeqpWg2NZYeG",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    })
    .catch(() => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together!
        </motion.p>

        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setStatus("idle")}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4 ${
                status === "success"
                  ? "bg-white border-2 border-green-300"
                  : "bg-white border-2 border-red-300"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`text-5xl mb-4`}>
                {status === "success" ? "✅" : "❌"}
              </div>
              <p className={`text-lg font-bold ${
                status === "success" ? "text-green-700" : "text-red-700"
              }`}>
                {status === "success"
                  ? "Message sent successfully! I'll get back to you soon."
                  : "Something went wrong. Please try again!"}
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:opacity-90"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl border border-blue-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {profile.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-green-600 hover:text-green-800 font-semibold"
                  >
                    {profile.phone}
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-700 text-lg mb-2">
                Let's Build Something Great!
              </h4>
              <p className="text-gray-700 text-sm">
                Whether it's a web application, mobile app, or custom solution,
                I'm here to help turn your vision into reality.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl border border-purple-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 bg-white/80"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 bg-white/80 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60"
                whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  {status === "sending" ? "Sending..." : <><FaPaperPlane /> Send Message</>}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}