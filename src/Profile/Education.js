import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      <div className="education__school">
        <h3>Bachelor of Technology</h3>
        <h4>JNTUH,Hyderabad,India</h4>
        <ul>
          <li>Java </li>
          <li>Databases</li>
          <li>Web Technologies</li>
          <li>Algorithems and Data Structures</li>
        </ul>
        <p>
          Successsfully Done Bachelor of Technology in Computer Science Stream
          Where I learned all core Subjects of Computer Science
        </p>
      </div>
      <div className="education__school">
        <h3>Diploma</h3>
        <h4>VMR Polytechnic,Warangal,India</h4>
        <ul>
          <li>Java </li>
          <li>Databases</li>
          <li>Web Technologies</li>
          <li>Algorithems and Data Structures</li>
        </ul>
        <p>
          Successsfully Done Diploma in Computer Engineering Stream Where I
          learned all core Subjects of Computer Science
        </p>
      </div>
      <div className="education__school">
        <h3>HighSchool</h3>
        <h4>ZPPSS Kondaparthy,Warangal,India</h4>
        <ul>
          <li>Math</li>
          <li>Physics</li>
          <li>Chemistry</li>
        </ul>
        <p>
          Successsfully Complete High School Education Majorly in Math and other
          subjects
        </p>
      </div>
    </div>
  );
}

export default Education;
