import React from "react";
import heroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <section className="">
      <div className="container hero">
        <div className="hero-text">
          <div className="typewriter">
            <span className="name">Maheswaran Kasi</span>
            <span className="role">Front-End Developer</span>
          </div>
          <p className="description">
            Front-End Developer with 5+ years of experience creating responsive
            web applications using <strong>ReactJS</strong>,{" "}
            <strong>Redux</strong>, <strong>JavaScript (ES6)</strong>,{" "}
            <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
            <strong>Bootstrap</strong>, and <strong>Tailwind CSS</strong>.
            Skilled in building SPAs, optimizing performance, and ensuring code
            quality through reviews. Collaborates effectively with teams to
            deliver scalable, user-friendly solutions while continuously
            improving codebases.
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="developer avatar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
