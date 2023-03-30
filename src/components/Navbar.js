import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-lg-3 px-lg-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Abhishek
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-lg-2">
              <a className="nav-link text-dark" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item px-lg-2">
              <a
                className="nav-link text-dark"
                href="/index.html#myportfolio_about"
              >
                About
              </a>
            </li>
            <li className="nav-item px-lg-2">
              <a className="nav-link text-dark" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item px-lg-2">
              <a className="nav-link text-dark" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
