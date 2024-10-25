import React from "react";
import style from "./Education.module.css";

const Education = () => {
  return (
    <section className={style.education}>
      <h2>Education</h2>
      <dl className={style.detail}>
        <dt className={style.detail2}>
          <b>Univeristy of Georgia</b>, Frankling College of Arts & Sciences
        </dt>
        <dd className={style.detail3}>Athens, GA</dd>
        <dt className={style.detail2}>
          <i> Bachelor of Science - Computer Science</i>
        </dt>
        <dd className={style.detail3}>May 2026</dd>
        <dd className={style.detail3}>GPA: 3.96/4.00</dd>
      </dl>
      <p>
        <b id="starter">Relevant Courses:</b> Software Development, Discrete
        Mathematics, Calculus II for Science and Engineering, Introduction to
        Theory of Computing, Data Structures
      </p>
    </section>
  );
};
export default Education;
