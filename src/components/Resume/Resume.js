import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Ankur_Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer @ Cavisson Systems "
              date="August 2021 - Present"
              content={[
                "Working as a Java Developer",
                "Worked on projects for Walmart, Nike and SBI",
                "Worked on Technologies like Spring Boot, Rest API, MongoDB, Resilience, Hystrix",
              ]}
            />
            <Resumecontent
              title="Java Trainee @ Training Basket "
              date="May 2019 - July 2019"
              content={[
                "In Training Basket I did Industrial Training as a Java Trainee and learned core concepts of Java and developed an Inventory Management application",
              ]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Won First Prize in CodeCheff Competition organized at my college in 2020.",
                "Organized many extra co-curricular programs and fest for my college.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Krishna Engineering College, Ghaziabad [ AKTU , Lucknow ] "
              date="2017 - 2021"
              content={[]}
            />
            <Resumecontent
              title="12TH BOARD [ S.R. DAV Public School , Delhi ]"
              date="2016 - 2017"
              content={[]}
            />
            <Resumecontent
              title="10TH BOARD [  S.R. DAV Public School , Delhi ] "
              date="2014 - 2015"
              content={[]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            {/*<Resumecontent
              title="Tech Head of IEEE Kec Student Chapter"
              content={[
                "Having experience in conducting multiple events in my college which were related to coding, technical aptitude that encompassed managing and directing the events.",
                "Successfully managed the gathering of more than 250 students in various events with a team comprising of 10 members.",
              ]}
            />
            <Resumecontent
              title="Indian Road Safety Campaign"
              content={[
                "This event was organized by Ministry of Road Transport and Highways.",
                "Contributed in developing the frontend end of the website using Bootstrap and Javascript.",
              ]}
            />*/}
            <Resumecontent
              title="KEC - Model United Nations"
              content={[
                "Professionally managed more than 100 participants from various colleges who belong to different states of India.",
                "Managed the treasury, promotions, facilities for the event.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
