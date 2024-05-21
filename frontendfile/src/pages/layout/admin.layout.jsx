import { Outlet, useNavigate } from "react-router-dom";
import "./admin.layout.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../config/auth.config";

import { AdminSideBar, AdminTopHeader } from "../../component/cms";
import { useSelector } from "react-redux";

// const AdminLayout =()=>{
//   const{loggedInUser}=useAuth()
//   const navigate= useNavigate()

//   useEffect(()=>{
//     if(!loggedInUser){
       
        
//         toast.error("Please login first to access admin portal")
//         navigate("/login")
//     }
//   },[]);

//     document.title="Admin Pannel"
const AdminLayout = () => {
    // const { loggedInUser } = useAuth();
    const loggedInUser=useSelector((store)=>{
        return store.auth.loggedInUser

    })
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) {
            toast.error("Please login first to access the admin portal");
            navigate("/login");
        }
    }, []);

    document.title = "Admin Panel";

    // if (!loggedInUser) {
    //     return null; // Or any loading indicator
    // }


    return (
        <>
        <AdminTopHeader/>
        <div id="layoutSidenav">
        <AdminSideBar/>
      
            <div id="layoutSidenav_content">
                <main>
                    

                    <Outlet/>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
     </div>
        </>
    )
}

export default AdminLayout;