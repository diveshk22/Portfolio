import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const profile = {
    name: "Divesh Kumar",
    github: "https://github.com/diveshk22",
    linkedin:
      "https://www.linkedin.com/in/divesh-kumar-9a3b21348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    facebook: "https://www.facebook.com/share/1A3nTjfzp4/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/mr_dev_822?igsh=MWRiNnQxazR0bnZkeA%3D%3D&utm_source=qr",
  };

  const socialLinks = [
    { icon: <FaGithub />, href: profile.github },
    { icon: <FaLinkedin />, href: profile.linkedin },
    { icon: <FaFacebook />, href: profile.facebook },
    { icon: <FaInstagram />, href: profile.instagram },
  ];

  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 text-white">
      {/* Name & Description */}
      <div className="container mx-auto px-6 py-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-lg font-semibold max-w-xl mx-auto">
          Passionate Full Stack Developer building modern, scalable, and
          interactive web applications.
        </p>
      </div>

      {/* Social Icons */}
      <div className="container mx-auto px-6 py-4 text-center flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-200 transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Contact Me Button */}
      <div className="container mx-auto px-6 py-6 text-center">
        <a
          href="#contact"
          className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="bg-teal-600 text-gray-200 py-4 text-center text-sm">
        Designed & Built by {profile.name}
      </div>
    </footer>
  );
}