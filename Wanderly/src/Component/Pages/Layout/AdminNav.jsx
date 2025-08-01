import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminNav(){
    let isLogin= sessionStorage.getItem("isLogin")
    let name=sessionStorage.getItem("name")
    const nav=useNavigate()
    const logout=()=>{
        Swal.fire({
        title: "Are you sure you want to Logout?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!"
        }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear()
            nav("/signup")
            Swal.fire({
            title: "Logout!",
            text: "Logout successfully.",
            icon: "success"
            });
        }
        });
    }

    return(
        <>
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <small className="me-3 text-light">
            <i className="fa fa-map-marker-alt me-2" />
            O7 Services, Jalandhar, India
          </small>
          <small className="me-3 text-light">
            <i className="fa fa-phone-alt me-2" />
            +91 8699520520
          </small>
          <small className="text-light">
            <i className="fa fa-envelope-open me-2" />
            kartikhj12345@gmail.com
          </small>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}

         {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Tourist
        </h1>
        {/* <img src="/asset/img/logo.png" alt="Logo"> */}
      </Link>
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
          <Link to="/admin" className="nav-item nav-link">
            Home
          </Link>
           <Link to="/admin/destination" className="nav-item nav-link">
            Destination
          </Link> 
          <Link to="/admin/managedestination" className="nav-item nav-link">
            ManageDestination
          </Link>
          <Link to="/package" className="nav-item nav-link">
            Packages
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle active"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/destination" className="dropdown-item active">
                Destination
              </Link>
              <Link to="/booking" className="dropdown-item">
                Booking
              </Link>
              <Link to="/team" className="dropdown-item">
                Travel Guides
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="404.html" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
          {
              isLogin?
              <Link to="#" onClick={logout} className="nav-link">
              Logout {name}
            </Link>
            :
            <Link to="/signup" className="nav-link">
              Login
            </Link>
            }
        </div>
       
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      
    </div>
  </div>
  {/* Navbar & Hero End */}
        
        </>
    )
}
