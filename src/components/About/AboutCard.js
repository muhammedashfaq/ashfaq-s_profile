import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Explore the digital realm with  <span className="purple">Muhammed Asfaq </span>, A MERN Stack enthusiast from the enchanting landscapes of Malappuram, Kerala.
            <br />
            Enhance your web experience with creativity and expertise!
            <br />
            <br />
            During my internship Period i done two projects .
            <ul>
              <li className="about-activity">
                <ImPointRight /> E-commerce Web application
              </li>
              <li className="about-activity">
                <ImPointRight /> Delivery Management System for Logistics Industry
              </li>
              <li className="about-activity">
                <ImPointRight /> Mini E-Commerse Using React JS
              </li>
            </ul>


            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ashi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
