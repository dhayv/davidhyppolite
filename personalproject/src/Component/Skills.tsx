import React from "react";
import { Row, Col } from "react-bootstrap";
import Icons from "../img/image";

const Skills: React.FC = () => {
  const imageKeys = Object.keys(Icons) as Array<keyof typeof Icons>;


  const filteredKeys = imageKeys.filter(key => key !== "LinkedIn" && key !== "Github");


  return (
    <section>
      <h1>Skills</h1>
      <Row>

       
        {filteredKeys.map((key) => (
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
