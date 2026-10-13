import "./App.css";
import profileImage from "./assets/pankaj_profile.jpg";
import resumePDF from "./assets/Pankaj_Kumar_Resume.pdf";

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>PANKAJ.</h2>

        <div className="nav-links">
          <a href="#home">Profile</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#profiles">Profiles</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-left">
            <img
              src={profileImage}
              alt="Pankaj Kumar"
              className="profile-image"
            />

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href={resumePDF}
                download="Pankaj_Kumar_Resume.pdf"
                className="secondary-btn"
              >
                Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Pankaj4746"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-appdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-right">
            <p className="intro">HELLO, I'M</p>

            <h1>
              Pankaj
              <br />
              Kumar<span>.</span>
            </h1>

            <p className="role">
              B.Tech CSE Student & Developer
            </p>

            <p className="hero-description">
              Building practical software, web, and AI-powered projects
              while continuously developing my programming and
              problem-solving skills.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about-section">
          <p className="section-label">02 — ABOUT</p>

          <h2>Building. Learning. Growing.</h2>

          <p className="about-intro">
            I’m Pankaj Kumar, a B.Tech Computer Science student currently
            in my 3rd semester at LNJPIT, Chapra. I’m interested in software
            development and enjoy building practical projects while learning
            new technologies.
          </p>

          <div className="about-grid">

            <div className="about-block">
              <p className="about-block-label">WHAT I DO</p>

              <h3>Web Development</h3>
              <h3>AI-powered Applications</h3>
            </div>

            <div className="about-block">
              <p className="about-block-label">CURRENTLY LEARNING</p>

              <h3>Java</h3>
              <h3>DSA</h3>
              <h3>Operating Systems</h3>
              <h3>React + Vite</h3>
              <h3>Backend Development</h3>
            </div>

            <div className="about-block">
              <p className="about-block-label">ACADEMIC SNAPSHOT</p>

              <h3>B.Tech CSE</h3>
              <p>LNJPIT, Chapra · 3rd Semester</p>
              <p>1st Semester CGPA · 8.45</p>
            </div>

            <div className="about-block">
              <p className="about-block-label">CAREER DIRECTION</p>

              <p className="about-career">
                To build strong software development skills and gain practical
                industry experience through internships, projects, and consistent
                learning, with the goal of securing a software/IT role before
                graduation.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section projects-section">
          <p className="section-label">04 — PROJECTS</p>

          <h2>Things I’ve Built.</h2>

          <p className="projects-intro">
            A selection of practical projects I’ve worked on while exploring
            software development, web technologies, and AI-powered applications.
          </p>

          <div className="projects-v2">

            {/* MediKiosk */}
            <article className="project-card-v2">
              <div className="project-top">
                <span className="project-number">01</span>
                <span className="project-status">BASIC PROTOTYPE</span>
              </div>

              <h3>MediKiosk</h3>

              <p className="project-description">
                A healthcare-focused prototype exploring AI-assisted patient
                information collection and analysis to help organize relevant
                information for doctors.
              </p>

              <div className="project-details">
                <div>
                  <span className="project-detail-label">ROLE</span>
                  <p>Frontend / UI</p>
                </div>

                <div>
                  <span className="project-detail-label">TECHNOLOGY</span>
                  <p>React · Vite · Gemini API</p>
                </div>
              </div>

              <div className="project-features">
                <span>Adaptive AI Questioning</span>
                <span>Patient Information</span>
                <span>Responsive UI</span>
              </div>

              <div className="project-footer">
                <span>Team Project · Pankaj, Nitish, Aniket</span>
                  <a
                    href="https://github.com/Pankaj4746/medikiosk-patient-assistant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                  </a>
              </div>
            </article>


            {/* Voice Assistant */}
            <article className="project-card-v2">
              <div className="project-top">
                <span className="project-number">02</span>
                <span className="project-status">PROTOTYPE</span>
              </div>

              <h3>Voice Assistant</h3>

              <p className="project-description">
                A personal voice assistant built with Ollama and Llama for
                conversational voice interaction, with future plans for
                voice-based control of everyday smartphone and computer tasks.
              </p>

              <div className="project-details">
                <div>
                  <span className="project-detail-label">ROLE</span>
                  <p>Solo Project</p>
                </div>

                <div>
                  <span className="project-detail-label">TECHNOLOGY</span>
                  <p>Ollama · Llama</p>
                </div>
              </div>

              <div className="project-features">
                <span>Voice Input</span>
                <span>Local AI Processing</span>
                <span>Voice Response</span>
              </div>

              <div className="project-footer">
                <span>Personal Project</span>
                  <a
                    href="https://github.com/Pankaj4746/AI-voice-assistant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                  </a>
              </div>
            </article>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section skills-section">
          <p className="section-label">03 — SKILLS</p>

          <h2>What I Work With.</h2>

          <div className="skills-grid">

            <div className="skill-group">
              <p className="skill-label">PROGRAMMING</p>

              <div className="skill-list">
                <span>C</span>
                <span>Python</span>
                <span>Java</span>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-label">FRONTEND</p>

              <div className="skill-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React + Vite</span>

                <small>React + Vite — Currently Learning</small>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-label">BACKEND</p>

              <div className="skill-list">
                <span>Backend Development</span>

                <small>Currently Learning</small>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-label">AI / APIs</p>

              <div className="skill-list">
                <span>Gemini API</span>
                <span>Ollama</span>
                <span>Llama</span>

                <small>Basic / Project Experience</small>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-label">TOOLS</p>

              <div className="skill-list">
                <span>VS Code</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Vercel</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="skill-group">
              <p className="skill-label">CURRENTLY LEARNING</p>

              <div className="skill-list">
                <span>Java</span>
                <span>DSA</span>
                <span>Operating Systems</span>
                <span>React + Vite</span>
                <span>Backend Development</span>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section education-section">
          <p className="section-label">05 — EDUCATION</p>

          <h2>Academic Journey.</h2>

          <p className="education-intro">
            My academic journey so far, with a focus on building a strong
            foundation in computer science and technology.
          </p>

          <div className="education-list">

            {/* B.Tech */}
            <article className="education-card education-primary">
              <div className="education-year">
                2025 — 2029
              </div>

              <div className="education-content">
                <p className="education-level">B.TECH — COMPUTER SCIENCE & ENGINEERING</p>

                <h3>LNJPIT, Chapra</h3>

                <p className="education-status">
                  3rd Semester
                </p>

                <div className="education-result">
                  <span>1st Semester CGPA</span>
                  <strong>8.45</strong>
                </div>
              </div>
            </article>


            {/* Class 12 */}
            <article className="education-card">
              <div className="education-year">
                2025
              </div>

              <div className="education-content">
                <p className="education-level">CLASS 12 — CBSE</p>

                <h3>Krishna Public School</h3>

                <p className="education-location">
                  Neora Bihta, Patna, Bihar
                </p>

                <div className="education-result">
                  <span>Percentage</span>
                  <strong>72.4%</strong>
                </div>
              </div>
            </article>


            {/* Class 10 */}
            <article className="education-card">
              <div className="education-year">
                2023
              </div>

              <div className="education-content">
                <p className="education-level">CLASS 10 — CBSE</p>

                <h3>Sinha Model H. Sch.</h3>

                <p className="education-location">
                  Dariyapur Neora, Danapur, Patna
                </p>

                <div className="education-result">
                  <span>Percentage</span>
                  <strong>86.2%</strong>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section experience-section">
          <p className="section-label">06 — EXPERIENCE</p>

          <h2>Learning Through Experience.</h2>

          <p className="experience-intro">
            Early professional exposure through structured learning,
            training, and hands-on development.
          </p>

          <div className="experience-card">

            <div className="experience-side">
              <span className="experience-number">01</span>
              <span className="experience-duration">15 DAYS</span>
            </div>

            <div className="experience-content">

              <p className="experience-type">
                INTERNSHIP / TRAINING
              </p>

              <h3>Upflairs</h3>

              <p className="experience-focus">
                JavaScript Fundamentals
              </p>

              <p className="experience-description">
                Completed a 15-day internship/training program focused on
                JavaScript fundamentals through structured lectures and
                learning sessions.
              </p>

              <div className="experience-tags">
                <span>JavaScript</span>
                <span>Fundamentals</span>
                <span>Learning</span>
              </div>

            </div>

          </div>
        </section>


        {/* RESUME SECTION */}


        {/* CERTIFICATION SECTION */}
        <section id="certifications" className="section certifications-section">
          <p className="section-label">08 — CERTIFICATIONS</p>

          <h2>Learning Beyond the Classroom.</h2>

          <p className="certifications-intro">
            Certifications will be added as I complete relevant courses,
            training programs, and professional learning opportunities.
          </p>

          <div className="certification-card">
            <div className="certification-number">01</div>

            <div className="certification-content">
              <p className="certification-label">CURRENT STATUS</p>

              <h3>No Certifications Yet</h3>

              <p>
                Currently focusing on building strong fundamentals, developing
                practical projects, and gaining hands-on experience before adding
                relevant professional certifications.
              </p>
            </div>

            <div className="certification-status">
              Coming Soon
            </div>
          </div>
        </section>


        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="section achievements-section">
          <p className="section-label">09 — ACHIEVEMENTS</p>

          <h2>Milestones That Matter.</h2>

          <p className="achievements-intro">
            A few milestones that reflect my interest in building, learning,
            and working with others.
          </p>

          <div className="achievement-card">
            <div className="achievement-number">01</div>

            <div className="achievement-content">
              <p className="achievement-label">COLLEGE HACKATHON · 2026</p>

              <h3>1st Prize</h3>

              <p>
                Secured 1st Prize in a college-level hackathon as part of a
                three-member team.
              </p>

              <div className="achievement-team">
                <span>TEAM</span>
                <p>Pankaj Kumar · Abhinav · Achal</p>
              </div>
            </div>

            <div className="achievement-status">
              1st
              <span>PRIZE</span>
            </div>
          </div>
        </section>


        {/* PROFILES SECTION */}
        <section id="profiles" className="section profiles-section">
          <p className="section-label">10 — PROFILES</p>

          <h2>Find Me Online.</h2>

          <p className="profiles-intro">
            Connect with me and explore my projects, code, and professional journey.
          </p>

          <div className="profiles-grid">
            <a
              href="https://github.com/Pankaj4746"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <div>
                <p className="profile-label">GITHUB</p>
                <h3>@Pankaj4746</h3>
                <p>Explore my projects, repositories, and code.</p>
              </div>

              <span className="profile-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pankaj-appdev/"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <div>
                <p className="profile-label">LINKEDIN</p>
                <h3>Pankaj Kumar</h3>
                <p>Connect with me and follow my professional journey.</p>
              </div>

              <span className="profile-arrow">↗</span>
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <p className="section-label">11 — CONTACT</p>

          <h2>Open to Opportunities.</h2>

          <p className="contact-intro">
            Open to internship and software development opportunities.
            I’m always interested in learning, building, and contributing
            to meaningful projects.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:Pankajdnr22@gmail.com"
              className="contact-link contact-primary"
            >
              Email Me →
            </a>

            <a
              href="https://www.linkedin.com/in/pankaj-appdev/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Pankaj4746"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              GitHub ↗
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