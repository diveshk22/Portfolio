// src/admin/components/ManageSkills.jsx
import React, { useState, useEffect } from "react";
import API_URL from "../config";

export default function ManageSkills() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/profile`)
      .then((res) => res.json())
      .then((data) => setSkills(data.skills || []));
  }, []);

  const addSkill = async () => {
    if (!newSkill) return;
    const updatedSkills = [...skills, newSkill];
    const res = await fetch(`${API_URL}/api/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: updatedSkills }),
    });
    if (res.ok) {
      setSkills(updatedSkills);
      setNewSkill("");
    }
  };

  const deleteSkill = async (skillToDelete) => {
    const updatedSkills = skills.filter((s) => s !== skillToDelete);
    const res = await fetch(`${API_URL}/api/profile`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: updatedSkills }),
    });
    if (res.ok) setSkills(updatedSkills);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Edit Technology Stack
      </h3>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Add Skill (e.g., Docker, Redux)"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 p-3 border rounded-xl"
        />
        <button
          onClick={addSkill}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-full font-medium"
          >
            {skill}
            <button
              onClick={() => deleteSkill(skill)}
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
