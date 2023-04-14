import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function SliderCarousel() {
  const [counter, setCounter] = useState(0);
  const slides = ["ahmed", "housam", "ali"];
  let Number = 0;
  const arr = [];
  for (let i = 0; i < slides.length; i++) {
    arr.push(Number++);
  }
  console.log(arr);
  return (
    <div className="container">
      <div style={{ width: "100%", height: "200px", background: "red" }}>
        {slides[counter]}
      </div>
      <div style={{ height: "100px" }}>
        {arr.map((item) => {
          return <span onClick={()=>{
            setCounter(item)
          }} data-count={item} className="carousel"></span>;
        })}
      </div>
    </div>
  );
}

export default SliderCarousel;
