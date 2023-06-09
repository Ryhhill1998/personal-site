import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCode,
  faEnvelope,
  faServer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import {
  faApple,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

import profileImgSrc from "./images/profile-background.jpg";
import foodFiestaPreview from "./images/food-fiesta-preview.png";
import pawnsOnlyChessPreview from "./images/pawns-only-chess-preview.png";
import websitePreview from "./images/website-preview.png";
import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./components/Logo/Logo";
import SkillCard from "./components/SkillCard/SkillCard";
import TimelineDate from "./components/TimelineDate/TimelineDate";
import TimelineContent from "./components/TimelineContent/TimelineContent";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import ContactLink from "./components/ContactLink/ContactLink";
import TimelineIndicator from "./components/TimelineIndicator/TimelineIndicator";
import TimelineEnd from "./components/TimelineEnd/TimelineEnd";
import SectionHeading from "./components/SectionHeading/SectionHeading";
AOS.init();

const skills = [
  {
    icon: faCode,
    title: "Frontend Developer",
    description:
      "I have significant experience building frontend websites, web apps and games",
    languages: "JavaScript, HTML, CSS, SASS",
    frameworks: "React Js, jQuery, Tailwind UI",
  },
  {
    icon: faServer,
    title: "Backend Developer",
    description:
      "I have developed several full-stack web apps with user authentication and profiles",
    languages: "JavaScript",
    frameworks: "Node Js, Firebase",
  },
  {
    icon: faApple,
    title: "iOS Developer",
    description:
      "I have recently begun learning Swift and am developing a password manager app for my masters project",
    languages: "Swift",
    frameworks: "UIKit, SwiftUI",
  },
];

const projects = [
  {
    url: "https://food-fiesta-web-app.netlify.app",
    imgSrc: foodFiestaPreview,
    description: "Food Fiesta Web App",
  },
  {
    url: "https://rrsportsmassage.netlify.app/",
    imgSrc: websitePreview,
    description: "Sports Massage Website",
  },
  {
    url: "https://ryhhill1998.github.io/PawnsOnlyChessWebApp/",
    imgSrc: pawnsOnlyChessPreview,
    description: "Pawns Only Chess Game",
  },
];

const App = () => {
  const aboutRef = useRef();
  const journeyRef = useRef();
  const projectsRef = useRef();

  const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(0);
  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(faBars);
  const [headerBackgroundColour, setHeaderBackgroundColour] = useState(
    "rgba(0, 0, 0, 0.85)"
  );

  useEffect(() => {
    setBackgroundImageOpacity(1);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });

    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    }
  };

  const handleHamburgerClick = () => {
    if (dropdownIsVisible) {
      setDropdownIsVisible(false);
      setHamburgerIcon(faBars);
      setHeaderBackgroundColour("rgba(0, 0, 0, 0.85)");
    } else {
      setDropdownIsVisible(true);
      setHamburgerIcon(faXmark);
      setHeaderBackgroundColour("rgba(0, 0, 0)");
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: headerBackgroundColour }}>
        <nav className="container">
          <div>
            <Logo handleClick={handleLogoClick} />

            <ul className="nav-links">
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
              <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
              <li>
                <a href="mailto: ryan.henzell-hill@outlook.com">Contact</a>
              </li>
            </ul>

            <button onClick={handleHamburgerClick}>
              <FontAwesomeIcon className="icon" icon={hamburgerIcon} />
            </button>
          </div>

          {dropdownIsVisible && (
            <ul className="nav-links collapse">
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(journeyRef)}>Journey</li>
              <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
              <li>
                <a href="mailto: ryan.henzell-hill@outlook.com">Contact</a>
              </li>
            </ul>
          )}
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
              opacity: backgroundImageOpacity,
            }}
          >
            <h1>Ryan Henzell-Hill</h1>

            <p>Designer, Developer, Student</p>
          </div>
        </section>

        <section className="about container">
          <div
            ref={aboutRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <SectionHeading fade="fade-right" text="About Me" colour="primary" />

          <p
            className="section-intro"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            I'm currently studying a masters in Computer Science and have almost
            two years of coding experience. I love designing and developing
            everything from websites to mobile games and am constantly on the
            lookout for new challenges. I'm confident, curious and determined to
            improve my skills everyday.
          </p>

          <div className="cards-container">
            {skills.map((skill, i) => (
              <SkillCard index={i} {...skill} />
            ))}
          </div>
        </section>

        <section className="journey">
          <div
            ref={journeyRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <div className="container">
            <SectionHeading
              fade="fade-in"
              text="My Programming Journey"
              colour="black"
            />

            <div className="timeline">
              <div className="row">
                <div className="date-container container-lhs">
                  <TimelineDate date={"October 2018"} fade="fade-right" />

                  <TimelineIndicator position="left" />

                  <TimelineEnd position="left" />
                </div>

                <div className="content-container container-rhs">
                  <TimelineContent
                    fade={"fade-left"}
                    title="Durham University"
                    date="June 2021"
                    description="Chemistry BSc (Hons), Classification: 1st"
                    skills="Learned basic Excel skills"
                  />
                </div>
              </div>

              <div className="row reverse">
                <div className="content-container container-lhs">
                  <TimelineContent
                    fade={"fade-right"}
                    title="Helena Biosciences"
                    date="July 2021"
                    description="Technical Support Administrator"
                    skills="Learned VBA and Python to enhance productivity"
                  />
                </div>

                <div className="date-container container-rhs">
                  <TimelineDate date={"July 2021"} fade="fade-left" />

                  <TimelineIndicator position="right" reverse={true} />
                </div>
              </div>

              <div className="row">
                <div className="date-container container-lhs">
                  <TimelineDate date={"September 2022"} fade="fade-right" />

                  <TimelineIndicator position="left" />
                </div>

                <div className="content-container container-rhs">
                  <TimelineContent
                    fade={"fade-left"}
                    title="Newcastle University"
                    date="September 2022"
                    description="Computer Science MSc, Predicted classification: Distinction"
                    skills="Learned Java, SQL, JavaScript, HTML, CSS, Cybersecurity,
                    Computer Networks"
                  />
                </div>
              </div>

              <div className="row reverse">
                <div className="content-container container-lhs">
                  <TimelineContent
                    fade={"fade-right"}
                    title="Lloyds Banking Group"
                    date="September 2023"
                    description="Technology Engineering Graduate"
                  />
                </div>

                <div className="date-container container-rhs">
                  <TimelineDate date={"September 2023"} fade="fade-left" />

                  <TimelineIndicator position="right" reverse={true} />

                  <TimelineEnd position="right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects container">
          <div
            ref={projectsRef}
            style={{ position: "absolute", top: "-82px" }}
          ></div>

          <SectionHeading
            fade="fade-right"
            text="My Projects"
            colour="primary"
          />

          <p
            className="section-intro"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            I have built of number of projects in my spare time and at
            university. Some of my favourites are shown below. The Food Fiesta
            web app was developed in a team project which I led at university.
            The website below I created for a Sports Massage business in my
            local area. The Pawns Only Chess game was a personal project I
            created to play with my friends and family.
          </p>

          <div className="previews-container">
            {projects.map((project, i) => (
              <ProjectPreview index={i} {...project} />
            ))}
          </div>
        </section>

        <section className="cta container">
          <SectionHeading
            fade="fade-up"
            text="Want to work with me?"
            colour="primary"
          />

          <p data-aos="fade-up" data-aos-duration="1000">
            I’m always open to discuss new opportunities.
          </p>

          <a
            href="mailto: ryan.henzell-hill@outlook.com"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get in touch
          </a>
        </section>
      </main>

      <footer>
        <div className="container">
          <Logo />

          <div className="links-container">
            <ContactLink
              url="https://twitter.com/ryanhenzellhill"
              icon={faTwitter}
            />

            <ContactLink
              url="https://www.linkedin.com/in/ryanhenzell-hill"
              icon={faLinkedinIn}
            />

            <ContactLink url="https://github.com/Ryhhill1998" icon={faGithub} />

            <ContactLink
              url="mailto: ryan.henzell-hill@outlook.com"
              icon={faEnvelope}
            />
          </div>

          <p className="copyright">
            <FontAwesomeIcon className="icon" icon={faCopyright} />
            Ryan Henzell-Hill
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
