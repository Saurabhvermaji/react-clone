import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footar from "../components/Footer";
import "../styles/docs-layout.css";

const DocsLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="docs-layout">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="sidebar" />
        <div className="docs-content-area">
          <main className="docs-main">{children}</main>
          <Footar type="docs" />
        </div>
      </div>
    </>
  );
};

export default DocsLayout;
