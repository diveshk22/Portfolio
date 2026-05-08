// models/Experience.js
const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Experience", ExperienceSchema);
