import { useState } from "react"
import axios from "axios"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"

export default function AddDestinations(){
    const[name,setName]=useState("")
    const[imageName,setImageName]=useState("")
    const[image,setImage]=useState({})
     const saveData=async (url)=>{
        try{
        let data={
            name,
            status:true,
            image:url,
            createdAt:Timestamp.now()
        }
        await addDoc(collection(db,"Destination"),data)
        toast.success("destination added successfully")
        setName("")
        setImageName("")
        setImage({}) 
    }
    catch(err){
        toast.error(err.message)
    }
    }

    const handleForm=async(e)=>{
        e.preventDefault()
        console.log("Image",image);
         let formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "Destination"); // Replace with your upload preset
        // console.log("FormData",formData);
        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/dnxng3fkk/image/upload`, // Replace with your Cloudinary cloud name
                formData
            );
            
            saveData(response.data.secure_url)
        } catch (error) {
            toast.error("Error uploading image:", error.message);
            console.log(error);  
        }
    }
    return(
        <>
            <div className="site-wrap">
                <section className="site-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    {/* Left Side: Form */}
                    <div className="col-lg-6 mb-5">
                        <h2 className="mb-4">Add Destination</h2>
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
                            <label className="text-black">Name of Destination</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            required
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value)

                            }}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="text-black">Picture of Destination</label>
                            <input
                            type="file"
                            className="form-control"
                            placeholder="image"
                            required
                            value={imageName}
                            onChange={(e)=>{setImageName(e.target.value)
                                setImage(e.target.files[0])
                            }}
                            />
                        </div>
                        
                        <div className="form-group">
                            <input
                            type="submit"
                            value="Add"
                            className="btn px-4 btn-primary text-white"
                            />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
        </div>     
        </>
    )
}