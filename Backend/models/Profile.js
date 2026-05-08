// models/Profile.js
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    profileImage: { type: String }, // Stores image URL/path
    resumeUrl: { type: String }, // Stores PDF path
    email: { type: String, required: true },
    phone: { type: String, required: true },
    skills: [{ type: String }], // Array of tech skills
    social: {
      github: { type: String },
      linkedin: { type: String },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Profile", ProfileSchema);
