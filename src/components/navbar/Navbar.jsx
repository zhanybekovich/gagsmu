import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

import "./navbar.scss";

const links = ["Буйруктар", "Усулдук көрсөтмөлөр", "Типтүү устав", "Этаптар"];

const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <nav className={stickyNav ? "navbar--active" : "navbar"}>
      <div className="container">
        <div className="navbar-inner">
          <Link className="navbar-link" to="/">
            Башкы бет
          </Link>
          <button className="navbar-toggle" onClick={handleMenuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
          <ul className={menuOpen ? "navbar-menu--active" : "navbar-menu"}>
            {links.map((link, index) => (
              <li key={index + link}>
                <a className="navbar-link" href={`#${link}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
