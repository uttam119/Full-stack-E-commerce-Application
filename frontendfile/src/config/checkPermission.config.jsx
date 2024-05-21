import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./auth.config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
const PermissionCheck = ({ role, Component }) => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(true)
  const loggedInUser = useSelector((root)=>{
  return root.auth.loggedInUser;
  });



 useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token){
        if(loggedInUser){
            setLoading(false)
        }
    }else{
        toast.error('Please login first')
        navigate("/login")
    }
 },[loggedInUser])
//  console.log("dfdfdis",loggedInUser);

 if(loading){
    return <Spinner variant="dark" className="m-5 p-5"></Spinner>
 }

  else if (
    loggedInUser &&
    loggedInUser.hasOwnProperty("role") &&
    loggedInUser.role === role
  ) {
    return Component;
  } else if (loggedInUser) {
    toast.warning("You donot have permisssion to access this!!");
    return <Navigate to={"/" + loggedInUser.role} />;
  } 
};
export default PermissionCheck;
