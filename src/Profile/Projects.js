import React from "react";
import "./Projects.css";
import netflex from "../Assets/netflex.JPG";
import airbnb from "../Assets/Airbnb.JPG";
import Discord from "../Assets/Discord.JPG";
import Instagram from "../Assets/instagram.JPG";
import Tinder from "../Assets/Tinder.JPG";

function Projects() {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <div className="project">
        <div className="projects__left">
          <h3>Netflex clone</h3>
          <p>
            developed Netflex clone using React and HTML,CSS and used thrid
            party api for pulling all movie realated information and deployed in
            firebase
          </p>
        </div>
        <div className="projects__right">
          <img src={netflex} alt="NetflexClone" />
          <button>
            <a href="https://netflix-clone-84d8f.web.app/">View Project </a>
          </button>
        </div>
      </div>
      <div className="project">
        <div className="projects__left">
          <h3>Airbnb clone</h3>
          <p>
            Developed Airbnb clone using Reactjs and deployed in google firebase
            used Technologies:-Reactjs,CSS,HTML,Material UI,React Routing
            Deployent:google firebase
          </p>
        </div>
        <div className="projects__right">
          <img src={airbnb} alt="NetflexClone" />
          <button>
            <a href="https://airbnb-clone-c8eff.web.app/">View Project</a>
          </button>
        </div>
      </div>
      <div className="project">
        <div className="projects__left">
          <h3>Discord-clone</h3>
          <p>
            Discord clone is chat application developed using Reactjs and Nodejs
            used Redux for state management and Pusher for Realtime triggering
            between front end and backend and user authentication done google
            authentication
            <p>front end: Reactjs ,Redux,CSS</p>
            <p>
              Backend:nodejs, express js,Cors,Pusher,Mongoose Database:MongoDB
            </p>
          </p>
        </div>
        <div className="projects__right">
          <img src={Discord} alt="NetflexClone" />
          <button>
            <a href="https://discord-clone-7fbd8.web.app/">View Project</a>
          </button>
        </div>
      </div>
      <div className="project">
        <div className="projects__left">
          <h3>Instagram clone</h3>
          <p>
            Successfully done Instagram clone using Reactjs and google firebase
            and deployed in google firebase we can post photos and comment on
            photos.
          </p>
          <p>front end:Reactjs, css, material UI</p>
          <p>backend: firebase</p>
        </div>
        <div className="projects__right">
          <img src={Instagram} alt="NetflexClone" />
          <button>
            <a href="https://instagram-clone-react-cdde8.web.app/">
              View Project
            </a>
          </button>
        </div>
      </div>
      <div className="project">
        <div className="projects__left">
          <h3>Tinder clone</h3>
          <p>Developed Tinder clone with ReactJS and nodejs</p>
          <p>
            frontend used with React Router for Routing and React Contex API for
            State Management and MaterialUI
          </p>
          <p>Backend: nodejs ,Express,Mongoose,Bcrypt</p>
          <p>
            Security: JWT tokens used Signin and Hashed the Plain password in
            Mongoose DB using Bcrypt and api end points protected by JWT
          </p>
          <p>Cloud: Used cloudinary for Storing Media information</p>
          <p>Database:MongoDb</p>
          <p>deployment:</p>
          <p>front end:firebase</p>
          <p>backend:heroku</p>
        </div>
        <div className="projects__right">
          <img src={Tinder} alt="NetflexClone" />
          <button>
            <a href="https://tinder-clone-76cc7.web.app/">View Project</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
