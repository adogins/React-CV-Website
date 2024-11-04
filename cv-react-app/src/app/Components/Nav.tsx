import React from "react";
import style from "./Nav.module.css";
import { Person } from "../page";
import Link from "next/link";
import Home from "../page";

export default function Nav({ person }: { person: Person }) {
  return (
    <nav className={style.nav}>
      <p id="name">
        <Link href="/">Alexis Dogins</Link>
        {/*<a className="active" href="/">
          Alexis Dogins
        </a>
  */}
      </p>
      <p id="contact">
        <a className="active" href="/contact-page">
          Contact Alexis
        </a>
      </p>
    </nav>
  );
}
