import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(
    sessionStorage.getItem("isAdmin") === "true"
  );
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handleLogin = () => {
    setIsAdmin(true);
    window.history.pushState(null, "", "/");
    setPath("/");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    setIsAdmin(false);
    window.history.pushState(null, "", "/");
    setPath("/");
  };

  if (isAdmin) {
    return (
      <div>
        <div className="flex justify-end p-3 bg-slate-900">
          <button
            onClick={handleLogout}
            className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Logout
          </button>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  if (path === "/login") {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  );
}
