import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experienceData = [
  {
    _id: "1",
    role: "Full Stack Developer Intern / Trainee",
    company: "A2IT InternEdge",
    duration: "6 Months (Training & Internship)",
    description:
      "Successfully completed 6 months of full stack development training and internship focusing on React.js, Node.js, Express.js, and MongoDB. Built multiple responsive and dynamic web projects using the MERN stack.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    _id: "2",
    role: "Full Stack Developer",
    company: "Get Now",
    duration: "2 Months (Remote)",
    description:
      "Developed a CRM-based web application using Next.js and Supabase. Built core CRM features including customer management, lead tracking, contact management, and activity logging. Implemented real-time data sync with Supabase, user authentication, role-based access control, and a responsive dashboard.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div
      className="min-h-screen p-4 sm:p-6"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-6">
          {experienceData.map((exp, idx) => (
            <motion.article
              key={exp._id}
              className="p-4 sm:p-6 rounded-3xl border border-indigo-800"
              style={{
                background: "rgba(30, 27, 75, 0.6)",
                backdropFilter: "blur(20px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <header className="flex items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{exp.duration}</p>
                </div>
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                  className="p-3 rounded-xl border border-indigo-700 text-indigo-400 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  style={{ background: "rgba(99,102,241,0.15)" }}
                >
                  {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </header>

              {expandedIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 space-y-4"
                >
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium text-indigo-300 border border-indigo-700"
                        style={{ background: "rgba(99,102,241,0.15)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
