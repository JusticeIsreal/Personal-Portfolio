import { useState } from "react";

import "./FormStyle.css";

function Form() {
  const [data, setData] = useState([]);

  return (
    <main className=" Portfolio-con">
      <div className="Portfolio">
        <h3>{"//004.    .     <p> SEND A MESSAGE  </p>"}</h3>
      </div>
      <div className="project">
        <h3>Contact :</h3>
      </div>
      <div className="form-con">
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea cols="30" rows="10" placeholder="Your message"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </main>
  );
}

export default Form;
