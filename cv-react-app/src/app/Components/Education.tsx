import React from "react";
import style from "./Education.module.css";

const Education = () => {
  return (
    <section className={style.education}>
      <h2>Education</h2>
      <dl>
        <dt>
          <b>Univeristy of Georgia</b>, Frankling College of Arts & Sciences
        </dt>
        <dd>Athens, GA</dd>
        <dt>
          <i>Bachelor of Science - Computer Science</i>
        </dt>
        <dd>May 2026</dd>
        <dd>GPA: 3.96/4.00</dd>
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
