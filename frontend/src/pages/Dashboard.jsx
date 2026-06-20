import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen p-4 sm:p-6"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {/* Left - Main Card */}
        <motion.section
          className="md:col-span-2 p-4 sm:p-6 md:p-8 rounded-3xl border border-indigo-900"
          style={{
            background: "rgba(30, 27, 75, 0.6)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 object-cover"
                style={{ borderColor: "#6366f1" }}
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{profile.name}</h1>
              <p className="text-indigo-400 font-semibold text-lg sm:text-xl mt-2">
                {profile.title}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaMapMarkerAlt className="text-indigo-400 text-sm" />
                <span className="text-slate-400 text-sm">
                  {profile.location && profile.location !== "India"
                    ? profile.location
                    : "Chandigarh, India"}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div
            className="mt-8 p-6 rounded-2xl border border-indigo-800"
            style={{ background: "rgba(99, 102, 241, 0.08)" }}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <span className="text-white text-lg">⚡</span>
              </div>
              Tech Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {profile.skills?.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="text-sm px-5 py-2 rounded-full font-medium cursor-pointer border border-indigo-700 text-indigo-300 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  style={{ background: "rgba(99, 102, 241, 0.15)" }}
                  whileHover={{
                    scale: 1.1,
                    background: "rgba(99, 102, 241, 0.4)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="mt-10 flex justify-center">
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
              <span>→</span>
            </motion.a>
          </div>
        </motion.section>

        {/* Right - Connect Card */}
        <motion.aside
          className="p-4 sm:p-6 md:p-8 rounded-3xl border border-indigo-900 flex flex-col gap-6"
          style={{
            background: "rgba(30, 27, 75, 0.6)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Avatar glow */}
          <div className="text-center">
            <div className="relative inline-block">
              <div
                className="absolute -inset-3 rounded-full blur-xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              ></div>
              <div
                className="relative p-5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <span className="text-4xl">💼</span>
              </div>
            </div>
            <h3 className="font-bold text-2xl text-white mt-4">
              Let's Connect!
            </h3>
            <p className="text-slate-400 mt-1 text-sm italic">
              Ready to build something amazing
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-4 p-4 rounded-2xl border border-indigo-800 cursor-pointer"
              style={{ background: "rgba(99, 102, 241, 0.1)" }}
              whileHover={{ scale: 1.03, borderColor: "#6366f1" }}
            >
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-xs">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-indigo-300 font-semibold text-sm hover:text-white transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 p-4 rounded-2xl border border-indigo-800 cursor-pointer"
              style={{ background: "rgba(16, 185, 129, 0.08)" }}
              whileHover={{ scale: 1.03, borderColor: "#10b981" }}
            >
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                }}
              >
                <FaPhone className="text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-xs">Phone</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-emerald-400 font-semibold text-sm hover:text-white transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 p-4 rounded-2xl border border-indigo-800"
              style={{ background: "rgba(239, 68, 68, 0.08)" }}
              whileHover={{ scale: 1.03, borderColor: "#ef4444" }}
            >
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                }}
              >
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <p className="text-slate-400 text-xs">Location</p>
                <p className="text-red-400 font-semibold text-sm">
                  {profile.location && profile.location !== "India"
                    ? profile.location
                    : "Chandigarh, India"}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-center">Follow Me</h4>
            <div className="flex gap-4 justify-center">
              <motion.a
                href={profile.social?.github || "https://github.com/diveshk22"}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.05)" }}
                whileHover={{
                  scale: 1.15,
                  background: "rgba(255,255,255,0.15)",
                }}
              >
                <FaGithub className="text-3xl" />
              </motion.a>
              <motion.a
                href={
                  profile.social?.linkedin ||
                  "https://www.linkedin.com/in/divesh-kumar-9a3b21348"
                }
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-blue-800 text-blue-400 hover:text-white transition-all duration-300"
                style={{ background: "rgba(59, 130, 246, 0.1)" }}
                whileHover={{
                  scale: 1.15,
                  background: "rgba(59, 130, 246, 0.3)",
                }}
              >
                <FaLinkedin className="text-3xl" />
              </motion.a>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
