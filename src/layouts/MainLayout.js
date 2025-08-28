import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/MainLayout.css";

export default function MainLayout({ children }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => { setMenuOpen(prev => !prev); console.log(menuOpen) };
  const location = useLocation();
  // pages jahan large screen pe sidebar hide hoga
  const hideSidebarOn = ["/", "/blog"];
  const hideSidebar = hideSidebarOn.includes(location.pathname);

  return (
    <div>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      <div className="main-layout">
        <main>{children}</main>
        <Footer type="main" />
      </div>
      {/* Sidebar: always rendered but hide on large screens*/}
      <Sidebar menuOpen={menuOpen} hideSidebar={hideSidebar} setMenuOpen={setMenuOpen} />
    </div>
  );
}