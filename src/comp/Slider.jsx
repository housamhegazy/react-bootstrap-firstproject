import { useState } from "react";

function SliderCarousel() {
  let [counter, setCounter] = useState(0);

  const slides = [
    {
      imageUrl: "./images/11.jpg",
      p: "housam ali openion housam ali openion housam ali openion housam ali openion",
    },
    {
      imageUrl: "./images/22.jpg",
      p: "housam ali openion housam ali openion housam ali openion housam ali openion",
    },
    {
      imageUrl: "./images/33.jpg",
      p: "housam ali openion housam ali openion housam ali openion housam ali openion",
    },
    {
      imageUrl: "./images/44.jpg",
      p: "housam ali openion housam ali openion housam ali openion housam ali openion",
    },
  ];
  let Number = 0;
  const arr = [];
  for (let i = 0; i < slides.length; i++) {
    arr.push(Number++);
  }

  return (
    <div
      className="sliderContainer d-flex flex-column justify-content-center align-items-center"
      style={{ background: " #a82c48" }}
    >
      <h1 className="text-light pt-4">Testmonials</h1>
      <div className="sliders">
        {slides.map((item, index) => {
          return (
            <div
              className="slide-container"
              key={item.imageUrl}
              style={{
                left: `calc(${index} * 100% )`,
                transform: `translateX(${counter * -100}%)`,
              }}
            >
              <img
                src={item.imageUrl}
                width="90px"
                height={"90px"}
                style={{ borderRadius: "50%" }}
                alt={"housam"}
              />
              <p className="p-1 text-center px-1 px-sm-3">{item.p}</p>
            </div>
          );
        })}
      </div>
      {/* carousel btns */}
      <div className="carousel-container">
        {arr.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                setCounter(index);
              }}
              data-count={item}
              className={`carousel ${counter === index && 'active'}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default SliderCarousel;
