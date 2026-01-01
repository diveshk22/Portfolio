import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";

export default function Education() {
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

  const experienceData = [
    {
      title: "Full Stack Developer Intern / Trainee",
      company: "A2IT InternEdge",
      period: "3 Months (Training & Internship)",
      description:
        "Successfully completed 3 months of full stack development training and internship focusing on React.js, Node.js, Express.js, and MongoDB. Built multiple responsive and dynamic web projects using the MERN stack.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2 
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education & Training
        </motion.h2>

        {/* Experience Section */}
        <motion.section 
          className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl">
              <FaBriefcase className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Training & Internship</h3>
          </div>
          {experienceData.map((exp, idx) => (
            <motion.article
              key={idx}
              className="bg-white/60 hover:bg-white/80 transition-all duration-300 border-l-4 border-indigo-500 p-6 rounded-2xl backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-xl flex items-center gap-3 text-gray-900 mb-2">
                <FaLaptopCode className="text-indigo-500" /> {exp.title}
              </h4>
              <div className="text-indigo-600 font-semibold mb-3">
                {exp.company} — {exp.period}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </motion.article>
          ))}
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-purple-100 backdrop-blur-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</h3>
          </div>
          <div className="space-y-4">
            {educationData.map((edu, idx) => (
              <motion.article
                key={idx}
                className="bg-white/60 hover:bg-white/80 transition-all duration-300 border-l-4 border-purple-500 p-6 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-bold text-xl flex items-center gap-3 text-gray-900 mb-2">
                  <FaUniversity className="text-purple-500" /> {edu.degree}
                </h4>
                <div className="text-purple-600 font-semibold">
                  {edu.school} — {edu.period}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}