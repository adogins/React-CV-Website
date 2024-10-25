import React from "react";
import style from "./Projects.module.css";
import { StyleRegistry } from "styled-jsx";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className={style.threeCol}>
        <div className={style.card}>
          <img src="images/DevDogs.png" alt="DevDogs website"></img>
          <hr></hr>
          <h3>DevDogs Website</h3>
          <div className={style.container}>
            <ul>
              <li>
                Contribute to the website using HTML, CSS, JavaScript, React,
                and Next,js.
              </li>
              <li>
                Correct issues brought up by the administrators and clean up
                inconsistencies in the code.
              </li>
              <li>
                Create new pages or sections in the specified time, usually
                comleting tasks ahead of schedule.
              </li>
              <li>
                Collaborate with other contributors of the website to ensure
                proper functionality of the website.
              </li>
            </ul>
          </div>
        </div>
        <div className={style.card}>
          <img src="images/SaveOurWorld.png" alt="Save Our World logo"></img>
          <hr></hr>
          <h3>Save Our World</h3>
          <div className={style.container}>
            <ul>
              <li>Utilized Unity to build a VR game environment.</li>
              <li>
                Learned C# as a new programming language to implement actions to
                game objects.
              </li>
              <li>
                Practiced collaboration and communication with group members
                while assigning tasks to be completed.
              </li>
              <li>
                Competed in a hackathon resulting in flexibility in planning as
                well as moving deadlines.
              </li>
            </ul>
          </div>
        </div>
        <div className={style.card}>
          <img src="images/ApiApp.png" alt="Api app image"></img>
          <hr></hr>
          <h3>Airport API App</h3>
          <div className={style.container}>
            <ul>
              <li>Implemented the app using JavaFX as the UI.</li>
              <li>
                Utilized RESTful APIs in the format of JSON strings to request
                data and add it to be presented in the UI.
              </li>
              <li>
                Incorporated Java to build the front-end and backend for the
                app.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
