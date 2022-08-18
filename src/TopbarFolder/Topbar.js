import React from "react";
import { useReducer } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";
import "./TopbarStyle.css";
import reducer from "../Reducer/Reducer";
import { Link } from "react-router-dom";

const initialState = {
  menuShow: false,
  readAboutMe: false,
};

// COMPONENT STATR
function Topbar() {
  // useReducer declaration
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef declaration

  // Menu btn click function
  const toggleMenu = () => {
    if (state.menuShow === false) {
      dispatch({ type: "MENU_TOGGLE" });
    } else {
      dispatch({ type: "MENU_TOGGLE2" });
    }
  };

  return (
    <section className="first">
      <div className="topbar">
        <a href="/">
          <h3> AJIS </h3>
        </a>
        <nav>
          <ul className={`${state.menuShow ? "openMenu" : "closeMenu"}`}>
            <a href="#About">
              <li>About</li>
            </a>
            <a href="#Services">
              <li>Services</li>
            </a>
            <a href="#Portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#Contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
        <div className="social-media">
          <li>
            <a href="https://github.com/JusticeIsreal" target="blank">
              <FaGithubSquare className="social-icon git" />
            </a>
            <a
              href="https://www.linkedin.com/in/justice-isreal-agbonma-314bbb188/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BfvAOUKn7RO2bADRrc36z8g%3D%3D"
              target="blank"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://justiceyba@gmail.com" target="blank">
              <FaMailBulk className="social-icon mail" />
            </a>
            <a href="https://www.facebook.com/justice.agbonma" target="blank">
              <FaFacebookSquare className="social-icon fb" />
            </a>
          </li>
          <div className="social-media-follow-me">
            <p>CONNECT</p>
          </div>
        </div>
        <div className="topmenu-icon" onClick={() => toggleMenu()}>
          {state.menuShow ? (
            <ImMenu4 className="menu-btn" />
          ) : (
            <ImMenu3 className="menu-btn" />
          )}
        </div>
      </div>
    </section>
  );
}

export default Topbar;
