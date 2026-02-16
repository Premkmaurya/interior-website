import React, { useRef, useState } from "react";
import {
  RiCloseLargeLine,
  RiMenu2Fill,
  RiShoppingCart2Line,
  RiUserLine,
} from "@remixicon/react";
import gsap from "gsap";
import "./Nav.scss";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    if (isSidebarOpen) return;
    setIsSidebarOpen(true);
    gsap.to(sidebarRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(backdropRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const closeSidebar = () => {
    if (!isSidebarOpen) return;
    gsap.to(sidebarRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => setIsSidebarOpen(false),
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__menu">
          <span className="navbar__menu-icon" onClick={openSidebar}>
            <RiMenu2Fill />
          </span>
        </div>
        <div className="navbar__logo">Norrlands trä</div>
        <div className="navbar__actions">
          <span
            onClick={() => navigate("/login")}
            className="navbar__actions-icon"
          >
            <RiUserLine />
          </span>
          <span
            onClick={() => navigate("/cart")}
            className="navbar__actions-icon"
          >
            <RiShoppingCart2Line />
          </span>
        </div>
      </nav>
      {isSidebarOpen && (
        <div
          className="sidebar__backdrop"
          ref={backdropRef}
          onClick={closeSidebar}
        ></div>
      )}
      <div className="sidebar" ref={sidebarRef}>
        <h1>Norrlands trä</h1>
        <ul>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeSidebar}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>
        <span className="sidebar__close-icon" onClick={closeSidebar}>
          <RiCloseLargeLine />
        </span>
      </div>
    </>
  );
};

export default Nav;
