import React from "react";

export default function SectionFour() {
  return (
    <div className="container">
      <div className="col-12 d-flex flex-column text-center py-3 my-3">
        <h1 className="title">Explore Our Foods</h1>
        <p className="p1 lh-2 px-1 px-sm-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>
      <div className="col-12 my-4">
        <div className="row justify-content-center gap-2">
          <div className="card col-4" style={{width: "18rem"}}>
            <img src="./images/01.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="custom-btn">
                Order Now
              </a>
            </div>
          </div>
          <div className="card col-4" style={{width: "18rem"}}>
            <img src="./images/02.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="custom-btn">
              Order Now
              </a>
            </div>
          </div>
          <div className="card col-4" style={{width: "18rem"}}>
            <img src="./images/03.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="custom-btn">
              Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
