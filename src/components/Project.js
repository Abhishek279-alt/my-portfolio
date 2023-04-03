import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Project = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projectArray = [
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum some random text",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      demo: "http://localhost:3000/",
      code: "http://localhost:3000/",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum some random text",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      demo: "http://localhost:3000/",
      code: "http://localhost:3000/",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum some random text",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      demo: "http://localhost:3000/",
      code: "http://localhost:3000/",
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
            let key = projectArray.indexOf(project);
            return (
              <>
                <Modal show={show} onHide={handleClose}>
                  <img src={project.image} alt="" />
                </Modal>
                <div className="card shadow-sm" key={key}>
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
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.code}
                      className="btn-sm btn-outline-dark text-decoration-none p-2 ms-1 border border-dark"
                    >
                      Get Code
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
