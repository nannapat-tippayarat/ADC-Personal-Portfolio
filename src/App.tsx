
import { useState } from 'react'
import './App.css'

function App() {
  const [isPink, setIsPink] = useState(true)

  return (
    <div className={isPink ? 'page pink' : 'page dark'}>

      <nav className="navbar">
        <span className="logo">♡ tammy.dev</span>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <header className="hero">
        <p className="eyebrow">
          ⋆˙⟡ welcome to my sanctuary ⟡˙⋆
        </p>

        <h1>Hi, I'm Tammy! ♡</h1>

        <p>
          I'm a CS student at the University of Maryland,
          College Park,
        </p>

        <p>
          and I'm interested in software development
          and human-computer interaction!
        </p>

        <button onClick={() => setIsPink(!isPink)}>
          {isPink ? '🌙 Dark mode' : '🎀 Pink mode'}
        </button>
      </header>

      <section id="about" className="section">
        <h2>♡ About Me</h2>
        <p>
          I’m a sophomore studying Computer Science at the
          University of Maryland, College Park, with a growing
          interest in software engineering and web development.
        </p>
        <p>
          I’m currently exploring opportunities to gain hands-on
          software engineering experience, collaborate on meaningful
          projects, and continue growing as a developer.
        </p>
      </section>

      
<section id="projects" className="section">
  <h2>✧ My Projects</h2>

  <div className="projects-grid">

    <article className="project-card">
      <span className="project-emoji">🐧</span>
      <h3>Waddle We Go?</h3>

      <p>
        An interactive penguin tracking visualization
        that uses real scientific data to explore
        emperor penguin journeys and Antarctic conservation.
      </p>

      <p className="project-tech">
        React · JavaScript · CSS · React-Leaflet
      </p>

      <a
        href="https://devpost.com/software/penguin-wrapped"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project ↗
      </a>
    </article>

    <article className="project-card">
      <span className="project-emoji">🩷</span>
      <h3>Diabuddy</h3>

      <p>
        A gamified virtual pet application designed
        to help children with diabetes track daily
        health information and learn through play.
      </p>

      <p className="project-tech">
        TypeScript · JavaScript · Python
      </p>

      <a
        href="https://devpost.com/software/diabuddy-oqa67v"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        View Project ↗
      </a>
    </article>

  </div>
</section>


    </div>
  )
}

export default App
