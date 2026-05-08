// src/admin/components/ManageExperience.jsx
import React, { useState, useEffect } from "react";
import API_URL from "../config";

export default function ManageExperience() {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    role: "",
    company: "",
    duration: "",
    description: "",
    tech: "",
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = () => {
    fetch(`${API_URL}/api/experience`)
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tech: form.tech.split(",").map((t) => t.trim()).filter(Boolean),
    };
    await fetch(`${API_URL}/api/experience`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setForm({ role: "", company: "", duration: "", description: "", tech: "" });
    fetchExperiences();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/api/experience/${id}`, {
      method: "DELETE",
    });
    fetchExperiences();
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Manage Experience
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Role/Title"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Duration (e.g. 2024 - Present)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Tech Stack (comma separated, e.g. React, Node.js)"
          value={form.tech}
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          className="p-3 border rounded-xl"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="p-3 border rounded-xl col-span-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-xl font-bold col-span-2"
        >
          Add Experience
        </button>
      </form>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="flex justify-between items-center p-4 border rounded-xl bg-slate-50"
          >
            <div>
              <h4 className="font-bold text-lg">
                {exp.role} @ {exp.company}
              </h4>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              {exp.tech?.length > 0 && (
                <p className="text-xs text-blue-500 mt-1">{exp.tech.join(", ")}</p>
              )}
            </div>
            <button
              onClick={() => handleDelete(exp._id)}
              className="text-red-500 font-bold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
