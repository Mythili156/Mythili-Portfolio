import React from "react";

export default function ProjectCards({ projects }) {
  return (
    <div className="row g-4">
      {projects.map(({ title, description, image, link, github }, idx) => (
        <div key={idx} className="col-md-6 col-lg-4">
          <div
            className="card h-100 shadow"
            style={{ backgroundColor: "#112240", color: "#c0c0c0", border: "none" }}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="card-img-top"
                style={{ objectFit: "cover", height: "180px" }}
              />
            )}
            <div className="card-body d-flex flex-column">
              <h5
                className="card-title"
                style={{
                  background: "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                }}
              >
                {title}
              </h5>
              <p className="card-text flex-grow-1">{description}</p>
              <div className="mt-auto">
                {link && link !== "#" && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-warning btn-sm me-2"
                  >
                    Live Demo
                  </a>
                )}
                {github && github !== "#" && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info btn-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
