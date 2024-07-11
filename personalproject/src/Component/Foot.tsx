import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../Css/foot.css";

const Footer: React.FC = () => {
    return (
        <Card className="text-center py-3">
            <Card.Footer className="text-center">
                <Row>
                    <Col className="mt-2">
                        <a href="https://www.linkedin.com/in/david-h-60560b61/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        </a>
                    </Col>
                    <Col className="mt-2">
                        <a href="https://github.com/dhayv" target="_blank" rel="noopener noreferrer">
                        Github
                        </a>
                    </Col>
                </Row>
                <div className="mt-2">
                    Created by David Hyppolite
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Footer;