import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const NavBar = () => {
  const toggleBurger = () => {
    const burgerIcon = document.querySelector("#burger");
    const navbarMenu = document.querySelector("#nav-links");

    burgerIcon.addEventListener("click", () => {
      navbarMenu.classList.toggle("is-active");
    });
  };
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <Link href="/">
              <Image
                src={logo}
                width="100"
                height="100"
                alt="SwiftlyBox Logo"
              />
            </Link>
          </a>

          
        </div>

        <div  className="navbar-menu" id="nav-links">
          <div className="navbar-start">
            <Link href="/onBoard">
              <a className="navbar-item">Become a Partner</a>
            </Link>
            <Link href="/SwiftlyDriver">
              <a className="navbar-item">Become a SwiftlyDriver</a>
            </Link>
            <Link href="/">
              <a className="navbar-item">About Us</a>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link href="https://tally.so/r/3q4x49">
                  <a className="navbar-item">Contact</a>
                </Link>
                <hr className="navbar-divider" />
                <Link href="https://tally.so/r/wbZZ1E">
                  <a className="navbar-item">Report an issue</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
