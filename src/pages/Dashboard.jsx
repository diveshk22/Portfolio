import React from "react";
import { FaGithub, FaLinkedin, FaDownload, FaGlobe } from "react-icons/fa";
import profileImage from "../Public/profile.jpg";
import { profile } from "../data/profile.js";

export default function Dashboard() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        <section className="md:col-span-2 bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm animate-fade-in">
          <div className="flex items-center gap-6 relative">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 animate-pulse"></div>
              <img
                src={profileImage}
                alt={profile.name}
                className="relative w-28 h-28 rounded-full border-4 border-white shadow-2xl object-cover transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
                {profile.name}
              </h1>
              <p className="text-indigo-600 font-semibold text-2xl mt-2 animate-slide-up">
                {profile.title}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              {profile.summary}
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                <FaGlobe className="text-white text-xl" />
              </div>
              Tech Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {profile.skills.map((skill, index) => (
                <span
                  key={skill}
                  className="group relative text-sm px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer border border-blue-200 hover:border-blue-400"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 font-medium">{skill}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {skill}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={`/${profile.resumeFileName}`}
              download={profile.resumeFileName}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:shadow-blue-500/25"
            >
              <span className="flex items-center gap-2">
                <FaDownload className="text-lg" />
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </section>

        <aside className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 backdrop-blur-sm animate-slide-in-right">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500">
                <div className="text-4xl text-white animate-bounce">
                  💼
                </div>
              </div>
            </div>
            <h3 className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-4 animate-fade-in">
              Let's Connect!
            </h3>
            <p className="text-gray-600 mt-2 italic">Ready to build something amazing together</p>
          </div>

          <div className="space-y-6">
            <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg group-hover:animate-pulse">
                  <span className="text-white text-lg">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:animate-pulse">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-xl text-gray-900 mb-4 text-center">
              Follow Me
            </h4>
            <div className="flex gap-4 justify-center">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-2xl"
              >
                <FaGithub className="text-3xl text-gray-700 group-hover:text-white transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping group-hover:animate-pulse"></div>
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 shadow-lg hover:shadow-2xl"
              >
                <FaLinkedin className="text-3xl text-blue-700 group-hover:text-white transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping group-hover:animate-pulse"></div>
              </a>
            </div>
          </div>

          <div className="mt-8 text-center bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-inner border border-purple-200">
            <div className="text-2xl mb-2 animate-bounce">🚀</div>
            <h4 className="font-bold text-purple-700 text-lg italic">
              "Code. Create. Innovate."
            </h4>
            <p className="text-purple-600 text-sm mt-2">Let's build the future together!</p>
          </div>
        </aside>
      </div>
    </div>
  );
}