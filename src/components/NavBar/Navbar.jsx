import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Effect to handle navbar shrink on scroll
  // This effect adds a class to the navbar when the user scrolls down

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup عشان مايحصلش memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // const [useScroll, setuseScroll] = useState(false);
  // window.addEventListener("scroll", function () {
  //   if (scrollY > 0) {
  //     setuseScroll(true);
  //   } else {
  //     setuseScroll(false);
  //   }
  // });



  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg ${useScroll ? "shrink" : ""}`}> */}
            <nav className="navbar navbar-expand-lg ">

        <div className="container">
          <Link className="navbar-brand" to="/Home">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/About">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
