import React from "react";
import style from "./Footer.module.css";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        &copy; &nbsp; <a href="./contact.html">Alexis Dogins</a> &nbsp; &sdot;
        &nbsp;{" "}
        <a href="https://www.linkedin.com/in/alexis-dogins-46343830b">
          <CiLinkedin className={style.linkedin} />
        </a>
      </p>
    </footer>
  );
};
export default Footer;
