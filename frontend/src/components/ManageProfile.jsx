// src/admin/components/ManageProfile.jsx
import React, { useState, useEffect } from "react";

export default function ManageProfile() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    summary: "",
    email: "",
    phone: "",
    social: { github: "", linkedin: "" },
  });
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("social.")) {
      const field = name.split(".")[1];
      setProfile({ ...profile, social: { ...profile.social, [field]: value } });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("title", profile.title);
    formData.append("summary", profile.summary);
    formData.append("email", profile.email);
    formData.append("phone", profile.phone);
    formData.append("social", JSON.stringify(profile.social));

    if (profileImage) formData.append("profileImage", profileImage);
    if (resume) formData.append("resume", resume);

    const res = await fetch("http://localhost:5000/api/profile", {
      method: "PUT",
      body: formData,
    });
    if (res.ok) alert("Profile updated successfully!");
  };

  if (loading) return <p>Loading system configs...</p>;

  return (
    <form onSubmit={handleSave} className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3">
        Edit Profile Content
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Display Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Professional Title
          </label>
          <input
            type="text"
            name="title"
            value={profile.title}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700">
          Bio Summary
        </label>
        <textarea
          name="summary"
          value={profile.summary}
          onChange={handleChange}
          rows="4"
          className="w-full mt-1 p-3 border rounded-xl"
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Profile Pic
          </label>
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="w-full mt-1"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Resume PDF
          </label>
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full mt-1"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
      >
        Save Changes
      </button>
    </form>
  );
}
