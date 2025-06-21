import React from "react";
import { useState, useEffect } from "react";
import api from "./api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileHeader from "./components/ProfileHeader";
import ProjectCard from "./components/ProjectCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const { data } = await api.get("users/IamRodion/repos");
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container className="container my-3 text-center">
      <Row className="align-items-center justify-content-center mb-4">
        <Col xs={12}>
          <ProfileHeader />
        </Col>
      </Row>
      <Row className="row justify-content-center">
        {projects.map((project) => (
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            html_url={project.html_url}
            language={project.language}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
