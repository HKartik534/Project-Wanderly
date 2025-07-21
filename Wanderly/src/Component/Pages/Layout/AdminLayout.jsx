import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import Footer from "./Footer";

export default function AdminLayout(){
    return(
        <>
        <AdminNav></AdminNav>
        <Outlet></Outlet>
        <Footer></Footer>
        
        </>
    )
}