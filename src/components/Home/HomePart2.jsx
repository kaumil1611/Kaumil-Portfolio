import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomePart2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate Full Stack web developer having an experience of
              web applications with Python with Django, PHP, GraphQL,
              <i>
                <b className="purple"> Javascript, React Js, and Next Js. </b>
              </i>
              <div style={{ marginTop: 40 }}></div>
              My field of Interest's are learning new
              <i>
                <b className="purple" style={{ marginLeft: 4 }}>
                  web technologies, and performing code which I learned.{" "}
                </b>{" "}
              </i>
              <div style={{ marginTop: 40 }}></div>
              Whenever possible, I also apply my passion for developing products
              using <b className="purple">MongoDB</b>,
              <i>
                <b className="purple"> Node Js and Express Js</b>
              </i>
              <i style={{ marginLeft: 4 }}>
                with <b className="purple"> React Js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/kaumil1611"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaumilpatel1611/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default HomePart2;
