export default function Subscribe() {
  return (
    <div className="container px-md-5 my-5">
      <h1 className="title text-center">
        Hurry up! Subscribe our newsletter and get 25% Off
      </h1>
      <p className="p-1 text-center">
        Limited time offer for this month. No credit card required.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="custom-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
