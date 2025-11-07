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
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", // React logo
      github: "https://github.com/diveshk22", // updated GitHub link
      linkedin:
        "https://www.linkedin.com/in/divesh-kumar-9a3b21348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // updated LinkedIn link
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
      logo: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png", // finance
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
      logo: "https://cdn-icons-png.flaticon.com/512/706/706164.png", // vegetable icon
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
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png", // Node.js
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
    <section className="experience-root">
      <h2 className="heading">Experience</h2>

      <div className="grid">
        {experiences.map((exp, idx) => (
          <motion.article
            key={idx}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <header className="card-header">
              <div className="left">
                <img src={exp.logo} alt={exp.company} className="logo" />
                <div>
                  <h3 className="role">
                    {exp.role} <span className="dash">—</span>{" "}
                    <span className="company">{exp.company}</span>
                  </h3>
                  <div className="period">{exp.period}</div>
                </div>
              </div>

              <div className="icons">
                {exp.github && (
                  <a href={exp.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                )}
                {exp.linkedin && (
                  <a href={exp.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {exp.website && (
                  <a href={exp.website} target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                )}
                <FaCode title={`Tech: ${exp.tech.join(", ")}`} />
                <button
                  onClick={() => toggleExpand(idx)}
                  className="expand-btn"
                  title="Show details"
                >
                  {expandedIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
            </header>

            {expandedIndex === idx && (
              <motion.div
                className="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                <ul className="bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <footer className="tech-list">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="chip">
                      {t}
                    </span>
                  ))}
                </footer>
              </motion.div>
            )}
          </motion.article>
        ))}
      </div>

      <style>{`
        .experience-root {
          padding: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          font-family: 'Inter', system-ui;
        }
        .heading {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          text-align: center;
          margin-bottom: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          background: linear-gradient(135deg, #ffffff, #f9fafc);
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 6px 18px rgba(0,0,0,0.07);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          object-fit: cover;
          background: #eef2ff;
        }
        .role {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }
        .company {
          color: #4f46e5;
        }
        .period {
          color: #6b7280;
          font-size: 0.85rem;
        }

        .icons {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.1rem;
          color: #374151;
        }
        .icons a, .expand-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 8px;
          background: transparent;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        .icons a:hover, .expand-btn:hover {
          background: rgba(99,102,241,0.1);
          color: #4f46e5;
        }

        .expanded {
          margin-top: 1rem;
        }

        .bullets {
          color: #374151;
          margin-top: 0.75rem;
          padding-left: 1.1rem;
          line-height: 1.6;
        }
        .bullets li {
          margin-bottom: 0.5rem;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .chip {
          background: linear-gradient(90deg, rgba(99,102,241,0.08), rgba(99,102,241,0.03));
          border: 1px solid rgba(99,102,241,0.12);
          color: #4f46e5;
          padding: 6px 12px;
          border-radius: 9999px;
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
}
