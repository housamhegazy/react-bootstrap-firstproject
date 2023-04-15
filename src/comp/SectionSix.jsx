export default function SectionSix() {
  return (
    <div
      className=" position-relative"
      style={{
        backgroundImage: `url(./images/66.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "200px",
      }}
    >
      <div
        className="position-absolute top-0 bottom-0 left-0 w-100 h-100 d-flex flex-column flex-md-row text-center align-items-center px-5 py-5 justify-content-around"
        style={{ background: "#000000c2" }}
      >
        <h5 className="title text-light">
          Baked fresh daily by bakers with passion
        </h5>
        <a className="custom-btn w-5" href="/">learn more</a>
      </div>
    </div>
  );
}
