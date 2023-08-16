import React from "react";
import "../../styles/Portfolio.css";
import Jate from "../../image/JateApp.png";
import Quiz from "../../image/QuizQuestions.png";
import MealGen from "../../image/MealGen.png";
import TimeCap from "../../image/TimeCap.png";
import NoteTaker from "../../image/NoteTaker.png";
import Workday from "../../image/Workday.png";

const styles = {
  githubIcon: {
    width: "50px",
    height: "50px",
    filter: "blur()",
  },
  deployedItem: {
    textDecoration: "none",
  },
};

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="images">
        <a
          href="https://github.com/jaswindersinghsaini/Project--Code-Quiz"
          target="blank"
        >
          <img src={Quiz} alt="Coding Quiz" />
          <div className="image-container">
            <div>
              Coding Quiz{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://jaswindersinghsaini.github.io/Project--Code-Quiz/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed App
              </a>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/jaswindersinghsaini/myMeal-Generator"
          target="blank"
        >
          <img src={MealGen} alt="Meal Generator" />
          <div className="image-container">
            <div>
              Meal Generator{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://b-locatelli.github.io/myMeal-Generator/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed Page
              </a>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/jaswindersinghsaini/Timecapsule"
          target="blank"
        >
          <img src={TimeCap} alt="Time Capsule" />
          <div className="image-container">
            <div>
              Time Capsule{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://timecapsule-bcs-2af1e7ef31b0.herokuapp.com/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed App
              </a>
            </div>
          </div>
        </a>

        <a
          href="https://github.com/jaswindersinghsaini/Note-Taker"
          target="blank"
        >
          <img src={NoteTaker} alt="Note Taker" />
          <div className="image-container">
            <div>
              Note Taker{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://secure-taiga-07501.herokuapp.com/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed App
              </a>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/jaswindersinghsaini/Work-Day-Scheduler"
          target="blank"
        >
          <img src={Workday} alt="Workday Scheduler" />
          <div className="image-container">
            <div>
              Workday Scheduler{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://jaswindersinghsaini.github.io/Work-Day-Scheduler/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed Page
              </a>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/jaswindersinghsaini/PWA-Text-Editor"
          target="blank"
        >
          <img src={Jate} alt="Just Another Text Editor" />
          <div className="image-container">
            <div>
              JATE Text Editor{" "}
              <img
                src="https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png"
                alt="Github Link"
                style={styles.githubIcon}
              ></img>
            </div>
            <hr></hr>
            <div>
              {" "}
              <a
                href="https://pwa-text-editorapp-f44483945246.herokuapp.com/"
                target="blank"
                style={styles.deployedItem}
              >
                {" "}
                Deployed Page
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
