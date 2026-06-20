import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "RIMT University",
    period: "2022 - 2025",
  },
  {
    degree: "12th (Senior Secondary)",
    school: "Multipurpose Senior Secondary School",
    period: "2021",
  },
  {
    degree: "10th (Matriculation)",
    school: "Government High Smart School",
    period: "2018",
  },
];

const trainingData = [
  {
    title: "Full Stack Developer Intern / Trainee",
    company: "A2IT InternEdge",
    period: "6 Months",
    description:
      "Full stack development training focusing on React.js, Node.js, Express.js, and MongoDB.",
  },
];

export default function Education() {
  return (
    <div
      className="min-h-screen p-4 sm:p-6"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education & Training
        </motion.h2>

        {/* Training */}
        <motion.section
          className="p-4 sm:p-8 rounded-3xl border border-indigo-800"
          style={{
            background: "rgba(30, 27, 75, 0.6)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              <FaBriefcase className="text-white text-xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Training & Internship
            </h3>
          </div>
          {trainingData.map((t, idx) => (
            <motion.article
              key={idx}
              className="p-4 sm:p-6 rounded-2xl border-l-4 border-indigo-500"
              style={{ background: "rgba(99,102,241,0.08)" }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-base sm:text-lg text-white flex items-center gap-2 flex-wrap">
                <FaLaptopCode className="text-indigo-400 shrink-0" /> {t.title}
              </h4>
              <p className="text-indigo-400 font-semibold mt-1 text-sm sm:text-base">
                {t.company} — {t.period}
              </p>
              <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-base">
                {t.description}
              </p>
            </motion.article>
          ))}
        </motion.section>

        {/* Education */}
        <motion.section
          className="p-4 sm:p-8 rounded-3xl border border-indigo-800"
          style={{
            background: "rgba(30, 27, 75, 0.6)",
            backdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-3 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              }}
            >
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="space-y-4">
            {educationData.map((edu, idx) => (
              <motion.article
                key={idx}
                className="p-4 sm:p-6 rounded-2xl border-l-4 border-purple-500"
                style={{ background: "rgba(139,92,246,0.08)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-base sm:text-lg text-white flex items-center gap-2 flex-wrap">
                  <FaUniversity className="text-purple-400 shrink-0" /> {edu.degree}
                </h4>
                <p className="text-purple-400 font-semibold mt-1 text-sm sm:text-base">
                  {edu.school} — {edu.period}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
