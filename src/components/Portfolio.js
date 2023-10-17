import React from "react";
import img1 from "../assets/scrnshot-1.png";
import img2 from "../assets/scrnshot-2.png";
import img3 from "../assets/scrnshot-3.png";
import img4 from "../assets/scrnshot-4.png";

const Portfolio = () => {
  return (
    <section id="myportfolio_gallery" className="py-3 container-fluid">
      <div className="row">
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          Portfolio
        </div>
        <div className="col-12 w-75 mx-auto gallery_container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
