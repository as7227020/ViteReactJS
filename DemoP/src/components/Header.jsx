import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });
  return (
    <>
      <NavBar>
        <NavRoute>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </NavRoute>
      </NavBar>
      <ProgressBar style={{ scaleX }} />
    </>
  );
};

export default Header;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #fff;
  transform-origin: 0%;
  z-index: 9999;
`;

const NavBar = styled.div`
  min-height: 80px;
  background-color: #222831;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: sticky;
  top: 0;
`;

const NavRoute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    letter-spacing: 2px;
  }

  a.active {
    text-decoration: underline;
  }
  img {
    width: 40px;
    margin-right: 10px;
  }
`;