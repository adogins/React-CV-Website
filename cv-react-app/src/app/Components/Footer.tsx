import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        &copy; &nbsp; <a href="./contact.html">Alexis Dogins</a> &nbsp; &sdot;
        &nbsp;{" "}
        <a href="https://www.linkedin.com/in/alexis-dogins-46343830b">
          <i className="fab fa-linkedin"></i>
        </a>
      </p>
    </footer>
  );
};
export default Footer;
