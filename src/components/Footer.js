import "./../styles/footer.css";
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaTwitter, FaGlobe } from 'react-icons/fa';

const Footar = ({ type }) => {
  return (
    <>
      <footer className={`footer ${type === "docs" ? "docs-footer" : "main-footer"}`}>
        <div className="footer-header">
          <p className="footer-title">Meta Open Source</p>
          <p className="footer-description">
            Get Started Copyright © Meta Platforms, Inc
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <p className="column-title">Learn React</p>
            <ul>
              <li><Link>Quick Start</Link></li>
              <li><Link>Installation</Link></li>
              <li><Link>Describing UI</Link></li>
              <li><Link>Adding Interactivity</Link></li>
              <li><Link>Managing State</Link></li>
              <li><Link>Escape Hatches</Link></li>
              <li><Link>APIs</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="column-title">Community</p>
            <ul>
              <li><Link >React Meetups</Link></li>
              <li><Link>Discord</Link></li>
              <li><Link >Github</Link></li>
              <li><Link >StackOverflow</Link></li>
              <li><Link >Events</Link></li>
              <li><Link >Twitter</Link></li>
              <li><Link >Open Source</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="column-title">Reference</p>
            <ul>
              <li><Link >Hooks</Link></li>
              <li><Link >Components</Link></li>
              <li><Link >JSX</Link></li>
              <li><Link >Rendering</Link></li>
              <li><Link >Lifecycle</Link></li>
              <li><Link >Reconciliation</Link></li>
              <li><Link>Optimization</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="column-title">Blog</p>
            <ul>
              <li><Link>New Releases</Link></li>
              <li><Link>React Conf</Link></li>
              <li><Link>Performance</Link></li>
              <li><Link >Security</Link></li>
              <li><Link >React 19</Link></li>
              <li><Link >History</Link></li>
              <li><Link>Community Posts</Link></li>
            </ul>
            <div className="foot_icon_box">
              <FaGithub className="foot_icon" />
              <FaFacebook  className="foot_icon"/>
              <FaTwitter  className="foot_icon"/>
              <FaGlobe  className="foot_icon"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footar;
