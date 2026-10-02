import "./App.css";
import profileImage from "./assets/pankaj_profile.jpg";

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>PANKAJ</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <p className="intro">HELLO, I'M</p>

          <h1>
            Pankaj
            <br />
            Kumar<span>.</span>
          </h1>

          <p className="role">B.Tech Student · 3rd Semester</p>
          <img
            src={profileImage}
            alt="Pankaj Kumar"
            className="profile-image"
          />

          <a href="#projects" className="explore-btn">
            Explore My Work ↓
          </a>
        </section>

        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>
          <h2>Building. Learning. Growing.</h2>
          <p>
            I’m Pankaj Kumar, a B.Tech student in my 3rd semester.
            I’m exploring technology, programming and modern web development
            while building projects that turn ideas into real experiences.
          </p>
        </section>

        <section id="projects" className="section">
          <p className="section-label">02 — PROJECTS</p>
          <h2>Things I’ve Built</h2>

          <div className="projects">
            <div className="project-card">
              <span>01</span>
              <h3>MediKiosk</h3>
              <a href="#" className="project-link">View Project →</a>
              <p>A healthcare platform designed to make medical assistance and patient support more accessible.</p>
            </div>

            <div className="project-card">
              <span>02</span>
              <h3>Voice Assistant</h3>
              <a href="#" className="project-link">View Project →</a>
              <p>A voice-based assistant built to interact naturally and help users with everyday tasks.</p>
            </div>
          </div>
        </section>

       <section id="contact" className="section contact">
       <p className="section-label">03 — CONTACT</p>

       <h2>Let's create something.</h2>

       <p>Have a project or idea? Let's connect.</p>

       <div className="contact-links">
       <a href="mailto:Pankajdnr22@gmail.com">Email</a>

    <a
      href="https://www.linkedin.com/in/pankaj-appdev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/Pankaj4746"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>
</section>
      </main>

      <footer>
        © 2026 Pankaj Kumar
      </footer>
    </div>
  );
}

export default App;