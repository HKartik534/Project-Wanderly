import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sign_up(){
     const[email, setEmail]=useState("abc@gmail.com")
     const[password, setPassword]=useState("")
     let nav=useNavigate()
     const handleform=(e)=>{
      e.preventDefault()
      if(email=="admin@gmail.com" && password=="2025"){
        toast.success("Loged in successfully")
        nav("/home")
      }
      else{
        toast.error("Invalid credentials")
        
      }
     }

    return(
         <>
         {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Sign-Up
        </h6>
        <h1 className="mb-5">Your Details:</h1>
      </div>
      <div className="row g-4 justify content:center">
        
        
        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form onSubmit={handleform}>
           < div className="row g-3">
              <div className="col-md-6">
               
              </div>
              <div className="col-md-12">
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
                <button className="btn btn-primary w-100 py-3" type="submit">
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
  
        </>
    )
}