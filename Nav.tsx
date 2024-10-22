import React from "react";

const Nav = () => {
  return (
    <nav>
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
