import React from "react";

export default function Landing() {
  const url = "https://www.photolovegirl.com/vb/attachments/163454/";
  return (
    <div
      className="landing container"
      style={{
        backgroundImage: `url(./images/landing.jpg)`,
        height: "100vh",
        width: "100%",
        backgroundSize:"cover",
        marginTop:'78px'
      }}
    >
      <img src="" width={"500px"} alt="landing" />
    </div>
  );
}
