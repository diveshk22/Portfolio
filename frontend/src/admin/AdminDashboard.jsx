// src/admin/AdminDashboard.jsx
import React, { useState } from "react";
import ManageProfile from "../components/ManageProfile";
import ManageSkills from "../components/ManageSkills";
import ManageExperience from "../components/ManageExperience";
import ManageEducation from "../components/ManageEducation";
import ManageMessages from "../components/ManageMessages";
import DevDashboard from "../components/DevDashboard";
import {
  FaUser,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelopeOpen,
  FaChartBar,
} from "react-icons/fa";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("devdashboard");

  const menuItems = [
    { id: "devdashboard", name: "DevDashboard", icon: <FaChartBar /> },
    { id: "profile", name: "Manage Profile & Contact", icon: <FaUser /> },
    { id: "skills", name: "Manage Tech Skills", icon: <FaTools /> },
    { id: "experience", name: "Change Experience", icon: <FaBriefcase /> },
    { id: "education", name: "Change Education", icon: <FaGraduationCap /> },
    { id: "messages", name: "Client Messages", icon: <FaEnvelopeOpen /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
        <div className="p-6 text-center border-b border-slate-800">
          <h2 className="text-2xl font-bold tracking-wider">Admin Panel</h2>
          <p className="text-xs text-slate-400 mt-1">Portfolio CMS</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/35"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* DASHBOARD VIEWS CONTAINER */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 min-h-[80vh]">
          {activeTab === "profile" && <ManageProfile />}
          {activeTab === "skills" && <ManageSkills />}
          {activeTab === "experience" && <ManageExperience />}
          {activeTab === "education" && <ManageEducation />}
          {activeTab === "messages" && <ManageMessages />}
          {activeTab === "devdashboard" && <DevDashboard />}
        </div>
      </main>
    </div>
  );
}
