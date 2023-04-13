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
          <p>The best restaurant for serving healthy meals</p>
        </div>
        <div className="col-6 ">
          <img
            className="img-fluid "
            src="./images/landing.jpg"
            width={"500px"}
            alt="landing"
          />
        </div>
      </div>
      {/* mobile landing */}
      <div className="row d-md-none position-relative">
        <div className="col-12">
          <img
            className="img-fluid "
            src="./images/landing.jpg"
            width={"500px"}
            alt="landing"
          />
          <div className="position-absolute top-50 d-sm-flex flex-column justify-content-center align-items-start">
            <h1 className="title bg-light rounded p-2">welcome to foodera</h1>
            <p className="title bg-light rounded p-1">
              The best restaurant for serving healthy meals
            </p>
            <a className="custom-btn" href="#">
              Order Now
            </a>
            <a className="custom-btn" href="#">
              Learn More
              <i className="bi bi-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
