import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBriefcase, FaCode, FaGraduationCap, FaUser, FaFilePdf, FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function DevDashboard() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalExperiences: 0,
    totalEducation: 0,
    totalSkills: 0,
    profile: {},
    technologies: [],
    recentMessages: [],
    experiences: [],
    educations: [],
  });
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchStats = async () => {
    try {
      const [profileRes, expRes, eduRes, msgRes] = await Promise.all([
        fetch("http://localhost:5000/api/profile"),
        fetch("http://localhost:5000/api/experience"),
        fetch("http://localhost:5000/api/education"),
        fetch("http://localhost:5000/api/messages"),
      ]);
      const [profile, experiences, educations, messages] = await Promise.all([
        profileRes.json(),
        expRes.json(),
        eduRes.json(),
        msgRes.json(),
      ]);
      setStats({
        totalMessages: messages.length,
        totalExperiences: experiences.length,
        totalEducation: educations.length,
        totalSkills: profile?.skills?.length || 0,
        profile: {
          name: profile?.name || "",
          title: profile?.title || "",
          email: profile?.email || "",
          phone: profile?.phone || "",
          summary: profile?.summary || "",
          profileImage: profile?.profileImage || null,
          resumeUrl: profile?.resumeUrl || null,
          social: profile?.social || {},
          updatedAt: profile?.updatedAt || null,
        },
        technologies: profile?.skills || [],
        recentMessages: messages.slice(0, 5),
        experiences,
        educations,
      });
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Developer Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaClock />
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-2xl shadow-xl">
        <div className="flex items-center gap-6">
          {stats.profile.profileImage ? (
            <img
              src={`http://localhost:5000${stats.profile.profileImage}`}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center">
              <FaUser className="text-3xl text-slate-400" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{stats.profile.name || "No Name Set"}</h3>
            <p className="text-slate-300">{stats.profile.title || "No Title Set"}</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="text-slate-400">{stats.profile.email}</span>
              <span className="text-slate-400">{stats.profile.phone}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              {stats.profile.resumeUrl ? (
                <>
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-sm text-green-400">Resume Uploaded</span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-red-400" />
                  <span className="text-sm text-red-400">No Resume</span>
                </>
              )}
            </div>
            {stats.profile.updatedAt && (
              <p className="text-xs text-slate-400 mt-1">
                Updated: {new Date(stats.profile.updatedAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Contact Messages</p>
              <h3 className="text-4xl font-bold mt-2">{stats.totalMessages}</h3>
            </div>
            <FaEnvelope className="text-5xl text-blue-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Experiences</p>
              <h3 className="text-4xl font-bold mt-2">{stats.totalExperiences}</h3>
            </div>
            <FaBriefcase className="text-5xl text-purple-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Education</p>
              <h3 className="text-4xl font-bold mt-2">{stats.totalEducation}</h3>
            </div>
            <FaGraduationCap className="text-5xl text-green-200 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Tech Skills</p>
              <h3 className="text-4xl font-bold mt-2">{stats.totalSkills}</h3>
            </div>
            <FaCode className="text-5xl text-orange-200 opacity-50" />
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Technologies Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-2xl text-indigo-600" />
            <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {stats.technologies.length > 0 ? (
              stats.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md"
                >
                  {tech}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No technologies added yet</p>
            )}
          </div>
        </div>

        {/* Resume Status */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <FaFilePdf className="text-2xl text-red-600" />
            <h3 className="text-xl font-bold text-gray-800">Resume Status</h3>
          </div>
          {stats.profile.resumeUrl ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <FaCheckCircle />
                <span className="font-semibold">Resume is uploaded and active</span>
              </div>
              <a
                href={`http://localhost:5000${stats.profile.resumeUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                View Resume PDF
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-600">
              <FaTimesCircle />
              <span>No resume uploaded. Upload from Manage Profile.</span>
            </div>
          )}
        </div>
      </div>

      {/* Experiences List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <FaBriefcase className="text-2xl text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">All Experiences</h3>
        </div>
        <div className="space-y-3">
          {stats.experiences.length > 0 ? (
            stats.experiences.map((exp) => (
              <div
                key={exp._id}
                className="p-4 bg-purple-50 rounded-xl border border-purple-200"
              >
                <h4 className="font-bold text-gray-800">{exp.role}</h4>
                <p className="text-sm text-gray-600">{exp.company} • {exp.duration}</p>
                <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                {exp.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No experiences added yet</p>
          )}
        </div>
      </div>

      {/* Education List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <FaGraduationCap className="text-2xl text-green-600" />
          <h3 className="text-xl font-bold text-gray-800">All Education</h3>
        </div>
        <div className="space-y-3">
          {stats.educations.length > 0 ? (
            stats.educations.map((edu) => (
              <div
                key={edu._id}
                className="p-4 bg-green-50 rounded-xl border border-green-200"
              >
                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                <p className="text-sm text-gray-600">{edu.institution} • {edu.duration}</p>
                {edu.grade && <p className="text-sm text-gray-700 mt-1">Grade: {edu.grade}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No education added yet</p>
          )}
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <FaEnvelope className="text-2xl text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Recent Messages (Last 5)</h3>
        </div>
        <div className="space-y-3">
          {stats.recentMessages.length > 0 ? (
            stats.recentMessages.map((msg) => (
              <div
                key={msg._id}
                className="p-4 bg-blue-50 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{msg.name}</p>
                    <p className="text-sm text-gray-600">{msg.email}</p>
                    <p className="text-sm text-gray-700 mt-2">{msg.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 ml-4">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No messages yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
