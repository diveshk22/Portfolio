import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import profileImage from "../Public/profile.jpg";

export default function Dashboard() {
  const profile = {
    name: "Divesh Kumar",
    title: "Full Stack Developer",
    summary:
      "I am a passionate Full Stack Developer with experience in building dynamic and interactive web applications using modern technologies. I specialize in creating scalable frontend and backend solutions that provide seamless user experiences.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Next.js",
      "REST APIs",
      "JavaScript",
      "HTML/CSS",
      "Fullstack Development",
    ],
    location: "India",
    phone: "9465670766",
    email: "diveshk960@gmail.com",
    social: {
      github: "https://github.com/diveshk22",
      linkedin:
        "https://www.linkedin.com/in/divesh-kumar-9a3b21348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    image: "/profile.jpg", // Public folder reference
  };

  // Scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-3 p-6">
      {/* Left Section */}
      <section className="md:col-span-2 bg-gradient-to-br from-white to-teal-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
        {/* Developer Info */}
        <div className="flex items-center gap-6">
          <img
            src={profileImage}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-4 border-teal-400 shadow-lg object-cover"
          />

          <div>
            <h1 className="text-5xl font-bold text-gray-900">{profile.name}</h1>
            <p className="text-teal-600 font-semibold text-2xl mt-1">
              {profile.title}
            </p>
          </div>
        </div>

        {/* About */}
        <p className="mt-8 text-gray-700 text-lg leading-relaxed">
          {profile.summary}
        </p>

        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <FaGlobe className="text-teal-600" /> Tech Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="text-sm px-5 py-3 bg-teal-100 text-teal-700 rounded-full shadow-md hover:bg-teal-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Hire Me Section */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToContact}
            className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-xl text-lg"
          >
            💼 Hire Me for Your Next Fullstack Project
          </button>
        </div>
      </section>

      {/* Right Section */}
      <aside
        id="contact-section"
        className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <h3 className="font-semibold text-2xl text-gray-900">Contact</h3>
        <p className="mt-4 text-gray-600">{profile.location}</p>
        <p className="mt-1 text-teal-600 font-medium">{profile.phone}</p>
        <p className="mt-1">
          <a
            href={`mailto:${profile.email}`}
            className="text-teal-500 hover:underline"
          >
            {profile.email}
          </a>
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="font-semibold text-xl text-gray-900 mb-3">
            Connect with Me
          </h4>
          <div className="flex gap-6 text-teal-600 text-3xl">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-all transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-all transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center bg-teal-50 p-6 rounded-2xl shadow-inner">
          <h4 className="font-semibold text-teal-700 text-lg">
            “Turning ideas into dynamic fullstack web experiences.”
          </h4>
        </div>
      </aside>
    </div>
  );
}
