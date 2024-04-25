import { useContext,createContext,useState,useEffect} from "react";
import authSvc from "../pages/common/auth/service/auth.service";

const AuthContext = createContext();
export const useAuth =()=> useContext(AuthContext)

const AuthProvider = ({children})=>{




   
    const [loggedInUser,setLoggedInUser] = useState()
     const [loading,setLoading]=useState(true)
const getLoggedInUser= async()=>{
    try{
        let loggedInUser= await authSvc.getLoggedInUser()
        if(loggedInUser){

        
        setLoggedInUser(loggedInUser.result)
        }
      
    }catch(exception){
        console.log(exception)
    }finally{
        setLoading(false)
    }
}
    

    useEffect(()=>{
        getLoggedInUser()
    },[])



   

    return(

        <AuthContext.Provider value = {{loggedInUser}}>
{


    loading ? "Loading":children
}
           
        </AuthContext.Provider>
    )
}

export default AuthProvider