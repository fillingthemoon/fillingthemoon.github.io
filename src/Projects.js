import img_001 from "./imgs/sgmangroves.png";
import img_002 from "./imgs/pomodoro-timer.png";
import img_003 from "./imgs/tic-tac-toe.png";

const Projects = () => {
  return (
    <div>
      <div id="content-container">
        <h2 id="content-title">Projects</h2>
        <div id="projects">
          <a href="https://sgmangroves.com" target="_blank">
            <div id="project">
              <h1>SGMangroves</h1>
              <img src={img_001} alt=""></img>
              <p>
                The purpose of SGMangroves is to provide users with a comprehensive overview of Singapore's mangroves, including their geographical location, flora and fauna species, biomass, and more.
              </p>
            </div>
          </a>
          <a href="https://fillingthemoon.github.io/pomodoro-timer/" target="_blank">
            <div id="project">
              <h1>Pomodoro Timer</h1>
              <img src={img_002} alt=""></img>
              <p>
                This is a pomodoro timer web app.
              </p>
            </div>
          </a>
          <a href="https://fillingthemoon.github.io/tictactoe/" target="_blank">
            <div id="project">
              <h1>Tic-Tac-Toe</h1>
              <img src={img_003} alt=""></img>
              <p>
                This is a tic-tac-toe web app.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
