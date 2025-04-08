import React from "react";
import "./Skills.css";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
  return (
    <section id="skills">
      <div className="back-button-wrapper">
        <div
          className="explore-card back-btn"
          onClick={() => navigate("/about")}
        >
          ← Back to About Me
        </div>
      </div>
      <h2 className="section-title">Skills & Tech Stack</h2>
      {/* <hr className="section-divider" /> */}
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>AI / ML</h3>
          <ul>
            <li>OpenAI APIs</li>
            <li>Prompt Engineering</li>
            <li>Chatbot Development</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DevOps & Tools</h3>
          <ul>
            <li>Vs Code</li>
            <li>Git / GitHub</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
