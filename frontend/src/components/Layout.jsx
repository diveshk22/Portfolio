import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { FaBars, FaTimes } from "react-icons/fa";

function NavItem({ to, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-slate-400 hover:text-indigo-400 cursor-pointer transition-colors duration-300 text-sm font-medium"
    >
      {children}
    </a>
  );
}

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "#dashboard", label: "Home" },
    { to: "#experience", label: "Experience" },
    { to: "#education", label: "Education" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
    >
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(15, 23, 42, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div
            className="text-lg font-bold"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Divesh Kumar
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to}>{link.label}</NavItem>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-indigo-400 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-4 pb-4 flex flex-col gap-4"
            style={{ background: "rgba(15, 23, 42, 0.98)" }}
          >
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label}
              </NavItem>
            ))}
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
}
