import React from 'react';
import lekhanaEnterprises from "../assets/lekhana-enterprises.png";
import sivamEnterprises from "../assets/sivam-enterprises.png";
import mohithiraEnterprises from "../assets/mohithira-enterprises.png";
import comfyStore from "../assets/comfy-store.png";
import { FiEye } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {title: 'Lekhana Enterprises', description:"A professional service-oriented webapp for Lekhana Enterprises, showcasing gas pipeline solutions. Features a responsive design, service galleries, and client testimonials, highlighting a decade of expertise in industrial and residential safety.", image: lekhanaEnterprises, href:'https://lekhanaenterprisesgaspipeline.in/' },
    {title: 'Sivam Enterprises', description:"A specialized service platform for Sivam Enterprises, showcasing expert chimney and gas pipeline installations. This responsive site emphasizes safety standards, high-quality maintenance services, and reliable solutions for modern kitchens.",image: sivamEnterprises, href:'https://sivamchimneygaspipeline.in/' },
    {title: 'Mohithira Enterprises', description:"A robust business webapp for Mohithira Enterprises, focusing on LPG and PNG gas pipeline installations. It features a streamlined interface to showcase industrial safety expertise, technical services, and professional maintenance.",image: mohithiraEnterprises, href:'https://mohithiragaspipelines.in/' },
    {title: 'Demo - Comfy Store', description:"Comfy Store is a modern e-commerce webapp built with React, Redux and Vite. It features a sleek UI, product filtering, shopping cart functionality, user authentication, and a responsive design using Tailwind CSS.",image: comfyStore, href:'https://react-vite-comfy-store-v2.netlify.app/' }
  ]

  return (
    <section id='projects'>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index)=>{
            return <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <a href={project.href} target='_blank' className="btn"><FiEye /> Live Preview</a>
          </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
