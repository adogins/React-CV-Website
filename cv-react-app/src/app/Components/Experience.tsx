import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={style.experience}>
      <h2>Leadership and Experience</h2>
      <dl className={style.detail}>
        <dt className={style.detail2}>
          <a href="https://www.microsoft.com/en-us/">
            Microsoft Internship (or a different internship)
          </a>
        </dt>
        <dd className={style.dates}>
          <i>May 2025 - August 2025</i>
        </dd>
        <dt className={style.detail2}>
          Madison Morgan Community Food Pantry Volunteer
        </dt>
        <dd className={style.dates}>
          <i>September 2021 – August 2022</i>
        </dd>
      </dl>
    </section>
  );
};
export default Experience;
