import React from "react";
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
    <div className="space-y-10">
      {/* Experience Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-white to-indigo-50 p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <FaBriefcase className="text-indigo-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
        </div>
        {experienceData.map((exp, idx) => (
          <article
            key={idx}
            className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500 p-5 rounded-lg mb-4"
          >
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <FaLaptopCode className="text-indigo-500" /> {exp.title}
            </h3>
            <div className="text-sm text-gray-500 mt-1">
              {exp.company} — {exp.period}
            </div>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              {exp.description}
            </p>
          </article>
        ))}
      </section>

      {/* Education Section */}
      <section className="bg-gradient-to-r from-purple-100 via-white to-purple-50 p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-3 mb-5">
          <FaGraduationCap className="text-purple-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        </div>
        {educationData.map((edu, idx) => (
          <article
            key={idx}
            className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500 p-5 rounded-lg mb-4"
          >
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <FaUniversity className="text-purple-500" /> {edu.degree}
            </h3>
            <div className="text-sm text-gray-500 mt-1">
              {edu.school} — {edu.period}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
