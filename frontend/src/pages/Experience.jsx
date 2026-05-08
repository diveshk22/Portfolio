import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import API_URL from "../config";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/experience`)
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch experiences:", err);
        setLoading(false);
      });
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : experiences.length === 0 ? (
          <p className="text-center text-gray-500 italic">No experience entries yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
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
        )}
      </div>
    </div>
  );
}
