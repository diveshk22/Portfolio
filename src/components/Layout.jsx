import React from "react";
import Footer from "./Footer";

function NavItem({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-gray-600 hover:text-teal-500 cursor-pointer"
    >
      {children}
    </a>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-teal-600">
            Divesh Kumar(Dev)
          </div>
          <nav className="space-x-4">
            <NavItem to="#dashboard">Dashboard</NavItem>
            <NavItem to="#experience">Experience</NavItem>
            <NavItem to="#education">Education</NavItem>
            <NavItem to="#contact">Contact</NavItem>
          </nav>
        </div>
      </header>

      <main className="pt-20">{children}</main>

      <Footer />
    </div>
  );
}