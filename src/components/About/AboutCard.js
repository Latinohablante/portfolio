import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elkin Gabriel </span>
            from <span className="purple"> Bucaramanga, Colombia.</span>
            <br />
            I am currently working as a software developer at TryCatch Factory.
            <br />
            I support the marketing department to create an acertive communication to their customers.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teaching Spanish
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with people from different countries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Connecting cultures trough language and technology!"{" "}
          </p>
          <footer className="blockquote-footer">Elkin Gabriel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
