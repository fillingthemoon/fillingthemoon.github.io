import img_001 from "./imgs/sgmangroves.png";
import img_002 from "./imgs/pomodoro-timer.png";
import img_003 from "./imgs/tic-tac-toe.png";
import img_004 from "./imgs/trbc.png";
import img_005 from "./imgs/memory-game.png";

const Projects = () => {
  return (
    <div>
      <div id="content-container">
        <h2 id="content-title">projects</h2>
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
          <a href="https://fillingthemoon.github.io/trbc_00/" target="_blank">
            <div id="project">
              <h1>TRBC Website</h1>
              <img src={img_004} alt=""></img>
              <p>
                This is a website for Thomson Road Baptist Church, built using ReactJS and AntDesign.
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
          <a href="https://fillingthemoon.github.io/memory-card/" target="_blank">
            <div id="project">
              <h1>Memory Game</h1>
              <img src={img_005} alt=""></img>
              <p>
                This is a memory game built using ReactJS.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
