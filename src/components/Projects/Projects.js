import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import NavBar from "../Navbar";
import DMS from "../../assets/projects/hrlogistics.png";
import tzwatches from "../../assets/projects/tzwatches.png";
import netflix from "../../assets/projects/netflix.png";
import olx from "../../assets/projects/olx.png";
import ewatches from "../../assets/projects/ewatches.png";
import todo from "../../assets/projects/todo.png";

function Projects() {
  return (
    <>
   <NavBar/>
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={DMS}
              isBlog={false}
              title="Delivery Managment System"
              description="Using MERN stack, a small online delivery management platform that streamlines shipment booking and tracking was created. For effective management of massive volumes, safe payment processing, and task delegation, the platform has a dedicated hub.
              "
              ghLink="https://github.com/muhammedashfaq/DMS-DeliveryManagementSystem.git"
              demoLink="https://github.com/muhammedashfaq/DMS-DeliveryManagementSystem.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tzwatches}
              isBlog={false}
              title="TimeZone Watches"
              description="Using ejs for the frontend (View), Node.js and Express for the backend (Controller), and MongoDB for the database (Model), I created an e-commerce web application that adheres to the MVC pattern, guaranteeing a modular and scalable architecture for a productive and manageable online shopping experience.

              "
              ghLink="https://github.com/muhammedashfaq/eCommerce-website.git"
              demoLink="https://github.com/muhammedashfaq/eCommerce-website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO"
              description="I developed a to-do list application using React, incorporating state management to dynamically update and render tasks, allowing users to add, edit, and remove items in a responsive and user-friendly interface."
              ghLink="https://github.com/muhammedashfaq/Todo-react.git"
              demoLink="https://github.com/muhammedashfaq/Todo-react.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NETFLIX-ClONE"
              description="I developed a Netflix clone using React for the frontend and Firebase for the backend, implementing features like authentication, real-time database, and cloud storage to recreate the streaming platform's functionality."
              ghLink="https://github.com/muhammedashfaq/Netflix-clone-react.git"
              demoLink="https://github.com/muhammedashfaq/Netflix-clone-react.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={olx}
              isBlog={false}
              title="OLX-CLONE"
              description="I built an OLX clone using React for the frontend and Firebase for the backend, incorporating features such as user authentication, real-time database for product listings, and cloud storage for images, to replicate the functionalities of the online marketplace platform."
              ghLink="https://github.com/muhammedashfaq/olx-clone-react.git"
              demoLink="https://github.com/muhammedashfaq/olx-clone-react.git" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ewatches}
              isBlog={false}
              title="E-watches"
              description="Using React Js, Node.js, and Node.js Express for the backend (Controller), and MongoDB for the database (Model), I created a small e-commerce web application in accordance with the MERN Stack, guaranteeing a modular and scalable architecture for an effective and manageable online shopping experience.
              "
              ghLink="https://github.com/muhammedashfaq/React-simple_Ecommers_app.git"
              demoLink="https://github.com/muhammedashfaq/React-simple_Ecommers_app.git"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;
