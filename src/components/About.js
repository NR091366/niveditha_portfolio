import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
function About() {
  const navigate = useNavigate();
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Niveditha_Resume.pdf";
    link.setAttribute("download", "Niveditha_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about">
      <div className="aboutme">About Me</div>
      <hr className="section-divider" />
      <hr className="section-divider full" />
      <div className="heading">Explore More:</div>
      <p className="about-caption">
        Want to explore more about me? Start here!
      </p>
      <div className="explore-cards">
        <div className="explore-card" onClick={() => navigate("/education")}>
          <h3>Education</h3>
          <p>View detailed academic history</p>
        </div>
        <div className="explore-card" onClick={() => navigate("/skills")}>
          <h3>Skills</h3>
          <p>Explore tech stack and tools</p>
        </div>
        <div className="explore-card" onClick={handleResumeDownload}>
          <h3>Download Resume</h3>
          <p>Get my latest resume instantly</p>
        </div>
      </div>
    </section>
  );
}
export default About;
