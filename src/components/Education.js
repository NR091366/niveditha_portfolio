import React from "react";
import "./Education.css";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  return (
    <section id="about">
      <div className="back-button-wrapper">
        <div
          className="explore-card back-btn"
          onClick={() => navigate("/about")}
        >
          ← Back to About Me
        </div>
      </div>
      <div className="aboutme"> Education and Experience</div>
      <hr className="section-divider" />

      <div className="heading">Experience:</div>
      <div className="card-container">
        <div className="info-card">
          <div className="card-title">
            <span>Software Engineer</span>
            <span>July 2022 - Present</span>
          </div>
          <div className="card-subtitle">
            Optum (United Health Group), Hyderabad
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">
            <span>Software Intern</span>
            <span>Aug 2021 - June 2022</span>
          </div>
          <div className="card-subtitle">Cerner, Bangalore</div>
        </div>
      </div>

      <hr className="section-divider full" />

      <div className="heading">Education:</div>
      <div className="card-container">
        <div className="info-card">
          <div className="card-title">
            <span>M.Tech – CS & Info Security</span>
            <span>CGPA: 8.82</span>
          </div>
          <div className="card-subtitle">
            Manipal Institute of Higher Education (MIT)
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">
            <span>B.Tech – ISE</span>
            <span>CGPA: 6.71</span>
          </div>
          <div className="card-subtitle">
            SJC Institute of Technology, Chickballapur
          </div>
        </div>
        <div className="info-card">
          <div className="card-title">
            <span>12th Standard</span>
            <span>60%</span>
          </div>
          <div className="card-subtitle">Narayana PU College</div>
        </div>
        <div className="info-card">
          <div className="card-title">
            <span>10th Standard</span>
            <span>72.17%</span>
          </div>
          <div className="card-subtitle">Jyothi English Medium School</div>
        </div>
      </div>
    </section>
  );
}

export default Education;
