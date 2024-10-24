import React from "react";
import Image from "next/image";
import profilePic from "public/images/Headshot.jpg";

const Splash = () => {
  return (
    <section className="splash">
      <h1>Alexis Dogins</h1>
      <div className="intro">
        <img
          id="headshot"
          src={profilePic}
          alt="headshot photo"
          width="200px"
        ></img>
        <p id="info">
          Lawrenceville, GA &#x25CF; 770-608-3513 &#x25CF; amdogins@gmail.com
        </p>
      </div>
      <p id="statment">
        <i>
          A college student seeking to obtain skills and knowledge which will
          enhance my ability to apply what I learn as I embark on my career
          endeavors in computer science. I look forward to expanding my skill
          set as well as contributing my technical skills along with my
          collaborative and communication skills. I'm interested in software
          engineering and web development.
        </i>
      </p>
    </section>
  );
};
export default Splash;
