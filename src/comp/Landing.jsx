import React from "react";

export default function Landing() {
  return (
    // <div
    //   className="landing container"
    //   style={{
    //     backgroundImage: `url(./images/landing.jpg)`,
    //     height: "100vh",
    //     width: "100%",
    //     backgroundSize:"cover",
    //     marginTop:'78px'
    //   }}
    // >
    //   <img src="" width={"500px"} alt="landing" />
    // </div>
    <div
      className="container"
      style={{
        marginTop: "100px",
      }}
    >
      <div className="row">
        <div className="col-6 d-sm-flex flex-column justify-content-center align-items-center">
          <h1 className="title">welcome to foodera</h1>
          <p>The best restaurant for serving healthy meals</p>
        </div>
        <div className="col-6 ">
          <img className="img-fluid d-none d-md-block" src="./images/landing.jpg" width={"500px"} alt="landing" />
        </div>
      </div>
    </div>
  );
}
