import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header({ handle_toggle }) {
  const [mstate, SetMenustate] = useState(false);

  const handleMenuState = () => {
    SetMenustate(!mstate);
    handle_toggle();
  };

  return (
    <div className="header">
      <div className="header__left">
        <div>
          {mstate ? (
            <CloseIcon
              fontSize="large"
              className="menu__close"
              onClick={handleMenuState}
            />
          ) : (
            <MenuIcon
              fontSize="large"
              className="menu__icon"
              onClick={handleMenuState}
            />
          )}
        </div>
        <h3>Portfolio</h3>
      </div>

      <div className="header__right">
        <ul className="nav">
          <li>
            <Link to="/" className="link_color">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link_color">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/work" className="link_color">
              Work
            </Link>
          </li>
          <li>
            <Link to="/education" className="link_color">
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link_color">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
