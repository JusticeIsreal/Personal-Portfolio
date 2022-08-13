import "./AboutStyle.css";
import { useReducer } from "react";
import { BiUpArrow } from "react-icons/bi";
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
        <h3>{"//002.    .     <p> ABOUT ME ? </p>"}</h3>
      </div>
      <div className="mappedHeading">
        <h3>MyPitch:</h3>
        <p
          className="readMore"
          onClick={() => {
            readMore();
          }}
        >
          {state.readAboutMe ? (
            <p>
              {"Read less"}
              <BiUpArrow />
            </p>
          ) : (
            "Read more"
          )}
        </p>
      </div>

      {Pitch.map((item) => (
        <div key={item.id} className="mappedDetails">
          <p>
            {state.readAboutMe ? (
              <p>
                {item.myPitch}
                {item.motto.map((m) => (
                  <div key={m.id}>
                    <p>{m.strength}</p>
                  </div>
                ))}
              </p>
            ) : (
              <>
                "{item.myPitch.substring(0, 120)} ..."
                <p
                  className="readMore"
                  onClick={() => {
                    readMore();
                  }}
                >
                  {state.readAboutMe ? (
                    <p>
                      {"Read less"}
                      <BiUpArrow />
                    </p>
                  ) : (
                    "Read more"
                  )}
                </p>
              </>
            )}
          </p>
        </div>
      ))}

      <section className="myStaticsCon">
        <div className="statCard">
          <h1>
            300<sup>+</sup>
          </h1>
          <p>Susccessful Projects</p>
        </div>
        <div className="statCard">
          <h1>
            200<sup>+</sup>
          </h1>
          <p>Super Happy Clients</p>
        </div>
        <div className="statCard">
          <h1>
            2<sup>+</sup>
          </h1>
          <p>Years Experience</p>
        </div>
      </section>
      <p className="punchLine">
        Giving LIFE to your IDEAS and SOLUTIONS to real-life PROBLEMS{" "}
      </p>
    </main>
  );
}

export default About;
