import "./ServiceStyle.css";
import { MdSendToMobile } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import {
  FaDesktop,
  FaSass,
  FaGithubSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { AiOutlineLineChart } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiJquery,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import img1 from "./.././.././.././images/SDLC_CHART.png";
import img2 from "./.././.././.././images/SDLS_TEAM.png";

function Service() {
  return (
    <main className=" services-con">
      <div className=" services">
        <h3>{"//003.    .     <p> SERVICES ? </p>"}</h3>
      </div>
      <div className="what-i-do">
        <h3>What I do :</h3>
      </div>

      <div className="myServicesCon ">
        <div className="serviceCard">
          <h1>
            <GiEarthAmerica />
          </h1>
          <p>Web Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            <MdSendToMobile />
          </h1>
          <p>Mobile Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            <FaDesktop />
          </h1>
          <p>Desktop Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            {" "}
            <ImDatabase />{" "}
          </h1>
          <p>Database Management</p>
        </div>
        <div className="serviceCard">
          <h1>
            <AiOutlineLineChart />
          </h1>
          <p>Project Management</p>
        </div>
        <div className="serviceCard">
          <h1>
            <CgFigma />
          </h1>
          <p>UI / UX</p>
        </div>
      </div>
      <div className="tech-stack">
        <h3>{"//003.    .     <p> STACK </p>"}</h3>
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

export default Service;
