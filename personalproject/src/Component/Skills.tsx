import React from "react";
import { Row, Col } from "react-bootstrap";

const Skills: React.FC = () => {

    return(
        <section>
            <h1>Skills</h1>
            <Row>
                <Col>
                    <img src={require("../img/react-javascript-js-framework-facebook-svgrepo-com.svg")} alt="React"></img>
                </Col>
            </Row>
            
            <hr></hr>
        </section>
        
    )
}

export default Skills;