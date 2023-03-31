import React from "react";

const Contact = () => {
  return (
    <footer id="myportfolio_contact" className="bg-dark p-3">
      <div className="row">
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          Contact
        </div>
        <div className="col-10 text-light mx-auto">
          <hr />
        </div>
        <div className="col-12 text-center d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
          <span className="p-2 m-3 footer-links">
            <a href="/" className="text-light fs-2">
              <i className="fa-brands fa-github"></i>
            </a>
            <p className="text-light">Github</p>
          </span>
          <span className="p-2 m-3 footer-links">
            <a href="/" className="text-light fs-2">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <p className="text-light">LinkedIn</p>
          </span>
          <span className="p-2 m-3 footer-links">
            <a href="/" className="text-light fs-2">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <p className="text-light">Instagram</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
