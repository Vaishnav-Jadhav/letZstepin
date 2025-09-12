import "bootstrap/dist/css/bootstrap.min.css";

export function RowC({ data }) {
  return (
    <div className="w-100 bg-white my-3 py-4">
      {/* Title */}
      <div className="mb-3">
        <h2 className="text-center text-black-50">{data.title}</h2>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          {/* Top/Left text */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <p className="fs-5 text-center text-md-start">{data.discriptionA}</p>
          </div>

          {/* Image */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <img
              src={data.img}
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: "400px" }}
              alt={data.title}
            />
          </div>

          {/* Bottom/Right text */}
          <div className="col-12 col-md-4">
            <p className="fs-5 text-center text-md-start">{data.discriptionB}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
