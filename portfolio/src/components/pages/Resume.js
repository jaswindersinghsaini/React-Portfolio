import React from "react";
import "../../styles/Resume.css";
import CSS from "../../image/CSS.png";
import Api from "../../image/Api.png";
import Express from "../../image/Express.png";
import HTML from "../../image/HTML.png";
import Javascript from "../../image/Javascript.png";
import Mongo from "../../image/Mongo.png";
import Nodejs from "../../image/Nodejs.png";
import OOP from "../../image/OOP.png";
import ORM from "../../image/ORM.png";
import Reac from "../../image/Reac.png";
import Sql from "../../image/Sql.png";
import SampleResume from "../../image/SampleResume.docx";

function Resume() {
  return (
    <div className="container">
      <div className="resume">
        <a
          className="resumeDownload"
          href={SampleResume}
          download="SampleResume.docx"
        >
          {" "}
          Download Resume
        </a>
        <h1>Resume</h1>
        <h2>Jaswinder Singh</h2>
        <p> Email: jaswindersinghsaini@gmail.com</p>

        <h2>Skills/Languages</h2>
        <ul className="skillList">
          <li className="skillItem">
            <img src={HTML} alt="HTML"></img> HTML{" "}
          </li>
          <li className="skillItem">
            <img src={CSS} alt="CSS"></img> CSS
          </li>
          <li className="skillItem">
            <img src={Api} alt="Api"></img> Api
          </li>
          <li className="skillItem">
            <img src={Javascript} alt="Javascript"></img> Javascript
          </li>
          <li className="skillItem">
            <img src={Nodejs} alt="Nodejs"></img> Nodejs
          </li>
          <li className="skillItem">
            <img src={Express} alt="Express"></img> Express
          </li>
          <li className="skillItem">
            <img src={OOP} alt="OOP"></img> OOP
          </li>
          <li className="skillItem">
            <img src={ORM} alt="ORM"></img> ORM
          </li>
          <li className="skillItem">
            <img src={Sql} alt="SQL"></img> SQL
          </li>
          <li className="skillItem">
            <img src={Mongo} alt="MongoDB"></img> MongoDB
          </li>
          <li className="skillItem">
            <img src={Reac} alt="React"></img> React
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
