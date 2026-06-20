import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <Layout>
      <div id="dashboard"><Dashboard /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </Layout>
  );
}
