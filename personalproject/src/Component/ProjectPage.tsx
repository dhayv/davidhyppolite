import React from "react"
import {Container, Col, Row, Image, Card} from "react-bootstrap"
import { useParams } from "react-router-dom"
import {ProjectList} from '.../ProjectList'
import Icons from "../img/image"

const ProjectPage: React.FC = () => {

    const {id} = useParams();
    const project = ProjectList[id]
    const GitHubIcon = Icons.Github

    return (
    <Container>
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>

    </Container>
  )
}

export default ProjectPage