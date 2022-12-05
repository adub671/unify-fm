import React from "react";
import "./About.css";

function About() {
  return (
    <div className="footer">
      <div className="footer-about">
        <h2 className="about">About</h2>
        <span>
          This is a website made by Andrew Wilkinson using React & Flask
        </span>
      </div>
      <div className="footer-links-container">
        <h2>Links:</h2>
        <a href="https://github.com/adub671/unify-fm" className="about-links">
          Project Repository
        </a>
        <a href="https://github.com/adub671" className="about-links">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-wilkinson-847a84113/"
          ckassName="about-links"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default About;
