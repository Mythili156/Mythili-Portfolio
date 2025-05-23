// export default function About() {
//   return (
//     <section id="about" className="container py-5" style={{ maxWidth: "800px" }}>
//       <h2 className="text-center mb-4" style={{color: "#ffc107"}}>Who I am</h2>
//       <ul className="text-start mx-auto" style={{ fontSize: "1.1rem" }}>
//         <ul className="mb-2">
//           I am Mythili Marimuthu, a final-year B.Tech student specializing in Artificial Intelligence and Data Science .
//         </ul>
//         <ul className="mb-2">
// I am a passionate and results-driven individual specializing in data analysis and artificial intelligence.
//           With a strong foundation in machine learning, data visualization, and web development, I aim to create
//           innovative solutions that drive impact. My journey involves continuous learning and applying cutting-edge
//           technologies to real-world problems.        </ul>
       
        
//       </ul>

//       {/* Education Section */}
//       <center>
//       <section id="education" className="mt-5">
//         <h2 className="text-warning fw-bold mb-3">Education</h2>

//         <div className="mb-4">
//           <h3 className="fw-semibold mb-1">Anna University Regional Campus</h3>
//           <p className="text-info fst-italic mb-1">
//             Bachelor of Technology in Artificial Intelligence & Data Science
//           </p>
//           <p className="text-secondary fw-medium">GPA: 8.63 / 10</p>
//                   <p className="text-secondary mb-1">Coimbatore, Tamil Nadu - Present</p>

//         </div>

//         <div className="mb-4">
//           <h3 className="fw-semibold mb-1">Little Angels Matric Higher Secondary School</h3>
//           <p className="text-info mb-1">12th - 94.2%</p>
//                   <p className="text-secondary">Namakkal, Tamil Nadu - 2022</p>
//           <p className="text-info">10th - 93.4%</p>
//                             <p className="text-secondary">Namakkal, Tamil Nadu - 2020</p>

//         </div>

//       </section>
//       </center>
//     </section>
//   );
// }


import React from "react";


export default function About() {
  // Define your colors based on the provided image (dark background, orange accents)
  const backgroundColor = "#0a192f"; // Dark charcoal background
  const accentColor = "#ff9933"; // Vibrant orange for titles and icons
  const textColor = "#ffffff"; // White text for readability

  const gradientBackground =
    "linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(148, 93, 214) 100%)";

  return (
    <section id="about" className="container py-5" style={{ maxWidth: "800px", backgroundColor }}>
      <h2 className="text-center mb-4" style={{ color: "#945dd6" }}>
        Who I am
      </h2>
      <ul className="text-start mx-auto" style={{ fontSize: "1.1rem" }}>
        <li className="mb-2">
          I am Mythili Marimuthu, a final-year B.Tech student specializing in
          Artificial Intelligence and Data Science.
        </li>
        <li className="mb-2">
          I am a passionate and results-driven individual specializing in data
          analysis and artificial intelligence. With a strong foundation in
          machine learning, data visualization, and web development, I aim to
          create innovative solutions that drive impact. My journey involves
          continuous learning and applying cutting-edge technologies to
          real-world problems.
        </li>
      </ul>

      {/* Education Section */}
      <section
        id="education"
        className="mt-5"
        style={{
          backgroundColor: "#0a192f",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#945dd6", fontWeight: "bold", fontSize: "2rem" }}
        >
          Education
        </h2>

        {/* Education Entry 1 */}
        <div
          className="d-flex flex-column align-items-start mb-4"
          style={{
            backgroundImage: gradientBackground,
            padding: "1.5rem",
            borderRadius: "10px",
            position: "relative",
            color: textColor,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              fontSize: "1.5rem",
              color: accentColor,
            }}
          >
            🎓
          </div>
          <p style={{ marginBottom: "0.5rem", marginLeft: "3rem" }}>Present</p>
          <h3 className="fw-semibold mb-1" style={{ marginLeft: "3rem" }}>
            Anna University Regional Campus
          </h3>
          <p className="fst-italic mb-1" style={{ marginLeft: "3rem" }}>
            Bachelor of Technology in Artificial Intelligence & Data Science
          </p>
          <p className="fw-medium" style={{ marginLeft: "3rem" }}>
            GPA: 8.63 / 10
          </p>
          <p className="mb-1" style={{ marginLeft: "3rem" }}>
            Coimbatore, Tamil Nadu
          </p>
        </div>

        {/* Education Entry 2 */}
        <div
          className="d-flex flex-column align-items-start mb-4"
          style={{
            backgroundImage: gradientBackground,
            padding: "1.5rem",
            borderRadius: "10px",
            position: "relative",
            color: textColor,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              fontSize: "1.5rem",
              color: accentColor,
            }}
          >
            🎓
          </div>
          <p style={{ marginBottom: "0.5rem", marginLeft: "3rem" }}>2020-2022</p>
          <h3 className="fw-semibold mb-1" style={{ marginLeft: "3rem" }}>
            Little Angels Matric Higher Secondary School
          </h3>
          <p className="fst-italic mb-1" style={{ marginLeft: "3rem" }}>
            12th - 94.2%
          </p>
          <p style={{ marginLeft: "3rem" }}>Namakkal, Tamil Nadu</p>
        </div>

        {/* Education Entry 3 */}
        <div
          className="d-flex flex-column align-items-start mb-4"
          style={{
            backgroundImage: gradientBackground,
            padding: "1.5rem",
            borderRadius: "10px",
            position: "relative",
            color: textColor,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              fontSize: "1.5rem",
              color: accentColor,
            }}
          >
            🎓
          </div>
          <p style={{ marginBottom: "0.5rem", marginLeft: "3rem" }}>2018-2020</p>
          <h3 className="fw-semibold mb-1" style={{ marginLeft: "3rem" }}>
            Little Angels Matric Higher Secondary School
          </h3>
          <p className="fst-italic mb-1" style={{ marginLeft: "3rem" }}>
            10th - 93.4%
          </p>
          <p style={{ marginLeft: "3rem" }}>Namakkal, Tamil Nadu</p>
        </div>
      </section>
    </section>
  );
}
