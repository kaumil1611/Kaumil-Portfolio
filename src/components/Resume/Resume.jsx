import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from '../Particle'
import Resumecontent from "./ResumeContent";
import pdf from "../../assets/Kaumil_Patel_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="MERN Stack developer [ IndiaNIC Infotech Limited ]"
              date="July 2021 - May 2022"
              content={[
                "Learned and experiment with React Js, Next Js, Node Js, Git Lab, GraphQl and Mongodb.",
                "Build demo Whatsapp Web Application, Netflix Web Application and Fruit Application.",
                "Work in live projects like Recruitment Portal and Assessment Portal.",
              ]}
            />
            <Resumecontent
              title="PHP developer [ Infolabz ]"
              date="June 2018 - May 2019"
              content={[
                "Learned and experiment with PHP, Javascript, and MySQL",
                "Build E-commerce Web Application Which has a three panel(Admin Panel, Seller Panel, User Panel).",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Internship [ BrainyBeam Technologies ]"
              date="May - June 2021"
              content={[
                "As a Part time internship in Python with Django, Learned CRUD Operation and made small E-commerce Web Application.",
              ]}
            />
            <Resumecontent
              title="Smart Gujarat for New India Hackathon"
              date="february 2020"
              content={[
                "Participated with my team and worked in Lawyer Portal definition.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information Technology"
              date="2019 - 2022"
              content={[
                `CGPA: 8.88/10 `,
                "I pursued my bachelor degree from Government Engineering College Gandhinagar Sector 28.",
              ]}
            />
            <Resumecontent
              title="Information Technology"
              date="2016 - 2019"
              content={[
                `CGPA: 9.00/10 `,
                "I pursued my Diploma from Government Government Polytechnic, Ahmedabad.",
              ]}
            />

            <h3 className="resume-title">Certification</h3>
            <Resumecontent
              title="Python"
              content={[`Crash Course on Python in Coursera`]}
            />
            <Resumecontent
              title="React with Redux"
              content={[`React Course in Course in Udemy`]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
