import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maestro from "../../Assets/Projects/maestro.png";

import ferreteria from "../../Assets/Projects/ferreteria.png";
import aprendehoyenlinea from "../../Assets/Projects/aprendehoyenlina.png";
import trycatch from "../../Assets/Projects/trycatchfactory.png";
import aerolinea from "../../Assets/Projects/aerolinea.png";


function Projects() {
  return (
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
              imgPath={trycatch}
              isBlog={false}
              title="TryCatch Factory"
              description="A software factory dedicated to delivering cutting-edge software solutions for startups, enterprises, and internal company projects, with the mission of transforming the world through code and programming. Built with Next.js, TypeScript, React, Java, and JavaScript, TryCatch Factory specializes in integrations with platforms like Shopify and Salesforce, portfolio creation, and process automation. The project enhances communication and automates processes between companies and their clients, making technology more accessible and efficient for everyday users. My role extends beyond technical contributions; I support the marketing team by bridging the gap between complex technology and clients with little to no technical knowledge. This dual expertise in marketing and programming allows me to lead communication efforts across the entity's social media channels, ensuring clear and effective messaging."
              ghLink="https://github.com/Try-Catch-Factory/t8.fe-salesforce-academy"
              demoLink="https://trycatchfactory.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aprendehoyenlinea}
              isBlog={false}
              title="www.aprendehoyenlinea.com"
              description="A comprehensive portfolio for a language academy, hosted on a custom-built website utilizing JavaScript, HTML, CSS, and Node.js for deployment. The project showcases the academy's offerings and enhances user experience by providing a seamless, intuitive interface. My role was to lead and assemble the development team, ensuring that the project was executed efficiently using the SCRUM methodology. This approach allowed for effective collaboration and timely delivery of the final product."
              ghLink="https://aprendehoyenlinea.com/"
              demoLink="https://aprendehoyenlinea.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ferreteria}
              isBlog={false}
              title="ACME Ferretería"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Latinohablante/Ferreteria"
              demoLink="https://latinohablante.github.io/Ferreteria/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maestro}
              isBlog={false}
              title="Construction Portfolio for a Tile Installer"
              description="A personalized web portfolio for a construction professional specializing in façade finishes, built entirely by me using HTML, CSS, and JavaScript. The portfolio showcases the full range of services offered, including painting, bathroom installation, plumbing, tile installation, and kitchen and bathroom finishes. To engage visitors, the site includes a custom-built game where users connect matching tiles, reflecting the craftsmanship involved in tile installation. The design is visually appealing and closely tied to the theme of tiles, offering an attractive and cohesive experience. The site also features user login and registration functionality, ensuring a personalized experience for clients and potential customers."
              ghLink="https://github.com/Latinohablante/tile-installer"
              demoLink="https://latinohablante.github.io/tile-installer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aerolinea}
              isBlog={false}
              title="Vuelos Globales"
              description="A comprehensive management system for an airline, developed in Java, designed to handle all aspects of airline operations. The system includes features such as aircraft and model management, maintenance and inspection scheduling, crew administration, route and layover management, and a robust reservation and customer system. Additionally, it manages fare structures and document types, providing a complete solution for airline operations. This project ensures efficient management and smooth operations, meeting the complex needs of modern airlines."
              ghLink="https://github.com/diegodfp/aerolinea"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
