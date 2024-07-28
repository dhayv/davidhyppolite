import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col className="text-center">
          <h2 className="display-4 mb-4">About Me</h2>
          <h6 className="lead mb-4">I'm currently a web developer at Chingu.io</h6>
          <hr className="my-4" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
