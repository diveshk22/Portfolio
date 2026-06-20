import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const profile = {
    name: "Divesh Kumar",
    github: "https://github.com/diveshk22",
    linkedin: "https://www.linkedin.com/in/divesh-kumar-9a3b21348",
    facebook: "https://www.facebook.com/share/1A3nTjfzp4/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/mr_dev_822",
  };

  const socialLinks = [
    { icon: <FaGithub />, href: profile.github },
    { icon: <FaLinkedin />, href: profile.linkedin },
    { icon: <FaFacebook />, href: profile.facebook },
    { icon: <FaInstagram />, href: profile.instagram },
  ];

  return (
    <footer style={{ background: "rgba(15, 23, 42, 0.95)", borderTop: "1px solid rgba(99,102,241,0.3)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">

        <div>
          <p className="text-white font-semibold text-sm">{profile.name}</p>
          <p className="text-slate-400 text-xs">Full Stack Developer</p>
        </div>

        <p className="text-slate-500 text-xs">
          © 2026 {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 text-lg transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}