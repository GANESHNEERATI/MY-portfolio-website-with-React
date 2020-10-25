import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Sidebar(tg, handle_toggle) {
  let drawerclasses = "side_drawer";
  if (tg) {
    drawerclasses = "side_drawer open";
  }
  return (
    <div>
      <nav className={drawerclasses}>
        <ul onClick={handle_toggle}>
          <li>
            <Link to="/" className="link_color">
              <Button>About me</Button>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link_color">
              <Button>Projects</Button>
            </Link>
          </li>
          <li>
            <Link to="/work" className="link_color">
              <Button>Work</Button>
            </Link>
          </li>
          <li>
            <Link to="/education" className="link_color">
              <Button>Education</Button>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link_color">
              <Button>Contact me</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
