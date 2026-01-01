import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaCode,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Personal Projects / Freelance",
      period: "2022 - Present",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      github: "https://github.com/diveshk22",
      linkedin:
        "https://www.linkedin.com/in/divesh-kumar-9a3b21348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      website: "https://example.com",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      bullets: [
        "Developed attractive, responsive full-stack web apps using React, Node.js, and MongoDB.",
        "Created e-commerce frontends (banking/finance themed) using pure HTML + CSS with media queries.",
        "Built vegetable store UI with Bootstrap for fast prototyping and responsiveness.",
        "Designed REST APIs and integrated them with React frontends using Axios.",
        "Optimized for accessibility, performance, and clean component-based structure.",
      ],
    },
    {
      role: "Frontend Developer (Project)",
      company: "Banking Finance Website",
      period: "2023",
      logo: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      tech: ["HTML5", "CSS3", "Media Queries"],
      bullets: [
        "Designed responsive banking dashboard layouts using semantic HTML and modern CSS.",
        "Added animations and transitions to enhance UI/UX and engagement.",
        "Ensured pixel-perfect responsive behavior across devices.",
      ],
    },
    {
      role: "UI Developer (Bootstrap)",
      company: "Vegetable Store UI",
      period: "2023",
      logo: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
      tech: ["Bootstrap", "HTML", "CSS"],
      bullets: [
        "Created a store UI using Bootstrap 5 grid and utility classes.",
        "Developed responsive product cards, filters, and navbar.",
        "Focused on mobile-first design and lightweight performance.",
      ],
    },
    {
      role: "React & Node Developer",
      company: "Clones and APIs",
      period: "2024",
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      bullets: [
        "Built full-stack clones using React frontend and Node/Express backend.",
        "Implemented authentication, CRUD operations, and MongoDB integration.",
        "Tested APIs with Postman and deployed demo apps for testing.",
      ],
    },
  ];

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

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <motion.article
              key={idx}
              className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src={exp.logo} alt={exp.company} className="w-16 h-16 rounded-2xl object-cover bg-blue-50 p-2" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {exp.github && (
                    <a href={exp.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 hover:bg-gray-800 text-gray-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110">
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  {exp.linkedin && (
                    <a href={exp.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-blue-100 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110">
                      <FaLinkedin className="text-lg" />
                    </a>
                  )}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="p-2 bg-indigo-100 hover:bg-indigo-600 text-indigo-700 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-110"
                  >
                    {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </header>

              {expandedIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-4"
                >
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
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