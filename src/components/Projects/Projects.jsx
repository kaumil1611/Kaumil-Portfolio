import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./PrjectCard";


import e_Com from "../../assets/Projects/petsloveHomePage.jpg";
import lawyerportal from "../../assets/Projects/lawyerportal.png";
import youtubeApi from "../../assets/Projects/youtubeApi.png";
import chat from "../../assets/Projects/chatApp.png";
import ParticlesBackground from "../particales/ParticlesBackground";

function Projects() {
  return (
    <Container fluid className="project-section">
      <ParticlesBackground />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lawyerportal}
              isBlog={false}
              title="Lawyer Portal"
              show={false}
              description="It is a portal for lawyer who are perform any crud operation like add client, remove client, modify client, create client. It has a main chat functionality to communicate with client one to one for updating their hearing update, and it has a mail functionality for client to login their dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Whatsapp Chat Web"
              show={true}
              description="Whatsapp web application is basic chat application where we can create groups and chat with people who are login with google authentication.This website have a functionality to upload image and emoji also."
              link="https://github.com/kaumil1611/chat-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e_Com}
              isBlog={false}
              title="Pets Love"
              show={true}
              description="It is a basic e-commerce site which is build in PHP, Javascript, MySQL. It has a features like Login, SignUp as a part of authentication. Apart from that user add product in cart, modify quantity and also remove product in cart."
              link="https://github.com/kaumil1611/petslove.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeApi}
              isBlog={false}
              title="Youtube"
              show={true}
              description="It is a basic web application demo to fetch youtube api using React and Axios javascript library and putting some functionality which takes randomly five youtube video based on search."
              link="https://github.com/kaumil1611/React_YouTube_API"
              liveLink="https://kaumil1611.github.io/React_YouTube_API/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
