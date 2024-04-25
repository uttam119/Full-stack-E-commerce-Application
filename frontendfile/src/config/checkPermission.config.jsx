import {toast} from "react-toastify"
import { Navigate } from "react-router-dom";
import {useAuth} from "./auth.config"
const PermissionCheck=({role,Component})=>{
const {loggedInUser}  =useAuth()
console.log(loggedInUser);
if(loggedInUser.role === role){

return Component;
}else{
    toast.warning("You donot have permission to use this!!!")
    return <Navigate to={"/"+loggedInUser.role}></Navigate>
}

}
export default PermissionCheck