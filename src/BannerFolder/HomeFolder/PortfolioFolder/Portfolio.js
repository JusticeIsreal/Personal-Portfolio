import "./PortfolioStyle.css";
import { FaGithubSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiHtml5, SiCss3, SiExpress, SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { useState } from "react";
import ts from "../../../../src/images/drone-app.png";
import Projects from "./ProjectsData.js";

function Portfolio() {
  const [data, setData] = useState(Projects);

  return (
    <main className=" services-con">
      <div className=" services">
        <h3>{"//004.    .     <p> PORTFOLIO ? </p>"}</h3>
      </div>
      <div className="what-i-do">
        <h3>Projects :</h3>
      </div>
      <div className="myServicesCon ">
        {data.map((item) => {
          const { id, project, details, source_code, live_project, img } = item;
          return (
            <div key={id} className="serviceCard">
              <h3>{project}</h3>
              <img src={img} alt={project} />
              <details>
                <summary>view project</summary>
                <p>{details}</p>
                <a href={source_code} target="blank">
                  SOURCE CODE
                </a>
                <a href={live_project} target="blank">
                  LIVE SITE
                </a>
              </details>
            </div>
          );
        })}
      </div>
      <div className="stack">
        <div className="mern-stack">
          <h1>MERN</h1>
          <h1>STACK</h1>

          <div className="punt">
            <marquee className="slideCont">
              <p>
                {"❖ HTML ❖"}
                {" CSS ❖"}
                {" Sass ❖"}
                {" Bootstrap ❖"}
                {" JavaScript ❖"}
                {" TypeScript ❖"}
                {" Jquery ❖"}
                {" GitHub ❖"}
                {" React.Js ❖"}
                {" Redux ❖"}
                {" Next ❖"}
                {" Node.Js ❖"}
                {" Express ❖"}
                {" MongoDB ❖"}
                {" MySQL ❖"}
                {" PostgreSQL ❖"}
              </p>
            </marquee>
          </div>
        </div>
        <SiHtml5 className="icon html" />
        <SiCss3 className="icon css" />
        <DiJavascript className="icon js" />
        <FaGithubSquare className="icon gh" />
        <FaReact className="icon react" />
        <FaNodeJs className="icon node" />
        <SiExpress className="icon express" />
        <SiMongodb className="icon mongodb" />
      </div>
    </main>
  );
}

export default Portfolio;
