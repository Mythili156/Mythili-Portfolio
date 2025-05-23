import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Development - ASP.NET",
      subtitle: "Gym Fitness Web Application",
      company: "NxtLogic Software Solutions, Coimbatore",
      duration: "August 2024",
      time: "Offline",
      points: [
        "Developed a full-stack gym web app with ASP.NET, including user registration, class scheduling, and trainer profiles.",
        "Implemented secure form handling and role-based authentication using Entity Framework and SQL Server.",
      ],
    },
    {
      title: "Data Analytics and Visualization Job Simulation (Forage)",
      subtitle: " Social Media Insights",
      company: "Accenture",
      duration: "November 2024",
      time: "Online",
      points: [
        "Completed a data analytics project involving data collection, analysis, and visualization to derive meaningful insights.",
        "Utilized tools such as Excel and Python to clean and manipulate data, presenting findings through visual reports to support informed decision-making.",
      ],
    },
    {
      title: "GenAI Job Simulation (Forage)",
      subtitle: "Financial Chatbot Simulation",
      company: "BCG",
      duration: "March 2025",
      time: "Online",
      points: [
        "Developed an AI-powered financial chatbot as part of a BCG GenAI Consulting job simulation.",
        "Integrated and interpreted complex financial data from 10-K and 10-Q reports, employing rule-based logic to create a chatbot that provides user-friendly financial insights and analysis.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="text-white py-5"
      style={{ backgroundColor: "#0a192f" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 className="mb-5 fw-bold text-center" style={{ color: "#945dd6" }}>
          Experience
        </h2>
        <div className="timeline">
          {experiences.map(
            ({ title, subtitle, company, duration, time, points }, idx) => (
              <div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              >
                {/* Left side: show info if even index, else show time/duration */}
                <div className="side left-side">
                  {idx % 2 === 0 ? (
                    <div className="content">
                      <h5 className="text-light fw-bold">{title}</h5>
                      {subtitle && <h6 className="text-info">{subtitle}</h6>}
                      {company && (
                        <p className="company-text fst-italic mb-1">{company}</p>
                      )}
                      <ul className="mt-3" style={{ listStylePosition: "inside" }}>
                        {points.map((point, i) => (
                          <li key={i} className="text-white-50">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="time-content">
                      <p
                        className="fw-bold"
                        style={{ color: "#945dd6" }}
                      >
                        {duration}
                      </p>
                      {time && <p className="text-info">{time}</p>}
                    </div>
                  )}
                </div>

                {/* Right side: show time/duration if even index, else show info */}
                <div className="side right-side">
                  {idx % 2 === 0 ? (
                    <div className="time-content text-end">
                      <p
                        className="fw-bold"
                        style={{ color: "#945dd6" }}
                      >
                        {duration}
                      </p>
                      {time && <p className="text-info">{time}</p>}
                    </div>
                  ) : (
                    <div className="content">
                      <h5 className="text-light fw-bold">{title}</h5>
                      {subtitle && <h6 className="text-info">{subtitle}</h6>}
                      {company && (
                        <p className="company-text fst-italic mb-1">{company}</p>
                      )}
                      <ul className="mt-3" style={{ listStylePosition: "inside" }}>
                        {points.map((point, i) => (
                          <li key={i} className="text-white-50">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Timeline circle */}
                <div className="circle"></div>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          padding: 2rem 0;
          margin: 0;
        }
        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 4px;
          background: linear-gradient(
            270deg,
            rgb(19, 173, 199) 0%,
            rgb(148, 93, 214) 100%
          );
          transform: translateX(-50%);
          border-radius: 2px;
          z-index: 0;
        }
        .timeline-item {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.5rem 0;
          margin-bottom: 2rem;
          box-sizing: border-box;
        }
        .side {
          width: 40%;
          box-sizing: border-box;
        }
        .left-side {
          text-align: right;
          padding-right: 0.3rem;
        }
        .right-side {
          text-align: left;
          padding-left: 0.2rem;
        }

        .content {
          background-color: #112240;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(19, 173, 199, 0.3),
            0 0 10px rgba(148, 93, 214, 0.3);
          position: relative;
        }
        .time-content {
          background-color: transparent;
          padding: 0.5rem 1rem;
        }
        .time-content p {
          margin: 0 0 0.3rem 0;
        }
        ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
          line-height: 1.6;
          color: #c0c0c0;
          list-style-type: disc;
        }
        ul li {
          margin-bottom: 0.75rem;
        }
        .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: rgb(19, 173, 199);
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 6px rgb(148, 93, 214);
          z-index: 1;
        }
        .company-text {
          color: rgb(19, 173, 199);
          font-style: italic;
          margin-bottom: 0.5rem;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .side {
            width: 100%;
            text-align: left !important;
            padding: 0;
            margin-bottom: 1rem;
          }
          .circle {
            position: relative;
            left: 0;
            top: 0;
            transform: none;
            margin-bottom: 1rem;
          }
          .timeline::before {
            left: 8px;
          }
        }
      `}</style>
    </section>
  );
}
