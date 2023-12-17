import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
<Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textDecorationLine: 'underline' }}>
              Welcome to My <span className="purple ">Digital Playground!</span>
            </h1>
            <p className="home-about-body">
              Hello there! I'm <span style={{ fontWeight: 700 }}>Muhammed Asfaq N</span>, a talented and driven full-stack React developer committed to creating amazing online applications. Skilled in a flexible tech stack that includes Node.js, Express.js, MongoDB, and MySQL in addition to React.js, I enjoy transforming creative concepts into scalable and flawless user experiences.
            </p>

            <div className="home-about-skills">
              <h3>What I Bring to the Digital Realm:</h3>
              <ul>
                <li>
                  <i><b>Technical Proficiency:</b></i> A master of the craft, I excel in the realms of <b className="purple">JavaScript, React.js, Node.js, MongoDB, Express, and SQL.</b> My code is a testament to precision and reliability.
                </li>
                <li>
                  <i><b>Problem-Solving Prowess:</b></i> Challenges are opportunities in disguise. I bring proven problem-solving capabilities to every project, consistently delivering high-quality code that stands up to the rigors of real-world application.
                </li>
                <li>
                  <i><b>Passion for Innovation:</b></i> My love for building new web technologies and products fuels my creative engine. I relish the opportunity to push the boundaries of what's possible, bringing fresh ideas to life.
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-connect">
            <h1>Let's Connect!</h1>
            <p>
              I'm always open to new opportunities, collaborations, and conversations. Don't hesitate to get in touch — let's build something amazing together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muhammedashfaq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammedashfaq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashfaq_plr/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
