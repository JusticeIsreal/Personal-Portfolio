import React from "react";
import { useRef, useReducer } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import "./TopbarStyle.css";
import reducer from "../Reducer/Reducer";

const initialState = {
  menuShow: false,
  
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
    <section>
      <div className="topbar">
        <h3> Justice </h3>
        <nav>
          <ul className={`${state.menuShow ? "openMenu" : "closeMenu"}`}>
            <li>About</li>
            <li>Education</li>
            <li>Skill</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="social-media">
          <li>
            <FaFacebookSquare className="social-icon" />
            <FaFacebookSquare className="social-icon" />
            <FaFacebookSquare className="social-icon" />
            <FaFacebookSquare className="social-icon" />
          </li>
          <div className="social-media-follow-me">
            <p> FOLLOW ME</p>
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
