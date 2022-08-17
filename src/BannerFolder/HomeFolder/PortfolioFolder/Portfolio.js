import { useState } from "react";
// import ts from "../../../../src/images/drone-app.png";
import Projects from "./ProjectsData.js";
import "./PortfolioStyle.css";

function Portfolio() {
  const [data, setData] = useState(Projects);

  return (
    <main className=" Portfolio-con">
      <div className="Portfolio">
        <h3>{"//004.    .     <p> PORTFOLIO ? </p>"}</h3>
      </div>
      <div className="project">
        <h3>Projects :</h3>
      </div>
      <div className="myProjectCon">
        {data.map((item) => {
          const { id, project, details, source_code, live_project, img } = item;
          return (
            <div key={id} className="projectCard">
              <h3 className="project-name">{project}</h3>
              <img src={img} alt={project} />
              <details className="details">
                <summary className="view-project">view project</summary>
                <p className="project-description">{details}</p>

                <div className="project-link">
                  <a href={source_code} target="blank" className="source-code">
                    SOURCE CODE
                  </a>
                  <a href={live_project} target="blank" className="live-site">
                    LIVE SITE
                  </a>
                </div>
              </details>
            </div>
          );
        })}
      </div>
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
    </main>
  );
}

export default Portfolio;
