import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./navBar.css";

const Layout = () => {
  return (
    <div className="section-small">
      <nav className="navbar">
        <span className="navbar-item">
          <Link className="link-item" to="/">
            HOME
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/martialarts">
            MARTIAL ARTS
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/timetable">
            TIME TABLE
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/membership">
            MEMBERSHIP
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/team">
            THE TEAM
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/team">
            AMENITIES
          </Link>
        </span>
        <span className="navbar-item">
          <Link className="link-item" to="/contact">
            CONTACT
          </Link>
        </span>
        <span className="search-item">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <div className="search-bar-section">
          <input className="search-bar" type="text" placeholder="Search..." />
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
