import React from "react";
import style from "./Nav.module.css";
//import Link from "next/link";
//import contact from "../contact-page/contact-page";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <p id="name">
        <a className="active" href="../contact-page/contact-page">
          Alexis Dogins
        </a>
      </p>
      <p id="contact">
        <a href="../contact-page/contact-page.tsx">Contact Alexis</a>
      </p>
    </nav>
  );
};
export default Nav;
