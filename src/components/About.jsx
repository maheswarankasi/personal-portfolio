import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <p className="one-line">
          "Passionate about crafting responsive, high‑performance web
          applications with clean architecture and user‑friendly experiences
          that scale."
        </p>
        <h3>Professional Experience</h3>
        <p className="title">
          <strong>Cognizant Technology Solutions</strong> |{" "}
          <em>Front-End Developer</em> | Nov 2020 – Present
        </p>
        <ul>
          <li>
            Built responsive Single Page Applications (SPAs) with ReactJS and
            Redux, delivering smooth performance and user‑friendly interfaces.
          </li>
          <li>
            Developed reusable components and dynamic UI features using modern
            HTML5, CSS3, and JavaScript.
          </li>
          <li>
            Collaborated with Product, Design, and Backend teams to launch new
            features and solve technical challenges.
          </li>
          <li>
            Enhanced front‑end performance, achieving faster load times and
            improved interactions.
          </li>
          <li>
            Ensured code quality through clean, maintainable practices, peer
            reviews, and effective QA collaboration.
          </li>
        </ul>

        <h3>Education</h3>
        <p className="title">
          <strong>B.Sc. Mathematics</strong> <br />
          Thiagarajar College, Madurai Tamil Nadu | 2017-2020 | 7.45 CGPA
        </p>

        <h3>Certificates</h3>
        <p className="title">
          IBM Full-Stack JavaScript Developer Professional Certificate from{" "}
          <em>Coursera</em>
        </p>
      </div>
    </section>
  );
};

export default About;
