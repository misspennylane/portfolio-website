import React from 'react';
import './Hero.scss'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>
                        Hi, <span className="highlight">I'm Anne</span>
                    </h1>
                    <h2>Frontend Developer</h2>
                    <p>
                        🚀 Junior Frontend Developer
                        Focusing on HTML, SCSS, JavaScript & TypeScript.
                        I’m at the start of my journey, eager to learn, and quick to pick up new skills.
                        Driven, customer-focused, and a true team player.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="# contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
              <div className="hero-image">
                  <div className="tech-stack">
                  <div className="tech-icon html">HTML5</div>
                  <div className="tech-icon css">CSS3</div>
                  <div className="tech-icon js">JS</div>
                  <div className="tech-icon react">React</div>
                  <div className="tech-icon angular">Angular</div>
                  <div className="tech-icon ts">TS</div>
                  </div>
              </div>

            </div>

        </section>
    );
};

export default Hero;
