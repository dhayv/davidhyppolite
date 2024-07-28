import React from "react";
import { Row, Col } from "react-bootstrap";
import Icons from "../img/image";

const Skills: React.FC = () => {
  const imageKeys = Object.keys(Icons) as Array<keyof typeof Icons>;

  return (
    <section>
      <h1>Skills</h1>
      <Row>
        {imageKeys.map((key) => (
          <Col key={key} xs={6} md={4} lg={2}>
            <img className="mb-3 skill-icon" src={Icons[key]} alt={key} />
          </Col>
        ))}
      </Row>
      <hr />
    </section>
  );
};

export default Skills;
