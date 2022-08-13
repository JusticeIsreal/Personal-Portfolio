import "../AboutFolder/AboutStyle.css";
import { useReducer } from "react";
import reducer from "../Reducer/Reducer";
import Pitch from "../AboutFolder/Pitch";

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
          onClick={() => {
            readMore();
          }}
        >
          {state.readAboutMe ? "Read more" : "Read less"}
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
              ""
            )}
          </p>
        </div>
      ))}
    </main>
  );
}

export default About;
