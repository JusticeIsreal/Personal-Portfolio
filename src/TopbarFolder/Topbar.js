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
        <h3> AJIS </h3>
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
            <FaGithubSquare className="social-icon git" />
            <FaLinkedin className="social-icon linkedin" />
            <FaMailBulk className="social-icon mail" />
            <FaFacebookSquare className="social-icon fb" />
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
