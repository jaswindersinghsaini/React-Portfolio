import React from "react";
import '../../styles/About.css';
import image from "../../image/Prof.png";


export default function AboutMe() {
  return (
    <section>
    <div className = 'divStyle' >
      <img className= 'imageStyle' src={image} alt='Profile Pic'/>

      <h2>Jaswinder Singh</h2>
      <div className='info'>
        <p>
          Hello my name is Jaswinder Singh, currently residing in the Livermore,
          California. I work as a Manufacturing Quality Engineer in the
          semi-conductor industry but have always had a desire to be in
          web-development therefore decided to pursue full stack development
          bootcamp to start in this career.
          <br></br>
          I am pursuing a Career in Full Stack Web Development. My portfolio
          will encase some of the work that I have done in this bootcamp. 
          Being a beginner developer I have the drive and keen to intake as much knowledge as I can 
          to go long way. Some of the coding skills/languages I learned and worked with in this bootcamp 
          are HTMl, CSS, JavaScript, Web-APIs, NodeJS, OOP, Express, SQL, ORM, NoSQL, and React.
          Always willing to continue to learn and study new concepts and apply to my job.
        </p>
      </div>
    </div>
    </section>
  );
}
