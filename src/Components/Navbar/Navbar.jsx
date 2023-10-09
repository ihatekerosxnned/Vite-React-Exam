import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1 className={styles.brand}>RV Roadtrek Hub</h1>
          </a>

          <a
            role="button"
            className={`navbar-burger ${isMenuActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Shop</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Categories</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Smol Boi RV</a>
                <a className="navbar-item">Big Boi RV</a>
                <a className="navbar-item">Rawr Rawr</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
