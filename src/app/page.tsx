
const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MongoDB",
  "Git & GitHub",
  "Responsive Web Design",
  "Problem Solving",
];

const projects = [
  {
    number: "01",
    name: "Bazar Dor",
    type: "Grocery Price Comparison",
    description:
      "A grocery-price application that helps users explore essential grocery prices and compare prices across markets. Includes protected pages and profile name updates.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
    ],
    github: "https://github.com/Mita-div1/B14-A07-Bazar-Dor",
    live: "https://b14-a07-bazar-dor-sigma.vercel.app/",
  },
  {
    number: "02",
    name: "Fit Log",
    type: "Fitness Tracking Project",
    description:
      "A fitness-related web project focused on presenting information in a clear and user-friendly interface.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Mita-div1/B14-A06-Fit-log",
    live: "https://b14-a06-fit-log.vercel.app/",
  },
  {
    number: "03",
    name: "Dev Stack",
    type: "Web Development Project",
    description:
      "A web development project showcasing practical work with modern web technologies.",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Mita-div1/b14-as-05-div-stack-mou",
    live: "https://lighthearted-scone-30ae24.netlify.app/",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span> Moumita
          <span className="brand-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href="#contact">
            Contact <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES
          </p>

          <h1>
            Building thoughtful
            <br />
            digital <span>experiences.</span>
          </h1>

          <p className="hero-text">
            Hello, I’m <strong>Moumita Bala</strong>. I’m focused on modern
            web technologies and creating practical, user-friendly web
            experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work <span>↗</span>
            </a>

            <a className="button button-secondary" href="#contact">
              Let’s Connect
            </a>

            <a
              className="button button-secondary"
              href="/resume.pdf"
              target="_blank"
              rel=" noopener noreferrer"
            >
              Resume <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <i className="meta-line" /> React.js
            </span>
            <span>
              <i className="meta-line" /> Next.js
            </span>
            <span>
              <i className="meta-line" /> TypeScript
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/imge/profile.jpg"
            alt="Moumita Bala"
            className="profile-photo"
          />
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <span className="strip-number">01</span>
          <span>Curiosity-driven</span>
        </div>
        <div>
          <span className="strip-number">02</span>
          <span>User-focused</span>
        </div>
        <div>
          <span className="strip-number">03</span>
          <span>Always improving</span>
        </div>
      </section>

      <section className="section-wrap section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>
            Good work starts with
            <br />
            <span>curiosity.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="large-copy">
            I am passionate about modern web technologies, problem-solving,
            and building practical digital solutions.
          </p>

          <p className="muted-copy">
            I value continuous improvement, thoughtful development, and
            creating web experiences that meet real-world needs. I enjoy
            exploring how design and code work together to make digital
            products useful and easy to navigate.
          </p>

          <div className="about-points">
            <div>
              <span>✳</span> Thoughtful problem-solving
            </div>
            <div>
              <span>✳</span> Clean, responsive interfaces
            </div>
            <div>
              <span>✳</span> Continuous improvement
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap section">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>
              Skills I work <span>with.</span>
            </h2>
            <p className="section-intro">
              Technologies and practices I use while building and improving
              web projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap section" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              Projects with a <span>purpose.</span>
            </h2>
          </div>

          <p className="section-intro">
            A few projects that reflect my practice, progress, and interest
            in building useful experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number} / PROJECT
                </span>
                <span className="project-symbol">↗</span>
              </div>

           

<div className="project-art">
  {project.name === "Bazar Dor" ? (
    <img
      src="/projects/bazer-dor/Bazar Dor-এর হোম পেজ.png"
      alt="Bazar Dor Homepage"
      className="project-screenshot"
    />
  ) : project.name === "Fit Log" ? (
    <img
      src="/projects/fit-log/FitLog Home Page.png"
      alt="Fit Log Homepage"
      className="project-screenshot"
    />
  ) : project.name === "Dev Stack" ? (
    <img
      src="/projects/dev-stack/Dev Stack Home Page.png"
      alt="Dev Stack Homepage"
      className="project-screenshot"
    />
  ) : (
    <div className="art-window">
      <div className="window-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="art-lines">
        <b />
        <b />
        <b />
      </div>
      <div className="art-blocks">
        <i />
        <i />
        <i />
      </div>
    </div>
  )}
</div>



              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

<div className="project-actions">
  <a
    className="project-link"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    View GitHub <span>↗</span>
  </a>

  {project.live && (
    <a
      className="project-link"
      href={project.live}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo <span>↗</span>
    </a>
  )}

  <a
    className="project-link"
    href={
      project.name === "Bazar Dor"
        ? "/bazar-dor"
        : project.name === "Fit Log"
          ? "/fit-log"
          : "/dev-stack"
    }
  >
    View Details <span>↗</span>
  </a>
</div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-wrap section">
          <div className="section-heading">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>
              Learning is a <span>journey.</span>
            </h2>
          </div>

          <div className="education-card">
            <div className="education-icon">✳</div>

            <div className="education-info">
              <p className="eyebrow">EDUCATION</p>
              <h3>Govt. Gopalganj University & College</h3>
              <p>Bachelor of Arts (B.A.) Honours</p>
              <span>Continuing studies</span>
            </div>

            <div className="education-badge">Academic journey</div>
          </div>
        </div>
      </section>

      <section className="section-wrap contact-section" id="contact">
        <div className="contact-card">
          <div className="contact-orb" />

          <p className="eyebrow">HAVE A PROJECT OR IDEA?</p>

          <h2>
            Let’s make something
            <br />
            <span>meaningful.</span>
          </h2>

          <p className="contact-copy">
            I’m happy to connect, exchange ideas, and explore opportunities
            to grow through meaningful work.
          </p>

          <a
            className="button button-primary"
            href="mailto:abmoumitabala12@gmail.com"
          >
            Get in touch <span>↗</span>
          </a>

          <p className="contact-note">
            Email: abmoumitabala12@gmail.com
          </p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span> Moumita
          <span className="brand-dot">.</span>
        </a>

        <p>Designed with curiosity. Built with care.</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

        <small>© {new Date().getFullYear()} Moumita Bala</small>
      </footer>
    </main>
  );
}
