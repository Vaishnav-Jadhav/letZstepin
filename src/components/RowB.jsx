import "bootstrap/dist/css/bootstrap.min.css";

export function RowB({ data }) {
  return (
    <div className="w-100 bg-white my-3 py-4">
      {/* Title */}
      <div className="mb-3">
        <h2 className="text-center text-info">{data.title}</h2>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          {/* Text first on mobile */}
          <div className="col-12 col-md-6 order-1 order-md-1 mb-3 mb-md-0">
            <p className="fs-5 text-center text-md-start">{data.discription}</p>
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center">
            <img
              src={data.img}
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: "500px" }}
              alt={data.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
