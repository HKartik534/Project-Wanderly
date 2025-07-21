import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth, db } from "../../../Firebase"
import { Link, useNavigate } from "react-router-dom"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
import { toast } from "react-toastify"
export default function Register(){
  const [name, setName]=useState("")
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  let nav=useNavigate()
  let handleForm=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCred)=>{
      // console.log(userCred.user.uid);
      let userId=userCred.user.uid
      saveData(userId)
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }
  const saveData= async(userId)=>{
    try {let data={
    name:name,
    email:email,
    userType:3,
    userId:userId,
    status:true,
    createdAt:Timestamp.now()
  }
  await setDoc(doc(db,"users",userId),data)
  toast.success("Registered successfully")
  nav("/home") 
  getUserData(userId)
    }  
  catch (error) {
      toast.error(error.message)  
  } 
}
const getUserData=async (userId)=>{
      let userDoc=await getDoc(doc(db, "users", userId))
      console.log(userDoc.data())
      let userData=userDoc.data()
      sessionStorage.setItem("name", userData?.name)
      sessionStorage.setItem("email", userData?.email)
      sessionStorage.setItem("userType", userData?.userType)
      sessionStorage.setItem("userId", userId)
      sessionStorage.setItem("isLogin", true)
      toast.success("Login successfully")
      if(userData.userType==1){
            nav("/admin")
          }else{
            nav("/home")
          }
      
    }

    
    return(
        <>
         <div className="site-wrap">
            <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-body" />
        </div>

       

        <section className="site-section">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side: Form */}
              <div className="col-lg-6 mb-5">
                <h2 className="mb-4">Sign Up To Wanderly</h2>
                <form
                  onSubmit={handleForm}
                  className="p-4"
                  style={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div className="form-group mb-3">
                    <label className="text-black">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-black">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      required
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)

                      }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-black">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-black">Re-Type Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Re-type Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn px-4 btn-primary text-white"
                    />
                  </div>
                  
                   
                </form>

                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <Link to="/signup" className="text-primary">
                      Log In
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right Side: Image + Text */}
              <div className="col-lg-6 text-center">
                <img
                  src="/asset/img/destination-1.jpg"
                  alt="Register Illustration"
                  style={{
                    maxWidth: "600px",
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    margin: "0 auto",
                  }}
                />
                <p className="mt-0" style={{ fontSize: "1.1rem", color: "#555" }}>
                  <strong>Explore thousands of places</strong><br />
                  Start your journey with Wanderly today!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
        </>
    )
}