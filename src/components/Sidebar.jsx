import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
           Library Management
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            <i className="fas fa-fw fa-table"></i>
            <span>Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/book-record">
            <i className="fas fa-fw fa-table"></i>
            <span>Book Records</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/author-record">
            <i className="fas fa-fw fa-table"></i>
            <span>Author Records</span>
          </Link>
        </li>
      </ul>
      {/* <!-- End of Sidebar --> */}
    </div>
  );
}

export default Sidebar;
