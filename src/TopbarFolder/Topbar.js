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
        <h3> Justice </h3>
        <nav>
          <ul className={`${state.menuShow ? "openMenu" : "closeMenu"}`}>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
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
