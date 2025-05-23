
import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // home icon from react-icons
import ProjectCards from "./ProjectCards";

const projects = [
    {
    title: "Fake Product Link Detection using AI",
    description: "Developed AI-based system to detect fraudulent product URLs to protect consumers.",
    image: "https://th.bing.com/th/id/OIP.pp41d0o842CYZRR5KXizRAHaD8?cb=iwp2&w=670&h=357&rs=1&pid=ImgDetMain",
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
    image: "https://dmtyylqvwgyxw.cloudfront.net/instances/132/uploads/images/custom_image/image/53848/wide_blob?v=1644514520",
    link: "#",
    github: "#",
  },
  {
    title: "Asset Tracking Systems using Blockchain Technology",
    description: "Built a secure asset tracking system leveraging blockchain for immutable records.",
    image: "https://th.bing.com/th/id/OIP.bBMgTQVfrvYMXDd0M6ik9gHaD3?cb=iwp2&w=1024&h=535&rs=1&pid=ImgDetMain",
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
  /* your projects array */
];

export default function ProjectList() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container py-5" style={{ maxWidth: "1000px" }}>
      {/* Home icon at top-left */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ color: "#945dd6", fontSize: "1.5rem", textDecoration: "none", }}>
          <FaHome /> Home
        </Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        className="form-control mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Project Cards */}
      <ProjectCards projects={filteredProjects} style={{ backgroundColor: "#112240"}}/>
    </section>
  );
}
