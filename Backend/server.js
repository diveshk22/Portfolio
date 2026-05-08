// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// --- AUTH (from .env) ---
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const app = express();

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Models
const Profile = require("./models/Profile");
const Experience = require("./models/Experience");
const Education = require("./models/Education");
const Message = require("./models/Message");

// --- API ROUTES ---

// 0. LOGIN ROUTE
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: "Invalid credentials" });
});

// 1. PROFILE & SKILLS ROUTES
app.get("/api/profile", async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create({
        name: "Your Name",
        title: "Developer",
        summary: "Summary goes here",
        email: "email@example.com",
        phone: "1234567890",
        skills: ["React", "Node.js"],
        social: { github: "", linkedin: "" },
      });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/profile", async (req, res) => {
    try {
      const updateData = { ...req.body };

      if (typeof req.body.social === "string")
        updateData.social = JSON.parse(req.body.social);
      if (typeof req.body.skills === "string")
        updateData.skills = JSON.parse(req.body.skills);

      const profile = await Profile.findOneAndUpdate({}, updateData, {
        returnDocument: "after",
        upsert: true,
      });
      res.json(profile);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
);

// 2. EXPERIENCE ROUTES
app.get("/api/experience", async (req, res) => {
  try {
    const exp = await Experience.find().sort({ createdAt: 1 });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/experience", async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    await newExp.save();
    res.json(newExp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/experience/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: "Experience deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. EDUCATION ROUTES
app.get("/api/education", async (req, res) => {
  try {
    const edu = await Education.find().sort({ createdAt: -1 });
    res.json(edu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/education", async (req, res) => {
  try {
    const newEdu = new Education(req.body);
    await newEdu.save();
    res.json(newEdu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/education/:id", async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Education deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. CONTACT SUBMISSIONS ROUTES
app.post("/api/messages", async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.json({ success: true, message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. DASHBOARD STATS ROUTE
app.get("/api/dashboard/stats", async (req, res) => {
  try {
    const [
      totalMessages,
      totalExperiences,
      totalEducation,
      profile,
      recentMessages,
      experiences,
      educations,
    ] = await Promise.all([
      Message.countDocuments(),
      Experience.countDocuments(),
      Education.countDocuments(),
      Profile.findOne(),
      Message.find().sort({ createdAt: -1 }).limit(5),
      Experience.find().sort({ createdAt: -1 }),
      Education.find().sort({ createdAt: -1 }),
    ]);
    res.json({
      totalMessages,
      totalExperiences,
      totalEducation,
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
      recentMessages,
      experiences,
      educations,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
