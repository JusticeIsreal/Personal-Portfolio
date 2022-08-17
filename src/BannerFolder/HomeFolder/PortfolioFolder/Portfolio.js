
import { useState } from "react";
// import ts from "../../../../src/images/drone-app.png";
import Projects from "./ProjectsData.js";
import "./PortfolioStyle.css";

function Portfolio() {
  const [data, setData] = useState(Projects);

  return (
    <main className=" services-co">
      <div className=" service">
        <h3>{"//004.    .     <p> PORTFOLIO ? </p>"}</h3>
      </div>
      <div className="what-i-do">
        <h3>Projects :</h3>
      </div>
      <div className="myServicesCon ">
        {data.map((item) => {
          const { id, project, details, source_code, live_project, img } = item;
          return (
            <div key={id} className="serviceCar">
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
