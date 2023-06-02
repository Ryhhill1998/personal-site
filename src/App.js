import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCode,
  faMagnifyingGlass,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import profileImgSrc from "./images/profile.jpg";
import { faApple, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo">
            <span className="number">25</span>
            <span className="letter">R</span>
          </div>

          <ul className="nav-links">
            <li>About</li>
            <li>Journey</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="intro" className="intro">
          <div
            className="background-image"
            style={{
              backgroundImage: `
              linear-gradient( rgba(0, 0, 0, 0.7), 
              rgba(0, 0, 0, 0.55) ), 
              url(${profileImgSrc})
              `,
            }}
          >
            <h1>Ryan Henzell-Hill</h1>

            <p>Designer, Developer, Student</p>
          </div>
        </section>

        <section id="about" className="about container">
          <h2>About Me</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faCode} />
              </div>

              <div>
                <h3>Frontend Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>

              <div>
                <h4>Languages</h4>
                <p>JavaScript, HTML, CSS, SASS</p>
              </div>

              <div>
                <h4>Frameworks</h4>
                <p>React Js, jQuery</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faServer} />
              </div>

              <div>
                <h3>Backend Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>

              <div>
                <h4>Languages</h4>
                <p>JavaScript</p>
              </div>

              <div>
                <h4>Frameworks</h4>
                <p>Node Js</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-container">
                <FontAwesomeIcon className="icon" icon={faApple} />
              </div>

              <div>
                <h3>iOS Developer</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>

              <div>
                <h4>Languages</h4>
                <p>Swift</p>
              </div>

              <div>
                <h4>Frameworks</h4>
                <p>UIKit, SwiftUI</p>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="journey">
          <div className="container">
            <h2>My Programming Journey</h2>

            <div className="timeline">
              <div className="row">
                <div className="date-container container-lhs">
                  <span>June 2021</span>

                  <div className="timeline-indicator"></div>
                  <div className="timeline-end"></div>
                </div>

                <div className="content-container container-rhs">
                  <div>
                    <h3>Durham University</h3>
                    <p>Chemistry BSc (Hons) Classification: 1st</p>
                    <p>Learned basic Excel skills</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="content-container container-lhs">
                  <div>
                    <h3>Helena Biosciences</h3>
                    <p>Technical Support Administrator</p>
                    <p>Learned VBA and Python to enhance productivity</p>
                  </div>
                </div>

                <div className="date-container container-rhs">
                  <span>July 2021</span>

                  <div className="timeline-indicator"></div>
                </div>
              </div>

              <div className="row">
                <div className="date-container container-lhs">
                  <span>September 2022</span>

                  <div className="timeline-indicator"></div>
                </div>

                <div className="content-container container-rhs">
                  <div>
                    <h3>Newcastle University</h3>
                    <p>Computer Science MSc Classification: Distinction</p>
                    <p>
                      Learned Java, SQL, JavaScript, HTML, CSS, Cybersecurity,
                      Computer Networks
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="content-container container-lhs">
                  <div>
                    <h3>Lloyds Banking Group</h3>
                    <p>Technology Engineering Graduate</p>
                  </div>
                </div>

                <div className="date-container container-rhs">
                  <span>September 2023</span>

                  <div className="timeline-indicator"></div>
                  <div className="timeline-end"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
