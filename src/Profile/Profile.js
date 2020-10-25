import React from "react";
import "./Profile.css";
import pic from "../Assets/Profile.jpg";
import resume from "../Assets/resume.pdf";

function Profile() {
  const viewResume = () => {
    window.open(resume);
  };
  return (
    <div className="profile">
      <div className="profile__information">
        <img src={pic} alt=""></img>
        <div className="profile__information1">
          <h3>Neerati Ganesh</h3>
          <h4>@ganesh neerati</h4>
          <p>lives in chennai</p>
          <p> 1.5 years experience as a full stack Developer</p>
          <p> Passionate for open source technology</p>
          <p>tech freak</p>
        </div>
      </div>

      <button onClick={viewResume}>View Resume </button>
    </div>
  );
}

export default Profile;
