
import HttpService from "../../../config/http.service"
class UserService extends HttpService{

    listAllUsers=async(role)=>{
        try{
            let response = await this.getRequest('/v1/user/by-role/'+role,{auth:true})
            return response;

        }catch(exception){
            throw exception
        }

    }
}
export default new UserService()