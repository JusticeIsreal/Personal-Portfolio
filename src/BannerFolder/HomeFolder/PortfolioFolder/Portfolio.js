import { useState } from "react";
// import ts from "../../../../src/images/drone-app.png";
import Projects from "./ProjectsData.js";
import "./PortfolioStyle.css";

function Portfolio() {
  const [data, setData] = useState(Projects);

  return (
    <main className=" Portfolio-con">
      <div className="Portfolio">
        <h3 id="Portfolio">{"//004.    .     <p> PORTFOLIO ? </p>"}</h3>
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
              <div className="img-con">
                <img src={img} alt={project} className="project-img" />
              </div>
             
              <div className="project-link">
                <a href={source_code} target="blank" className="source-code">
                  SOURCE CODE
                </a>
                <a href={live_project} target="blank" className="live-site">
                  LIVE SITE
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Portfolio;
