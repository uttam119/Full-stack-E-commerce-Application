import HttpService from "../../../config/http.service";

class BannerService extends HttpService{
    listAllBanner = async({page})=>{
        console.log("second")
        try{
            let response = await this.getRequest("/v1/banner?page="+page,{auth:true})
            console.log("me",response)
            console.log("third")
            return response

        }catch(exception){
            throw exception
        }
    }
    createBanner = async(data)=>{
        try{
            const response = await this.postRequest("/v1/banner",data,{ file:true,auth:true })
            return response;

        }catch(exception){
            throw exception
        }
    }

    deleteById=async(id)=>{
        try{
            const response = await this.deleteRequest("/v1/banner/"+id,{auth:true })
            return response;

        }catch(exception){
            throw exception
        }

    }

    getBannerById=async(id)=>{
        try{
 const response = await this.getRequest("/v1/banner/"+id,{auth:true})
return response;
}catch(exception){
            throw exception;
        }
    }

    updateBanner=async(data,id)=>{
        try{
            console.log("i am in update banner page")
            const response = await this.putRequest(
                "/v1/banner/"+id,
                data,
                {auth:true,file:true}
            )
                return response

        }catch(exception){
            throw exception
        }
    }
    listForHome=async()=>{
        try{
const response =await this.getRequest("/v1/banner/home")
return response
        }catch(exception){
            throw exception
        }
    }
}
const bannerSvc = new BannerService()
export default bannerSvc;