import React from "react";
import Home from "../HomeFolder/Home";
import "./BannerStyle.css";
import "../App.css";
import { useRef } from "react";

// import BannerBg from "../images/PortfolioBg.jpg"

function Banner() {
  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);
  const eyeBalls = (e) => {
    let x =
      eyeRef1.current.getBoundingClientRect().left +
      eyeRef1.current.clientWidth / 2;
    let y =
      eyeRef1.current.getBoundingClientRect().top +
      eyeRef1.current.clientHeight / 2;
    let radian = Math.atan2(e.pageX - x, e.pageY - y);
    let rotation = radian * (180 / Math.PI) * -1 + 270;
    eyeRef1.current.style.transform = "rotate(" + rotation + "deg)";

    let a =
      eyeRef2.current.getBoundingClientRect().left +
      eyeRef2.current.clientWidth / 2;
    let b =
      eyeRef2.current.getBoundingClientRect().top +
      eyeRef2.current.clientHeight / 2;
    let radian2 = Math.atan2(e.pageX - a, e.pageY - b);
    let rotation2 = radian2 * (180 / Math.PI) * -1 + 270;
    eyeRef2.current.style.transform = "rotate(" + rotation2 + "deg)";
  };

  return (
    <section>
      <div className="banner" onMouseMove={(e) => eyeBalls(e)}>
        <div className="ban">
          <div className="eye1" ref={eyeRef1}></div>
          <div className="eye2" ref={eyeRef2}></div>
        </div>
        <Home />
        {/* <div>
          duate of Maritime Academy of Nigeria with a First Class in Marine
          Engineering.I am currently a full-stack web developer looking forward
          to new opportunities. I've found in software development creative ways
          to fulfill my desire for solutions to different kinds of problems. I
          create technological solutions using computer programming using
          technologies such as HTML, CSS, Bootstrap , JavaScript, React Js &
          Redux, Node and Express js , MongoDB , MySQL , PostgreSQL and React
          Native for Cross platform mobile Applications. I have spent the last 2
          years working in the m
        </div> */}
      </div>
    </section>
  );
}

export default Banner;
