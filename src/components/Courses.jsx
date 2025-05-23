export default function Courses() {
  const courses = [
    {
      title: "Python for Data Science, AI & Dev",
      provider: "IBM (Coursera)",
      imgSrc: '/certificates/python.png',
    },
    {
      title: "HTML, CSS",
      provider: "Guvi",
      imgSrc: '/certificates/HTML.png',
    },
    {
      title: "Introduction to MongoDB ",
      provider: "MonoDB",
      imgSrc: "/certificates/mongodb.png",
    },
    {
      title: "JavaScript",
      provider: "Guvi",
      imgSrc: "/certificates/JS.png",
    },
    {
      title: "Journey to Cloud",
      provider: "IBM SkillsBuild",
      imgSrc: "/certificates/cloud.png",
    }
  ];

  const courseColor = "#945dd6";

  return (
    <section id="courses" className="py-5" style={{ backgroundColor: "#0a192f" }}>
      <div className="container">
        <h2 className="text-center text-white mb-5" style={{ color: courseColor }}>
          Courses
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
          {courses.map((course, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body bg-light text-dark">
                  <h5 className="card-title fw-semibold" style={{ color: courseColor }}>
                    {course.title}
                  </h5>
                  <p className="card-subtitle" style={{ color: courseColor }}>
                    {course.provider}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
