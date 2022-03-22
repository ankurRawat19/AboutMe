import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarkaidi.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import useSound from "use-sound";
import Audio from '../../Assets/audio.mp3';

function Home2() {

  const [play,{stop}] = useSound(Audio);
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love programming and I have learned the latest programming
              skills on my own.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Rest API, MongoDB, Resilience4j{" "}
                </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  becoming a FULL Stack Developer.
                </b>
              </i>
              <br />
              <br />
              Currently, I am applying my passion for developing projects with
              <i>
                <b className="purple"> Cavisson Systems</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img isHovering={isHovering}
                  onMouseEnter={()=>{
                    setIsHovering(true);
                    play();
                  }}
                  onMouseLeave={()=>{
                    setIsHovering(false);
                    stop();
                  }}
                  src={myImg} className="img-fluid" alt="avatar" />

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankurRawat19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ankur.rawat.7777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankur-singh-rawat-7749301b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ankur.rawat__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
