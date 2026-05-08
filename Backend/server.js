// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

// --- AUTH ROUTE ---
const ADMIN_EMAIL = "diveshk960@gmail.com";
const ADMIN_PASSWORD = "Divesh@22";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// File Upload Engine Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

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
      // Seed default profile structure if database is empty
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

app.put(
  "/api/profile",
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const updateData = { ...req.body };

      // Parse social and skills if sent as stringified JSON
      if (typeof req.body.social === "string")
        updateData.social = JSON.parse(req.body.social);
      if (typeof req.body.skills === "string")
        updateData.skills = JSON.parse(req.body.skills);

      if (req.files && req.files.profileImage) {
        updateData.profileImage = `/uploads/${req.files.profileImage[0].filename}`;
      }
      if (req.files && req.files.resume) {
        updateData.resumeUrl = `/uploads/${req.files.resume[0].filename}`;
      }

      const profile = await Profile.findOneAndUpdate({}, updateData, {
        new: true,
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
  const exp = await Experience.find().sort({ createdAt: 1 });
  res.json(exp);
});

app.post("/api/experience", async (req, res) => {
  const newExp = new Experience(req.body);
  await newExp.save();
  res.json(newExp);
});

app.delete("/api/experience/:id", async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: "Experience deleted" });
});

// 3. EDUCATION ROUTES
app.get("/api/education", async (req, res) => {
  const edu = await Education.find().sort({ createdAt: -1 });
  res.json(edu);
});

app.post("/api/education", async (req, res) => {
  const newEdu = new Education(req.body);
  await newEdu.save();
  res.json(newEdu);
});

app.delete("/api/education/:id", async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: "Education deleted" });
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
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

// 5. DASHBOARD STATS ROUTE
app.get("/api/dashboard/stats", async (req, res) => {
  try {
    const [totalMessages, totalExperiences, totalEducation, profile, recentMessages, experiences, educations] =
      await Promise.all([
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
