import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <p id="name">
        <a className="active" href="index.html">
          Alexis Dogins
        </a>
      </p>
      <p id="contact">
        <a href="contact.html">Contact Alexis</a>
      </p>
    </nav>
  );
};
export default Nav;
