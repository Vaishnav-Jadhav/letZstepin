import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function Location() {
  const [data] = useState({
    title: "Location Tracking",
    img: "/assets/location.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, est odit numquam aliquid esse consequuntur cum voluptate, dolor assumenda accusantium voluptatibus minima illo, adipisci molestias illum reprehenderit voluptatem maxime!",
    btnTitle: "Read more",
  });

  return (
    <div className="w-100 bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <LazyLoadImage
              src={data.img}
              width="100%"
              max-width="500px"
              className="rounded-4 shadow-lg"
              effect="blur"
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold">{data.title}</h2>
            <p className="fs-5">{data.description}</p>
            <button className="btn btn-outline-success">{data.btnTitle}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
