import React from "react";
import "./Aboutme.css";

function Aboutme() {
  return (
    <div className="aboutme">
      <div className="aboutme_info">
        <div className="aboutme__information">
          <h3>About me</h3>
          <section>
            I merge a passion for usability and user experience with technical
            knowledge to create cool digital experiences.
          </section>
          <section>
            My repertoire includes programming languages and tools such as
            ReactJS,NodeJS,ExpressJS,Java,Python,Javascript ,jQuery, Spring
            Framework and more.
          </section>
        </div>
        <div className="aboutme_skills">
          <h3>Skills</h3>
          <div className="aboutme__buttons">
            <button>ReactJS</button>
            <button>NodeJS</button>
            <button>ExpressJS</button>
            <button>Java</button>
            <button>Python</button>
          </div>
        </div>
        <div className="aboutme_profiles">
          <h3>Profiles</h3>
          <div className="aboutme__profileLinks">
            <a href="https://github.com/GANESHNEERATI">Github</a>
            <a href="https://www.linkedin.com/in/ganesh-neerati-337a15118/">
              Linkdin
            </a>
            <a href="https://angel.co/u/neerati-ganesh">Anglelist</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
