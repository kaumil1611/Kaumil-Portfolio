import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, My name is{" "}
            <span className="purple">Kaumil Patel </span>
            from <span className="purple"> Gujarat, India.</span>
            <p> I am a MERN Stack Developer.</p>
            <p style={{ paddingTop: 5 }}>
              Beside coding, some other activities that I love to do!
            </p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Pre Planning
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "When something is important enough, you do it even if the odds are
            not in your favor."{" "}
          </p>
          <footer className="blockquote-footer" style={{ marginTop: 1 }}>
            Elon Musk
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
