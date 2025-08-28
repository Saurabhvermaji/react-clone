import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";
import "../styles/scrollbar.css";
import { useState, useEffect } from "react";

const Sidebar = ({ menuOpen, hideSidebar, setMenuOpen }) => {
  const location = useLocation();
  const defaultLinks = [
    {
      title: "GET STARTED",
      items: [
        { path: "/learn/QuickStart", label: "Quick Start" },
        { path: "/learn/tutorial-tic-tac-toe", label: "Tutorial: Tic Tac Toe" },
        { path: "/learn/thinking-in-react", label: "Thinking In React" },
        { path: "/learn/installation", label: "Installation" },
        { path: "/learn/setup", label: "Setup" },
        { path: "/learn/react-compiler", label: "React Compiler" },
      ],
      title: "GET STARTED",
    },
    {
      title: "LEARN REACT",
      items: [
        { path: "/learn/describing-the-ui", label: "Describing The UI" },
        { path: "/learn/adding-interactivity", label: "Adding Interactivity" },
        { path: "/learn/managing-state", label: "Managing State" },
        { path: "/learn/escape-hatches", label: "Escape Hatche" },
      ],
    },
  ]

  const referenceLinks = [
    {
      title: "react@19.1",
      items: [
        { path: "/reference/overview", label: "Overview" },
        { path: "/reference/hooks", label: "Hooks" },
        { path: "/reference/components", label: "Components" },
        { path: "/reference/api", label: "API" },
      ],
    },
    {
      title: "react-dom@19.1",
      items: [
        { path: "/reference/hooks", label: "Hooks" },
        { path: "/reference/components", label: "Components" },
        { path: "/reference/api", label: "API" },
        { path: "/reference/client-api", label: "Client API" },
        { path: "/reference/server-api", label: "Server API" },
        { path: "/reference/static-api", label: "Static API" },
      ],
    },
    {
      title: "React Compiler",
      items: [
        { path: "/reference/react-configuration", label: "React Configuration" },
        { path: "/reference/directives", label: "Directives" },
        { path: "/reference/compiling-libraries", label: "Compiling Libraries" },
      ],
    },
    {
      title: "Rules Of React",
      items: [
        { path: "/reference/Overview", label: "Overview" },
      ],
    },
    {
      title: "React Server Components",
      items: [
        { path: "/reference/server-component", label: "Server Component" },
        { path: "/reference/server-fomponent", label: "Server Function" },
        { path: "/reference/directives", label: "directives" },
      ],
    },
    {
      title: "Legacy APIs",
      items: [
        { path: "/reference/legacy", label: "Legacy React APIs" },
      ],
    },
  ]

  const communityLinks = [
    {
      title: "GET INVOLVED",
      items: [
        { path: "/community/conference", label: "React Conference" },
        { path: "/community/meetups", label: "react Meetups" },
        { path: "/community/videos", label: "react Videos" },
        { path: "/community/team", label: "Meet the team" },
        { path: "/community/contribution", label: "Docs contribution" },
        { path: "/community/tranaslations", label: "Tranaslations" },
        { path: "/community/acknowledgement", label: "Acknowledgement" },
        { path: "/community/versioning-policy", label: "versioning Policy" },
      ],
    },
  ]
  const [linkGroups, setLinkGroups] = useState(defaultLinks);

  useEffect(() => {
    showLinks();
  }, [location.pathname]);

  const showLinks = () => {
    const path = location.pathname;

    if (path.startsWith("/learn")) {
      setLinkGroups(defaultLinks);
    }
    else if (path.startsWith("/reference")) {
      setLinkGroups(referenceLinks);
    }
    else if (path.startsWith("/community")) {
      setLinkGroups(communityLinks);
    }
    else {
      setLinkGroups(defaultLinks);
    }
  };

  return (
    <>
      <div className={`sidebar ${menuOpen ? "open" : ""} ${hideSidebar ? "hide-large" : ""}`}>
        <div className="sidebar-mainlinks">
          <Link to="/learn" onClick={() => setMenuOpen(false)}>Learn</Link>
          <Link to="/reference" onClick={() => setMenuOpen(false)}>Reference</Link>
          <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        </div>
        <hr className="hr" />
        {linkGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="sidnavsection">
            <h4>{group.title}</h4>
            {group.items.map((link, linkIndex) => (
              <div className="sidnavlinkbox" key={linkIndex}>
                <Link to={link.path} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              </div>
            ))}
            <hr className="hr" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;