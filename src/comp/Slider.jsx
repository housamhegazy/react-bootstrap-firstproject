import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function SliderCarousel() {
  let [counter, setCounter] = useState(0);
  const slides = [
    { imageUrl: "./images/11.jpg", p: "housam ali openion" },
    { imageUrl: "./images/22.jpg", p: "housam ali openion" },
    { imageUrl: "./images/33.jpg", p: "housam ali openion" },
  ];
  let Number = 0;
  const arr = [];
  for (let i = 0; i < slides.length; i++) {
    arr.push(Number++);
  }

  return (
    <div style={{ background: " #a82c48" }}>
      <div className="sliders" style={{ position: "relative", margin: "auto" }}>
        {slides.map((item, index) => {
          return (
            <div
              className="slide-container"
              key={item.imageUrl}
              style={{
                left: `clac(${index * 100})%`
              }}
            >
              <img
                src={item.imageUrl}
                width="50px"
                height={"50px"}
                style={{ borderRadius: "50%" }}
                alt={"housam"}
              />
              <p className="p-1">{item.p}</p>
            </div>
          );
        })}
      </div>

      <div style={{ height: "100px" }}>
        {arr.map((item, index) => {
          return (
            <span
              onClick={() => {
                setCounter(counter++);
              }}
              data-count={item}
              className="carousel"
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default SliderCarousel;
