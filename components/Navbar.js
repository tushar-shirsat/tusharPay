import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">TusharPay</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show && "show"}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn  btn-style" type="submit">
                  Sign In
                </button>
                <button
                  className="btn  btn-style btn-style-border"
                  type="submit"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
