// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Courses from './components/Courses';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import Resume from './components/Resume';

// function MainPage() {
//   return (
//     <>
//       <div style={{ backgroundColor: "#0a192f", color: "white" }}>
//         <Navbar />
//         <Header />
//         <About />
//         <Skills />
//         <Courses />
//         <Experience />
//         <Projects />
//         <Footer />
//       </div>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Experience from './components/Experience';
import Projects from './components/Projects';       // For homepage (3 projects)
import ProjectList from './components/ProjectList'; // Full projects page
import Footer from './components/Footer';
import Resume from './components/Resume';

function MainPage() {
  return (
    <div style={{ backgroundColor: "#0a192f", color: "white" }}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Courses />
      <Experience />
      <Projects />   {/* shows only 3 projects + view all */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects-list" element={<ProjectList />} />   {/* Full projects page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
