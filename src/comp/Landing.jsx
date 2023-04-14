import React from "react";

export default function Landing() {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
      }}
    >
      <div className="row d-none d-md-flex">
        <div className="col-6 d-sm-flex flex-column justify-content-center align-items-center">
          <h1 className="title">welcome to foodera</h1>
          <p className="title p-1">
            The best restaurant for serving healthy meals
          </p>
          <div className="mt-3 d-flex">
            <a className="custom-btn" href="#">
              Order Now
            </a>
            <a className="custom-btn" href="#">
              Learn More
              <i className="bi bi-caret-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center ">
          <img
            className="img-fluid "
            src="./images/landing.jpg"
            width={"500px"}
            alt="landing"
          />
        </div>
      </div>
      {/* mobile landing */}
      <div className="mobile-landing row d-md-none position-relative">
        <div className="col-12 ">
          <img
            className="img-fluid d-flex justify-content-center"
            src="./images/landing.jpg"
            width={"500px"}
            alt="landing"
          />
        </div>
        <div className="mobile-landing-info position-absolute d-flex flex-column justify-content-center align-items-start">
          <h1 className="title bg-light rounded p-2 fs-4">
            welcome to foodera
          </h1>
          <p className="mobile-landing  title bg-light rounded p-1">
            The best restaurant for serving healthy meals
          </p>
          <div className="mt-3 d-flex">
            <a className="mobile-landing custom-btn" href="#">
              Order Now
            </a>
            <a className="mobile-landing custom-btn" href="#">
              Learn More
              <i className="bi bi-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
