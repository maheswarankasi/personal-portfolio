import React from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
  const skillsData = [
    { name: "ReactJS", level: 85 },
    { name: "Redux", level: 70 },
    { name: "JavaScript (ES6)", level: 88 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 80 },
    { name: "Photoshop", level: 65 },
    { name: "Illustrator", level: 40 },
  ];
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-slider">
          {skillsData.map((skill, index) => {
            return (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
