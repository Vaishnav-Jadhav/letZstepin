import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Main() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <main
      className="w-100 overflow-hidden position-relative bg-black"
      style={{
        height: "100vh", // full viewport height
        minHeight: "600px",
      }}
    >
      <div
        className="position-absolute end-0 top-50 translate-middle-y d-flex flex-column justify-content-end p-3"
        style={{ maxWidth: "600px" }}
      >
        <h2
          className="text-white fw-bold mb-3"
          data-aos="fade-up"
          style={{ fontSize: "4rem" }}
        >
          Virtualize <br /> your world
        </h2>
        <p
          className="fs-5 fw-semibold text-secondary"
          data-aos="fade-up"
          style={{ lineHeight: "1.6" }}
        >
          Bring your imaginative world to vivid virtual life. Embark on virtual
          opulence with India's foremost 360° tour & CGI expert, revitalizing
          your digital experience.
        </p>
      </div>
    </main>
  );
}
