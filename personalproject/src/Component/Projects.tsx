import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProjectCard: React.FC<{ title: string; description: string; imgSrc: string; githubLink: string }> = ({
  title,
  description,
  imgSrc,
  githubLink,
}) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={githubLink} target="_blank">
        View on GitHub
      </Button>
    </Card.Body>
  </Card>
);

const Projects: React.FC = () => {
  const projectData = [
    { title: "Project 1", description: "Description for project 1", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project1" },
    { title: "Project 2", description: "Description for project 2", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project2" },
    { title: "Project 3", description: "Description for project 3", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project3" },
    { title: "Project 4", description: "Description for project 4", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project4" },
    { title: "Project 5", description: "Description for project 5", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project5" },
    { title: "Project 6", description: "Description for project 6", imgSrc: "holder.js/100px180", githubLink: "https://github.com/user/project6" },
  ];

  return (
    <section>
      <h1>My Portfolio</h1>
      {[0, 1].map((rowIndex) => (
        <Row key={rowIndex}>
          {projectData.slice(rowIndex * 3, rowIndex * 3 + 3).map((project, colIndex) => (
            <Col key={colIndex}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      ))}
    </section>
  );
};

export default Projects;
