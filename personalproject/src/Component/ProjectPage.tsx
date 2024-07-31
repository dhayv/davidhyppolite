import React from "react"
import {Container, Col, Row, Image, Card} from "react-bootstrap"
import { useParams } from "react-router-dom"
import {ProjectList} from '../Data/ProjectList'
import Icons from "../img/image"

const ProjectPage: React.FC = () => {

    
    const project = ProjectList.find(project => project.name == id);
    const { id } = useParams<{id: string}>;
    const GitHubIcon = Icons.Github

    return (
    <Container>
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </Container>
  )
}

export default ProjectPage