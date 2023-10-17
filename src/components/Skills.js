import React from "react";

const Skills = () => {
  return (
    <section
      id="myportfolio_skills"
      className="py-3 container-fluid d-flex flex-lg-row flex-md-column flex-sm-column"
    >
      <div className="row" style={{ flexBasis: "60%" }}>
        <div className="col-12 text-secondary text-center fs-2 fw-bold text-decoration-underline my-5">
          Skills
        </div>
        <div className="col-lg-5 col-md-6 col-sm-8 skills mx-auto">
          <ul id="myskills">
            <li className="py-2">
              <span>HTML</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
            <li className="py-2">
              <span>CSS</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
            <li className="py-2">
              <span>Bootstrap</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
            <li className="py-2">
              <span>Javacript</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
            <li className="py-2">
              <span>React</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "55%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="row"
        style={{ flexBasis: "40%", backgroundColor: "#aca7cb" }}
      >
        <div className="col-12 text-white text-center fs-2 fw-bold text-decoration-underline my-5">
          Experience
        </div>
        <div className="col-lg-5 col-md-6 col-sm-8 skills mx-auto">
          <ul>
            <li className="my-2 text-white">Company - HomzNOffiz Pvt. Ltd.</li>
            <li className="my-2 text-white">Internship | 3 months</li>
            <li className="my-2 text-white">Role - Frontend Developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
