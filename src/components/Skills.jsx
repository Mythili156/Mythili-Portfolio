import React from "react";
import { FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaReact, FaNodeJs, FaMicrosoft } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFigma, SiCanva } from "react-icons/si";

const technicalSkills = [
  { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
  { name: "C", icon: <FaMicrosoft color="#00599C" size={40} /> },
  { name: "JavaScript (Basics)", icon: <FaJsSquare color="#F7DF1E" size={40} /> },
  {
    name: "HTML & CSS",
    icon: (
      <>
        <FaHtml5 color="#E34F26" size={40} />
        <FaCss3Alt color="#1572B6" size={40} style={{ marginLeft: 5 }} />
      </>
    ),
  },
  { name: "ASP.NET", icon: <FaMicrosoft color="#512BD4" size={40} /> },
  {
    name: "MERN Stack",
    icon: (
      <>
        <SiMongodb color="#47A248" size={40} />
        <SiExpress color="#000" size={40} style={{ marginLeft: 5 }} />
        <FaReact color="#61DAFB" size={40} style={{ marginLeft: 5 }} />
        <FaNodeJs color="#339933" size={40} style={{ marginLeft: 5 }} />
      </>
    ),
  },
  { name: "SQL", icon: <FaDatabase color="#4479A1" size={40} /> },
  { name: "Excel", icon: <FaMicrosoft color="#217346" size={40} /> },
];

const tools = [
  { name: "Git & GitHub", icon: <FaGitAlt color="#F05032" size={40} /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" size={40} /> },
  { name: "Canva", icon: <SiCanva color="#00C4CC" size={40} /> },
];

export default function Skills() {
  return (
    <section id="skills" style={{ maxWidth: "900px", margin: "auto", padding: "2rem", color: "#ffc107"}}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem", letterSpacing: "3px", color:"#945dd6"}}>My Skills</h2>

      <h3 style={{ marginBottom: "1rem", color: "#6c757d" }}>Technical Skills</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {technicalSkills.map((skill, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              padding: "1rem",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "8px",
              userSelect: "none",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>{skill.icon}</div>
            <div style={{ fontWeight: "600", color: "#ffff" }}>{skill.name}</div>
          </div>
        ))}
      </div>

      <h3 style={{ margin: "3rem 0 1rem 0", color: "#6c757d" }}>Tools & Software</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {tools.map((tool, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              padding: "1rem",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "8px",
              userSelect: "none",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>{tool.icon}</div>
            <div style={{ fontWeight: "600", color: "#ffff" }}>{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
