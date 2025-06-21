import React from "react";

function ProjectCard({ id, name, description, html_url, language }) {
  return (
    <div
      id={id}
      className="card bg-secondary m-2"
      style={{ maxWidth: "20rem" }}
    >
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="row d-flex justify-content-between align-items-center mb-3 px-3">
        <div className="col-auto">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Github
          </a>
        </div>
        {language && (
          <div className="col-4">
            <span className="badge bg-secondary rounded-pill">{language}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
