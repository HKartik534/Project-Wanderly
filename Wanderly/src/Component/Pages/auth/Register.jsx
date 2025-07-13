import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register(){
  const[email,setEmail]=useState("abc@gmail.com")
  const[password, setPassword]=useState("")
  const[name,setName]=useState("")
  const changename=(e)=>{
    setName(e.target.value) 
  }
  let nav=useNavigate()
  const handleform=(e)=>{
    e.preventDefault()
    if(name=="admin" && password=="2025"&& email=="admin@gmail.com"){
      toast.success("Registered Successfully")
      nav("/home")
    }
    else{
      toast.error("Invalid Credentials")
    }
  }


    return(
        <>
         {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Register
        </h6>
        <h1 className="mb-5">Your Details:</h1>
      </div>
      <div className="row g-4 justify content:center">
        
        
        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form onSubmit={handleform}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={changename}
                    value={name}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}

                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value)

                    }}
                  />
                  <label htmlFor="subject">Password</label>
                </div>
              </div>
             
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit" >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
    <i className="bi bi-arrow-up" />
  </a>
  <Link to="/signup">
<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
   <h6 className="section-title bg-white text-center text-primary px-3">
          Sign up to an existing account
        </h6>
        </div>
        </Link>
        </>
    )
}