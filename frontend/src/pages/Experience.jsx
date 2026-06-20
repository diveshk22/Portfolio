import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experienceData = [
  {
    _id: "1",
    role: "Full Stack Developer Intern / Trainee",
    company: "A2IT InternEdge",
    duration: "6 Months (Training & Internship)",
    description: "Successfully completed 6 months of full stack development training and internship focusing on React.js, Node.js, Express.js, and MongoDB. Built multiple responsive and dynamic web projects using the MERN stack.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    _id: "2",
    role: "Full Stack Developer",
    company: "Get Now",
    duration: "2 Months (Remote)",
    description: "Developed a CRM-based web application using Next.js and Supabase. Built core CRM features including customer management, lead tracking, contact management, and activity logging. Implemented real-time data sync with Supabase, user authentication, role-based access control, and a responsive dashboard with sales pipeline and reporting views.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const experiences = experienceData;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp._id}
                className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <header className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="p-2 bg-indigo-100 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110"
                  >
                    {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </header>

                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 space-y-4"
                  >
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>

                    {exp.tech?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.article>
            ))}
        </div>
      </div>
    </div>
  );
}
