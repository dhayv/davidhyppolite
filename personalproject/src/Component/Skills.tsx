import React from "react";
import { Row, Col } from "react-bootstrap";
import Icons from "../img/image"

const Skills: React.FC = () => {

    const imageKey = Object.keys(Icons)

    console.log({imageKey})

    return (
        <section>
          <h1>Skills</h1>
          <Row>
            {imageKey.map((key) => (
              <Col key={key} xs={6} md={4} lg={2}>
                <img className="mb-3"src={Icons[key as keyof typeof Icons]} alt={key} width={'50%'} />
              </Col>
            ))}
          </Row>
          <hr />
        </section>
      );
    };

export default Skills;