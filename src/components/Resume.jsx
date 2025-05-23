import React from "react";

export default function Resume() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a192f",
        color: "white",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="/RESUME.pdf"
        title="My Resume"
        style={{ width: "80%", height: "90vh", border: "none" }}
      ></iframe>
    </div>
  );
}
