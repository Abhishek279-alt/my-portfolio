import React from "react";
import weatherImg from "../assets/i-weather.png";
import TodoImg from "../assets/todo.jpg";
import reactExpressImg from "../assets/react_express.jpg";

const Project = () => {
  const projectArray = [
    {
      title: "i-weather-info",
      desc: "React Weather App",
      image: weatherImg,
      tech: ["React", "Weather API"],
      demo: "https://i-weather-info.netlify.app/",
      code: "https://github.com/Abhishek279-alt/i-weather-info",
    },
    {
      title: "Todo App",
      desc: "React Todo App",
      image: TodoImg,
      tech: ["React", "NodeJs", "MySql", "Rest API"],
      demo: "/",
      code: "https://github.com/Abhishek279-alt/react-todo-app",
    },
    {
      title: "React Express",
      desc: "React News App",
      image: reactExpressImg,
      tech: ["React", "Axios"],
      demo: "https://www.instagram.com/p/CrOJLxlyRSn/",
      code: "https://github.com/Abhishek279-alt/react-express",
    },
  ];
  return (
    <section id="myportfolio_project" className="p-5 container-fluid">
      <div className="row">
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          Projects
        </div>
        <div className="projects-container my-5">
          {projectArray.map((project) => {
            let id = projectArray.indexOf(project);
            let techs = project.tech;
            return (
              <div key={id}>
                <div className="card shadow-sm">
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-secondary">{project.desc}</p>
                  </div>
                  <div class="d-flex flex-wrap px-2">
                    {techs.map((tech) => {
                      return (
                        <button
                          className="btn btn-sm btn-secondary mx-1 mb-2"
                          style={{ fontSize: "1.8vh" }}
                          disabled
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                  <div className="card-footer py-3">
                    <a
                      href={project.demo}
                      className="btn-sm btn-dark text-decoration-none p-2 me-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      className="btn-sm btn-outline-dark text-decoration-none p-2 ms-1 border border-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
