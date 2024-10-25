import React from "react";
import style from "./Honor.module.css";

const Honors = () => {
  return (
    <section className={style.honors}>
      <h2>Honors and Awards</h2>
      <dl className={style.detail}>
        <dt className={style.detail2}>
          <b id="starter">Dean's List</b>
        </dt>
        <dd className={style.detail3}>
          <i>Spring 2023, 2024</i>
        </dd>
        <dt className={style.detail2}>
          <b id="starter">Presidential Scholar</b>
        </dt>
        <dd className={style.detail3}>
          <i>Fall 2023</i>
        </dd>
        <dt className={style.detail2}>
          <b id="starter">Zell Miller Scholarship Recipient</b>
        </dt>
        <dd className={style.detail3}>
          <i>Fall 2022 - Fall 2024</i>
        </dd>
      </dl>
    </section>
  );
};
export default Honors;
