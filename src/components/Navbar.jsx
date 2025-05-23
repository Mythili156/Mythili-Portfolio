export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{ backgroundColor: '#0a192f' }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* Left: Logo + Name */}
        <div className="d-flex align-items-center">
          <div
            className="fw-bold d-flex justify-content-center align-items-center me-2"
            style={{
              width: '45px',
              height: '45px',
              fontSize: '1.5rem',
              borderRadius: '8px',
              background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
              color: '#ffffff',
              boxShadow: '0 0 10px rgba(19, 173, 199, 0.6)',
            }}
          >
            M
          </div>
          <span className="navbar-brand mb-0 h4 text-white">Mythili Marimuthu</span>
        </div>

        {/* Right: Navigation Links */}
        <ul className="navbar-nav flex-row">
          <li className="nav-item px-3"><a className="nav-link text-white" href="#home">Home</a></li>
          <li className="nav-item px-3"><a className="nav-link text-white" href="#about">About</a></li>
          <li className="nav-item px-3"><a className="nav-link text-white" href="#skills">Skills</a></li>
          <li className="nav-item px-3"><a className="nav-link text-white" href="#Courses">Courses</a></li>
          <li className="nav-item px-3"><a className="nav-link text-white" href="#experience">Experience</a></li>
          <li className="nav-item px-3"><a className="nav-link text-white" href="#projects">Projects</a></li>
        </ul>

      </div>
    </nav>
  );
}
