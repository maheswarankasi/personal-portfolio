import React from "react";
import { MdDevices } from "react-icons/md";
import { SiBootstrap, SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiTailwindcss, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiFirebase, SiMui } from "react-icons/si";

const Skills = () => {
  // const skillsData = [
  //   { name: "ReactJS", level: 85 },
  //   { name: "Redux", level: 70 },
  //   { name: "JavaScript (ES6)", level: 88 },
  //   { name: "HTML5", level: 95 },
  //   { name: "CSS3", level: 80 },
  //   { name: "Photoshop", level: 65 },
  //   { name: "Illustrator", level: 40 },
  // ];
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          <p><SiHtml5 size={20} color="#e34f26" aria-label="HTML5" />HTML5</p>
          <p><SiCss3 size={20} color="#1572B6" aria-label="CSS3" /> CSS3</p>
          <p><SiJavascript size={20} color="#f7df1e" aria-label="JavaScript" /> JavaScript ES6</p>
          <p> <MdDevices size={20} color="#fff" aria-label="Responsive" /> Responsive Web Design</p>
          <p><SiReact size={20} color="#61DAFB" aria-label="React" /> ReactJS</p>
          <p><SiRedux size={20} color="#764ABC" aria-label="Redux" /> Redux</p>
          <p><SiTailwindcss size={20} color="#38B2AC" aria-label="Tailwind CSS" /> Tailwind CSS</p>
          <p><SiBootstrap size={20} color="#7952B3" aria-label="Bootstrap" /> Bootstrap</p>
          <p><SiMui size={20} color="#0081CB" aria-label="Material UI" /> MaterialUI</p>
          <p><SiFigma size={20} color="#F24E1E" aria-label="Figma" /> Figma</p>
          <p><SiAdobephotoshop size={20} color="#31A8FF" aria-label="Photoshop" /> Adobe Photoshop</p>
          <p> <SiAdobeillustrator size={20} color="#FF9A00" aria-label="Illustrator" /> Adobe Illustrator</p>
          <p><SiFirebase size={20} color="#FFCA28" aria-label="Firebase" /> Firebase</p>
        </div>
        {/* <div className="skills-slider">
          <div className="skills-image">
            <img src={html5} alt="" />
            <img src={css3} alt="" />
          </div>
          {skillsData.map((skill, index) => {
            return (
              // <SkillBar key={index} name={skill.name} level={skill.level} />
              
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
