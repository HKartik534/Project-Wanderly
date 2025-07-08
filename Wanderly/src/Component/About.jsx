function About(){
    return(
        <>
 
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <small className="me-3 text-light">
            <i className="fa fa-map-marker-alt me-2" />
            Location, City, Country
          </small>
          <small className="me-3 text-light">
            <i className="fa fa-phone-alt me-2" />
            +012 345 6789
          </small>
          <small className="text-light">
            <i className="fa fa-envelope-open me-2" />
            info@example.com
          </small>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-twitter fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-facebook-f fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-linkedin-in fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-instagram fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href=""
          >
            <i className="fab fa-youtube fw-normal" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Tourist
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link active">
            About
          </a>
          <a href="service.html" className="nav-item nav-link">
            Services
          </a>
          <a href="package.html" className="nav-item nav-link">
            Packages
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="destination.html" className="dropdown-item">
                Destination
              </a>
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Travel Guides
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a href="" className="btn btn-primary rounded-pill py-2 px-4">
          Register
        </a>
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/about.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">
            Welcome to <span className="text-primary">Tourist</span>
          </h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                First Class Flights
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Handpicked Hotels
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />5 Star
                Accommodations
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Latest Model Vehicles
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                150 Premium City Tours
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                24/7 Service
              </p>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Travel Guide
        </h6>
        <h1 className="mb-5">Meet Our Guide</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-1.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-2.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-3.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/team-4.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Company</h4>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Privacy Policy
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            FAQs &amp; Help
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Contact</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Location, City, Country
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Gallery</h4>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="img/package-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-primary w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <a className="border-bottom" href="https://freewebsitecode.com">
              Your Site Name
            </a>
            , All Right Reserved. Designed By{" "}
            <a className="border-bottom" href="https://freewebsitecode.com">
              Free Website Code
            </a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
</>

    )
}

export default About