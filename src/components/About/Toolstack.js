import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  
  SiGit,
  SiWindows,
  SiReact,
  SiFigma,
  SiTailwindcss,
  SiDocker,
  SiSocketdotio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSocketdotio />
      </Col>
    </Row>
  );
}

export default Toolstack;
