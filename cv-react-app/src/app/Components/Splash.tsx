import React from "react";
import style from "./Splash.module.css";

const Splash = () => {
  return (
    <section className={style.splash}>
      <h1>Alexis Dogins</h1>
      <div className={style.intro}>
        <img
          id="headshot"
          src="images/Headshot.jpg"
          alt="headshot photo"
          width="200px"
        ></img>
        <p className={style.info}>
          Lawrenceville, GA &#x25CF; 770-608-3513 &#x25CF; amdogins@gmail.com
        </p>
      </div>
      <p className={style.statement}>
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
