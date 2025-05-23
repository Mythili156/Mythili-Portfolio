import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faYoutube, faReddit, faStackOverflow, faMedium, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';

const gradient = "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Gradient text style for headings and labels
  const gradientTextStyle = {
    background: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold"
  };

  // Gradient border style for inputs and textareas
  const gradientBorderStyle = {
    border: "2px solid",
    borderImageSlice: 1,
    borderWidth: "2px",
    borderImageSource: gradient,
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    backgroundColor: "rgb(10, 25, 47)",
    color: "#fff",
    outline: "none"
  };

  // Gradient background for buttons and icon backgrounds
  const gradientBackground = {
    background: gradient,
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  };

  const gradientButtonStyle = {
    background: gradient,
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  };

  return (
    <footer
      id="contacts"
      style={{
        backgroundColor: "rgb(10, 25, 47)",
        color: "#ffffff",
        padding: "3rem 1rem",
        position: "relative",
        minHeight: "80vh",
      }}
      className="container-fluid"
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h1 style={{
          marginBottom: "2rem",
          fontSize: "3rem",
          ...gradientTextStyle
        }}>
          Contacts
        </h1>

        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <div className="form-group">
                <label htmlFor="name" className="form-label" style={gradientTextStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={gradientBorderStyle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label" style={gradientTextStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="John@doe.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={gradientBorderStyle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label" style={gradientTextStyle}>Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type your message...."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-control"
                  style={{ ...gradientBorderStyle, resize: "vertical" }}
                ></textarea>
              </div>

              <button type="submit" style={gradientButtonStyle}>
                Send <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </form>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-between">
            <div>
              {[
                { icon: faEnvelope, text: "mythilim1194@gmail.com" },
                { icon: faPhone, text: "+91 6369497320" },
                { icon: faMapMarkerAlt, text: "Coimbatore, Tamil Nadu, India - 641001" },
              ].map(({ icon, text }, idx) => (
                <div key={idx} className="d-flex align-items-center mb-3">
                  <div style={gradientBackground}>
                    <FontAwesomeIcon icon={icon} color="#ffffff" size="lg" />
                  </div>
                  <span style={{ fontSize: "1.1rem", marginLeft: "1rem" }}>{text}</span>
                </div>
              ))}
                
              <div className="d-flex flex-wrap gap-3">
                {[
                  { icon: faLinkedin, href: "https://www.linkedin.com/in/mythili-m-b605a92a5/" },
                  { icon: faGithub, href: "https://github.com/your-github" },
                  { icon: faTwitter, href: "https://twitter.com/your-twitter" },
                  { icon: faYoutube, href: "https://youtube.com/your-youtube" },
                  
                ].map(({ icon, href }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <div style={{ 
                      ...gradientBackground, 
                      width: "45px", 
                      height: "45px", 
                      borderRadius: "50%" 
                    }}>
                      <FontAwesomeIcon icon={icon} color="#ffffff" size="lg" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-5" style={{ fontSize: "1rem", color: "#c0c0c0" }}>
          <span role="img" aria-label="heart"></span> Mythili M
        </p>
      </div>

      <button
        onClick={scrollToTop}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: gradient,
          color: "#ffffff",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </button>
    </footer>
  );
}
