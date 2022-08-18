import React from "react";
import About from "./AboutFolder/About.js";
import Service from "./ServicesFolder/Service.js";
import Portfolio from "./PortfolioFolder/Portfolio.js";
import Form from "./FormFolder/Form.js";
import "./Home.css";
import cv from "../../images/JUSTICE_ISREAL_AGBONMA_CV.pdf";

function Home() {
 
  return (
    <main>
      <div className="i-am">
        <h3>{"//001.    .     <p> I AM </p>"}</h3>
      </div>
      <div className="name">
        <div className="name-details">
          <div className="h1Tag">
            <p>{"<h1>"}</p>
          </div>
          <div className="full-name">
            <h3>JUSTICE ISREAL</h3>
            <h1>AGBONMA</h1>
          </div>
          <div className="h1Tag">
            <p>{"</h1>"}</p>
          </div>
        </div>
        <a href={cv} download>
          <button className="button-29">
            <h1>{"<Download Cv/>"}</h1>
          </button>
        </a>
      </div>
      <div className="i-am">
        <h3 className="last">{"<p> Software Developer </p>"}</h3>
      </div>

      <About />
      <Service />
      <Portfolio />
      <Form />
      <footer className="footer">
        Copyright &copy; {`${new Date().getFullYear()}`} JUSTICE ISREAL AGBONMA
      </footer>
    </main>
  );
}

export default Home;
