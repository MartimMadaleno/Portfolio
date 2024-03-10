import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
			My adventure in programming began in 
			<b className="purple"> 2020, </b>
			and it quickly grew from curiosity to passion. I've since embraced the challenge, believing I've managed to learn a thing or two along the way. 🤷
              <br />
              <br />I've become proficient in languages that are the backbone of the web like
			  <b className="purple"> Javascript and Python, </b>
			  and I've dipped my toes in the versatile world of Lua for game development.
              <i>
                
              </i>
              <br />
              <br />
              My interests lie in crafting cutting-edge 
			  <b className="purple"> web applications </b>
			  
			  and diving into the mechanics behind seamless app functionalities.
              <br />
              <br />
			  I'm particularly drawn to developing efficient solutions
			  <b className="purple"> using Node.js </b>
			  and exploring the potential of modern
			  <b className="purple"> JavaScript libraries and frameworks such as React.js.</b>
			  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="profile-icon" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/martimmadaleno"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/martimmadaleno/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/martimmadaleno"
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
