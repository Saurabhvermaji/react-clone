// src/router/routes.jsx
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import DocsLayout from "../layouts/DocsLayout";

// Pages
import Blog from "../pages/Blog";
import Learn from "../pages/Learn";
import Reference from "../pages/reference";
import Community from "../pages/Community";
import Home from "../pages/Home"; 
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
        {/* Simple Layout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />

        {/* Docs Layout Pages (With Sidebar) */}
        <Route path="/learn" element={<DocsLayout><Learn /></DocsLayout>} />
        <Route path="/reference" element={<DocsLayout><Reference /></DocsLayout>} />
        <Route path="/community" element={<DocsLayout><Community /></DocsLayout>} />

        {/*Not Found Page*/}
        <Route path="*" element={<DocsLayout><NotFound /></DocsLayout>} />
      </Routes>
  );
};

export default AppRoutes;
