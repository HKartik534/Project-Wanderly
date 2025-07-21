import { collection, onSnapshot, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"

export default function ManageDestination(){
    const[destination,setDestination]=useState([])
    const fetchData=()=>{
        let q=query(collection(db,"Destination"))
        onSnapshot(q,(destinationCol)=>{
            setDestination(destinationCol.docs?.map((el)=>{
                return{...el.data(), id:el.id}

            }))

        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <> 
        <div className="container my-5">
            <div className="row">
                <div className="col table-responsive">
        
                     <h1>Manage Breeds</h1>
                
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Sno</th>
                                <th>Image</th>
                                <th>Name of Destination</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {destination?.map((el,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>
                                            <img src={el?.image} style={{height:"50px", width:"50px"}}/>
                                        </td>
                                        <td>{el?.name}</td>
                                        <td>{el?.status}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
        </>
    )
}