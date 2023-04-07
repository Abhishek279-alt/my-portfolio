import React from "react";

const Skills = () => {
  return (
    <section id="myportfolio_skills" className="py-3 container-fluid">
      <div className="row">
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
            <li className="py-2">
              <span>Node.js</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
            <li className="py-2">
              <span>MySql</span>
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
              <span>MongoDb</span>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  style={{ width: "45%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
