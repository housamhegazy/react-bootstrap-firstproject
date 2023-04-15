import React from "react";

export default function SectionTwo() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="title">
            We pride ourselves on making real food from the best ingredients.
          </h1>
          <p className="p-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <ul>
            <li className="my-2 d-flex align-items-center">
              <i className="bi bi-check-lg fs-2"></i>
              <span className="mx-1">Etiam sed dolor ac diam volutpat.</span>
            </li>
            <li className="my-2 d-flex align-items-center">
              <i className="bi bi-check-lg fs-2 "></i>
              <span className="mx-1">Etiam sed dolor ac diam volutpat.</span>
            </li>
            <li className="my-2 d-flex align-items-center">
              <i className="bi bi-check-lg fs-2"></i>
              <span className="mx-1">Etiam sed dolor ac diam volutpat.</span>
            </li>
          </ul>
          <a href="/" className="custom-btn">
            learn more
          </a>
        </div>
        <div className="col-12 col-md-6">
          <img src="./images/2.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
