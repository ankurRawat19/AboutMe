import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import covid from "../../Assets/Projects/covid.jpg";
import OP from "../../Assets/Projects/OP.JPG";
import Photographer from "../../Assets/Projects/Photographer.JPG";
import resilience from "../../Assets/Projects/resilience.jpg";
import hate from "../../Assets/Projects/hate.jpg";


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
              imgPath={covid}
              isBlog={false}
              title="Covid Stats"
              description="Get all the statistics related to Covid-19 pandemic in India.
              In this project technlogies like Spring Boot, JSOUP and Java is used. It contains realtime Covid Stats published by Govt. of India."
              link="https://github.com/ankurRawat19/Covid-Stats/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hate}
              isBlog={false}
              title="Hate Speech Detector"
              description="Hate Speech Detector application uses Machine Learning algorithm to identify Hate speech content in a blog post app and notifies user regarding hate content in the post. The user then can update or delete the post accordingly."
              link="https://github.com/ankurRawat19/HateSpeech-Detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resilience}
              isBlog={false}
              title="Resilience Circuit Breaker"
              description="Resilience4j is a lightweight, easy-to-use fault tolerance library inspired by
Netflix Hystrix, but designed for Java 8 and functional programming. Lightweight, because the library only uses Vavr, which does not have any other external library dependencies."
              link="https://github.com/ankurRawat19/Resilience4j"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={OP}
              isBlog={false}
              title="OP Gamer - Social Media Paradise for gamers"
              description="This website is like a social media platform for all gamers to share their views on the latest gaming news and the latest game launch. I developed the frontend for this website in Bootstrap, Javascript."
              link="https://akshaygupta28.github.io/OPgamer.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Photographer}
              isBlog={false}
              title="Portfolio Website for photographers"
              description="This was my first web project in basic Bootstrap and Javascript which I had built for a photographer, where he could showcase his photography work and manage his portfolio ."
              link="https://akshaygupta28.github.io/Photographer/"
            />
          </Col>*/}
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
