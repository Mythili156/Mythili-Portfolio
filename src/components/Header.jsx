

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const leftBackgroundColor = "rgb(10, 25, 47)";
  const rightBackgroundGradient =
    "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)";
  const accentColor = "rgb(148, 93, 214)";
  const textColorOnDark = "#ffffff";

  return (
    <header
      id="home"
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDE */}
      <div
        className="d-flex flex-column justify-content-center p-4 p-md-5 text-center text-md-start"
        style={{
          backgroundColor: leftBackgroundColor,
          width: "60%",
          color: textColorOnDark,
        }}
      >
        <h1 className="display-3 fw-bold mb-3" style={{ color: accentColor }}>
          Mythili M
        </h1>
        <h4 className="mb-4">Aspiring Data Analyst & AI Enthusiast</h4>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0",
          }}
        >
          "Transforming data into intelligent solutions through AI, analytics, and
          code."
        </p>

{/*         
        <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
          <a
            href="#projects"
            className="btn btn-lg"
            style={{
              backgroundColor: accentColor,
              color: leftBackgroundColor,
              border: `2px solid ${accentColor}`,
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              minWidth: "150px",
            }}
          >
            See Projects
          </a>
          <a
            href="#about"
            className="btn btn-lg"
            style={{
              backgroundColor: accentColor,
              color: leftBackgroundColor,
              border: `2px solid ${accentColor}`,
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              minWidth: "150px",
            }}
          >
            About Me
          </a>
        </div> */}

        {/* BUTTON ROW 2 - Resume */}
        <div className="mt-3 d-flex justify-content-center justify-content-md-start">
  <Link
    to="/resume"
    className="btn btn-lg"
    style={{
      background: "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)",
      color: "white",
      // border: `2px solid ${accentColor}`,
      borderRadius: "8px",
      fontWeight: "bold",
      textDecoration: "none",
      minWidth: "150px",
      margin: "25px",
    }}
  >
    View Resume
  </Link>
</div>

      </div>

      {/* RIGHT SIDE: Gradient background */}
      <div
        className="d-flex flex-column justify-content-center align-items-center p-4 p-md-5 position-relative"
        style={{
          background: rightBackgroundGradient,
          width: "40%",
          textAlign: "center",
        }}
      >
        {/* Bottom-right social icons */}
        <div
          className="position-absolute"
          style={{
            bottom: "20px",
            right: "20px",
            display: "flex",
            gap: "20px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/mythili-marimuthu04"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.6rem" }}
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/Mythili156"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.6rem" }}
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="mailto:mythili@example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: "1.6rem", marginLeft: "10px" }}
            title="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div
        className="overflow-hidden shadow-lg"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          border: `5px solid ${accentColor}`,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="/my-photo.jpeg"
          alt="Mythili"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </header>
  );
}
