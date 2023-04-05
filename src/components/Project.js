import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import weatherImg from "../assets/i-weather.png";

const Project = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projectArray = [
    {
      title: "i-weather-info",
      desc: "React Weather App",
      image: weatherImg,
      demo: "https://i-weather-info.netlify.app/",
      code: "https://github.com/Abhishek279-alt/i-weather-info",
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
            return (
              <div key={id}>
                <Modal
                  show={show}
                  onHide={handleClose}
                  className="project-modal"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></Modal>
                <div className="card shadow-sm">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="..."
                    onClick={handleShow}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-secondary">{project.desc}</p>
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
