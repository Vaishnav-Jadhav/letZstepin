import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-100 position-sticky top-0 bg-black text-white" style={{ zIndex: 1000 }}>
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/brandLogo.png" height={40} alt="Logo" />
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/location">
                Location
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="btn btn-light rounded-4 fw-semibold text-dark" to="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
