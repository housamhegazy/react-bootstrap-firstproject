import Navbarr from "comp/Navbar";
import React from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbarr />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block m-auto slider-img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH_0ZDt_tr6noEKojiJksrcQal-hXeDTCdatqKsdE7LH_QNcRvf2YYqfzKDlRhpjixDs&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto slider-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8N2tOOAbPwsVzcwRidNkMfYs1w2I5yZ61lr2K81b3EML-1N493TGRFoEJJw-Enf_44GU&usqp=CAU"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto slider-img"
            src="https://i.pinimg.com/564x/32/dc/63/32dc6308e088e8cb1473b522bc40b100.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{height:'1000px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio commodi aut officia eaque veritatis omnis eum adipisci, perspiciatis impedit? Incidunt veritatis laborum officia et fugiat ut temporibus quia expedita!</div>
    </>
  );
}
