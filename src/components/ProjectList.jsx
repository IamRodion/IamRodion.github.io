import React, { useState, useEffect } from "react";
import api from "../api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const { data } = await api.get("users/IamRodion/repos");
      setProjects(data);
      // console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <h3 className="text-center mb-4">Proyectos</h3>
      <div className="container">
        <Row
          xs={1}
          sm={2}
          md={3}
          className="g-3 justify-content-center align-items-stretch"
        >
          {projects.map((project) => (
            <Col
              key={project.id}
              className="d-flex justify-content-center h-100"
            >
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                html_url={project.html_url}
                language={project.language}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default ProjectList;
