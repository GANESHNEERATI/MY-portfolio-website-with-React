import React from "react";
import "./Work.css";

function Work() {
  return (
    <div className="work">
      <h3> Work</h3>
      <div className="work__info">
        {/*  title*/}
        <h3>Associate Software Engineer</h3>

        {/* location with  daate*/}
        <div className="work__info__location">
          <h4>Virtusa,</h4>
          <h5> Chennai,India 2019 to present</h5>
        </div>

        {/* work description */}
        <div className="work__desc">
          <p>
            As a Software Engineer working for one of UK major Teleclom Client
            for various telecom prooducts developing application using
            React,nodejs,Spring Boot and SQL
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
