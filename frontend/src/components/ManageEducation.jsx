// src/admin/components/ManageEducation.jsx
import React, { useState, useEffect } from "react";

export default function ManageEducation() {
  const [educations, setEducations] = useState([]);
  const [form, setForm] = useState({
    degree: "",
    institution: "",
    duration: "",
    grade: "",
  });

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = () => {
    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducations(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/education", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ degree: "", institution: "", duration: "", grade: "" });
    fetchEducation();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/education/${id}`, {
      method: "DELETE",
    });
    fetchEducation();
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Change Education
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Degree (e.g. B.Tech CSE)"
          value={form.degree}
          onChange={(e) => setForm({ ...form, degree: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Institution"
          value={form.institution}
          onChange={(e) => setForm({ ...form, institution: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Duration (e.g., 2022 - 2026)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
          className="p-3 border rounded-xl"
          required
        />
        <input
          type="text"
          placeholder="Grade/GPA (Optional)"
          value={form.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
          className="p-3 border rounded-xl"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-xl font-bold col-span-2"
        >
          Add Education
        </button>
      </form>
      <div className="space-y-4">
        {educations.map((edu) => (
          <div
            key={edu._id}
            className="flex justify-between items-center p-4 border rounded-xl bg-slate-50"
          >
            <div>
              <h4 className="font-bold text-lg">{edu.degree}</h4>
              <p className="text-sm text-gray-500">
                {edu.institution} | {edu.duration}
              </p>
            </div>
            <button
              onClick={() => handleDelete(edu._id)}
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
