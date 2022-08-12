import React from "react";
import "../HomeFolder/Home.css";
// import { useEffect, useState, useRef } from "react";

function Home() {
  return (
    <main>
      <div className="i-am">
        <h3>{"//001.    .     <p> I am </p>"}</h3>
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
            <p>{"<h1>"}</p>
          </div>
        </div>
       
          <button class="button-29" role="button">
            <h1>{"<Download Cv/>"}</h1>
          </button>
        
      </div>
      <div className="i-am">
        <h3>{"<p> Software Developer </p>"}</h3>
      </div>
    </main>
  );
}

export default Home;
