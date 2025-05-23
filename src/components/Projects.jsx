import React from "react";
import { Link } from "react-router-dom";
import ProjectCards from "./ProjectCards";

const projects = [
  {
    title: "Fake Product Link Detection using AI",
    description: "Developed AI-based system to detect fraudulent product URLs to protect consumers.",
    image: "/public/fake.png",
    link: "#",
    github: "#",
  },
  {
    title: "Data Analysis for Online Election System",
    description: "Analyzed election data to ensure transparency and detect anomalies using statistical tools.",
    image: "https://th.bing.com/th/id/OIP.rcGk8qCWyyD2upSGiIrLPAHaE7?cb=iwp2&rs=1&pid=ImgDetMain",
    link: "#",
    github: "#",
  },
  {
    title: "IoT - Smart Parking System",
    description: "Implemented an IoT-enabled system for real-time parking slot availability monitoring.",
    image: "/public/park.png",
    link: "#",
    github: "#",
  },
  {
    title: "Asset Tracking Systems using Blockchain Technology",
    description: "Built a secure asset tracking system leveraging blockchain for immutable records.",
    image: "/public/asset.png",
    link: "#",
    github: "#",
  },
  {
    title: "Gym Fitness Web Application",
    description: "Full-stack web app for gym management including scheduling, trainers, and users.",
    image: "/public/gym.png",
    link: "#",
    github: "#",
  },
  {
    title: "Real-Time Equity Analysis Web Application",
    description: "Developed a web app providing live equity market insights with AI analysis.",
    image: "/public/equity.png",
    link: "#",
    github: "#",
  },
  {
    title: "Credit Card Fraud Detection using Deep Learning",
    description: "Created a deep learning model to detect fraudulent credit card transactions in real-time.",
    image: "/public/credit.png",
    link: "#",
    github: "#",
  },
  {
    title: "Financial Chatbot using Python",
    description: "Built a Python-based chatbot to answer financial queries and provide investment insights.",
    image: "/public/chatbot.png",
    link: "#",
    github: "#",
  },
  {
    title: "Fuzzy Logic-Based Stock Trading with Genetic Optimization",
    description: "Implemented a stock trading strategy optimized with fuzzy logic and genetic algorithms.",
    image: "/public/decision.png",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const topThree = projects.slice(0, 3);

  return (
    <section id="projects" className="container py-5" style={{ maxWidth: "1000px" }}>
  <h2 className="text-center mb-5 fw-bold" style={{color:"#945dd6"}}>Projects</h2>
      <ProjectCards projects={topThree} />
      <div className="text-center mt-4">
        <Link
          to="/projects-list"
          className="btn btn-warning"
          style={{
            background: "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.375rem",
            transition: "background 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "linear-gradient(270deg, rgb(148, 93, 214) 0%, rgb(19, 173, 199) 100%)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)";
          }}
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
