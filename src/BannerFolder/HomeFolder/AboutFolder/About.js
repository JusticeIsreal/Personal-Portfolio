import "./AboutStyle.css";
import { useReducer } from "react";
import { SiIbm, SiScrumalliance } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import reducer from "../../../Reducer/Reducer";
import Pitch from "./Pitch";

const initialState = {
  readAboutMe: false,
};
function About() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const readMore = () => {
    if (state.readAboutMe === false) {
      dispatch({ type: "ABOUTME_CLOSE" });
    } else {
      dispatch({ type: "ABOUTME_OPEN" });
    }
  };

  return (
    <main className="aboutMe">
      <div className="aboutMe-container">
        <h3 id="About">{"//002.    .     <p> ABOUT ME  </p>"}</h3>
      </div>
      <div className="mappedHeading">
        <h3>MyPitch :</h3>
      </div>
      {Pitch.map((item) => (
        <div key={item.id} className="mappedDetails">
          <span>
            {state.readAboutMe ? (
              <span>
              {item.myPitch}
              </span>
            ) : (
              <span>"{item.myPitch.substring(0, 120)} ..."</span>
            )}
            <button className="readMore" onClick={readMore}>
              {state.readAboutMe ? "Read less" : "Read more"}
            </button>
          </span>
        </div>
      ))}
      <section className="myStaticsCon">
        <div className="statCard">
          <h1>
            <HiCode />
          </h1>
          <p>Software Developer</p>
        </div>
        <div className="statCard">
          <h1>
            <SiIbm />
          </h1>
          <p>Project Manager</p>
        </div>
        <div className="statCard">
          <h1>
            <SiScrumalliance />
          </h1>
          <p>Scrum Master</p>
        </div>
      </section>
      <div className="pun">
        <marquee className="slideCon">
          <p>
            {"❖ Full Stack Developer "}
            {
              "❖ IBM Engineering Systems Design Rhapsody for Model Based Systems Engineering (IBM) ❖"
            }
            {" Scrum Fundamentals Certified (SFC) ❖"}
            {" Desktop Application Development ❖"}
            {
              " Master Project Manager - International Project Management Board Certification (MPM) ❖"
            }
            {" Project management fundamentals (IBM) ❖"}
          </p>
        </marquee>
      </div>
    </main>
  );
}

export default About;
