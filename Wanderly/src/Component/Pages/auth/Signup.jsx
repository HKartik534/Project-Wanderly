import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../../Firebase";
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";


export default function Signup(){
    
    const[email, setEmail]=useState("")
    const[password,setPassword]=useState("")
    let nav= useNavigate()
    let signInGoogle=()=>{
        let provider= new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((userCred)=>{
            console.log(userCred.user.uid);
            toast.success("Login successful")
            nav("/home")
        })
    }
    let handleForm=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCred)=>{
            console.log(userCred.user.uid);
            // toast.success("Login Successful")
            nav("/home")
            // console.log();
            
            getUserData(userCred.user.uid)

            
        })
        .catch((error)=>{
            console.log(error.message);
            
        })
    }

     const getUserData=async (userId)=>{
        console.log("hlo",userId);
        
        let userDoc=await getDoc(doc(db, "users", userId))
        // console.log(userDoc.data())
        let userData=userDoc.data()
        sessionStorage.setItem("name", userData.name)
        sessionStorage.setItem("email", userData.email)
        sessionStorage.setItem("userType", userData.userType)
         sessionStorage.setItem("userId", userId)
          sessionStorage.setItem("isLogin", true)
          toast.success("Login successfully")
            if(userData?.userType==1){
                nav("/admin")
        }
        else{
                nav("/home")
        }    
      }
    return(
        <>
         <div className="site-wrap">
            <section className="site-section">
            <div className="container">
                <div className="row align-items-center">
                {/* Left Side: Form */}
                <div className="col-lg-6 mb-5">
                    <h2 className="mb-4">Login To Wanderly</h2>
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
                        value="Login"
                        className="btn px-4 btn-primary text-white"
                        />
                    </div>
                    <p>  </p>
                    <button
                    onClick={signInGoogle}
                    style={{
                        border: "none",
                        background: "none",
                        padding: 0,
                        display: "inline-block",
                        borderRadius: "8px",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                        transition: "transform 0.3s ease",
                    }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                    <img
                    src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                    alt="Sign in with Google"
                    style={{
                    height: "40px",
                    display: "block",
                    borderRadius: "8px",
                    }}
                    />
                </button>
                    </form>

                    <div className="text-center mt-3">
                    <p>
                        Dont have an account?{" "}
                        <Link to="/register" className="text-primary">
                        Register now!
                        </Link>
                    </p>
                    </div>
                </div>

                {/* Right Side: Image + Text */}
                <div className="col-lg-6 text-center">
                    <img
                    src="/asset/img/about.jpg"
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
                    <strong>Explore thousands of destinations </strong><br />
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