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
                {" "}
                Hi, I am JUSTICE ISREAL AGBONMA, a graduate of Maritime Academy
                of Nigeria with a First Class in Marine Engineering Technology.
                I am currently a full-stack web developer looking forward to new
                opportunities. I've found in software development creative ways
                to fulfill my desire for solutions to different kinds of
                problems. I create technological solutions using computer
                programming using technologies such as HTML, CSS, Bootstrap ,
                JavaScript, React Js & Redux, Node and Express js , MongoDB ,
                MySQL , PostgreSQL and React Native for Cross platform mobile
                Applications. I have spent the last 2 years working in the
                maritime industry and also providing IT and technical support
                for different companies within and outside Nigeria. I'm
                passionate about learning new things and collaborating with
                teammates, So, if you'd like to know a little more about me feel
                free to contact me directly at Justiceyba@gmail.com or send me a
                connection request, I'll be glad to talk to you 😊"
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
