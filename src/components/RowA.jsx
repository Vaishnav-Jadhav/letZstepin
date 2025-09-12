import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function RowA({ data }) {
  return (
    <div className="w-100 bg-white py-4">
      {/* Title */}
      <div className="mb-3">
        <h2 className="text-center text-info">{data.title}</h2>
      </div>

      {/* Content */}
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
            <LazyLoadImage
              src={data.img}
              className="img-fluid rounded-4 shadow"
              effect="blur"
              style={{ maxWidth: "500px" }}
            />
          </div>

          {/* Description */}
          <div className="col-12 col-md-6">
            <p className="fs-5 text-center text-md-start">{data.discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
