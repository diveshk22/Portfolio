import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-teal-500 font-semibold"
          : "text-gray-600 hover:text-teal-500"
      }
    >
      {children}
    </NavLink>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-teal-600">
            Divesh Kumar(Dev)
          </div>
          <nav className="space-x-4">
            <NavItem to="/">Dashboard</NavItem>
            <NavItem to="/experience">Experience</NavItem>
            <NavItem to="/education">Education</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/location">Location</NavItem>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 flex-1">{children}</main>

      <Footer />
    </div>
  );
}
