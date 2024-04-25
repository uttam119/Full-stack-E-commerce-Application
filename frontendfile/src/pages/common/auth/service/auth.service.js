import axiosInstance from "../../../../config/axios.config"
class AuthService{
    login =async(data)=>{
        try{
      const response = await axiosInstance.post("/v1/login",data)
      console.log(response)
      localStorage.setItem("token",response.result.token)
      const getLoggedInUser= await this.getLoggedInUser()
      console.log(getLoggedInUser)
      return getLoggedInUser;
       
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }

    getLoggedInUser=async()=>{
        try{
            const token= localStorage.getItem("token")
            if(!token){
            throw {message:"please login first to get loggedin user detail"}


        }
        const response= await axiosInstance.get("/v1/me",{
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer"+token
            }
           
        }
     
    )
    return response;
       
    }
        
        catch(exception){
        throw exception

        }
    }
    register=async(data)=>{
        try
        {
        const response= await axiosInstance.post("/v1/register",data,{headers:{"Content-Type":"multipart/form-data"}})
         
       return response;
        }
        catch(exception){
            throw exception
        }
    }
    verifyActivationToken=async(token)=>{
        try{
        const response= await axiosInstance.post("/v1/verify-token/"+token)
         
      return response;
        }catch(exception){
            throw exception
        }
    }
    submitForPasswordSet=async(token,payload)=>{
        try{
        const response= await axiosInstance.post("/v1/set-password/"+token,payload)
       return response;
        }catch(exception){
            throw exception
        }
    }
    submitForPasswordUpdate= async(token,payload)=>{
        try{
const response= await axiosInstance.post("/v1/reset-password/"+token,payload)
return response;
        }catch(exception){
            throw exception
        }

    }
    sendForgetPassword = async(data)=>{
        try{
const response = await axiosInstance.post("/v1/forget-password",data)
         return response;
        }catch(exception){
            throw exception
        }
    }
}
const authSvc = new AuthService()
export default authSvc;