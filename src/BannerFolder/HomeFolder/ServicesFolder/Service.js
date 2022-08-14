import "./ServiceStyle.css";
import { SiIbm, SiScrumalliance, FaCode } from "react-icons/si";
import { HiCode } from "react-icons/hi";
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

      <section className="myServicesCon ">
        <div className="serviceCard">
          <h1>
            <HiCode />
          </h1>
          <p>Web Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            <SiIbm />
          </h1>
          <p>Mobile Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            <SiScrumalliance />
          </h1>
          <p>Desktop Application Development</p>
        </div>
        <div className="serviceCard">
          <h1>
            <HiCode />
          </h1>
          <p>Database Management</p>
        </div>
        <div className="serviceCard">
          <h1>
            <SiIbm />
          </h1>
          <p>Project Management</p>
        </div>
        <div className="serviceCard">
          <h1>
            <SiScrumalliance />
          </h1>
          <p>UI / UX</p>
        </div>
      </section>
      <img src={img1} alt=""  className="img2"/>
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

export default Service;
