import HttpService from "../../../config/http.service";

class BrandService extends HttpService{
    listAllBrand = async({page,limit=15})=>{
        console.log("second")
        try{
            let response = await this.getRequest("/v1/brand?page="+page+"&limit="+limit,{auth:true})
            console.log("me",response)
            console.log("third")
            return response

        }catch(exception){
            throw exception
        }
    }
    createBrand = async(data)=>{
        try{
            const response = await this.postRequest("/v1/brand",data,{ file:true,auth:true })
            return response;

        }catch(exception){
            throw exception
        }
    }

    deleteById=async(id)=>{
        try{
            const response = await this.deleteRequest("/v1/brand/"+id,{auth:true })
            return response;

        }catch(exception){
            throw exception
        }

    }

    getBrandById=async(id)=>{
        try{
 const response = await this.getRequest("/v1/brand/"+id,{auth:true})
return response;
}catch(exception){
            throw exception;
        }
    }

    updateBrand=async(data,id)=>{
        try{
            console.log("i am in update brand page")
            const response = await this.putRequest(
                "/v1/brand/"+id,
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
const response =await this.getRequest("/v1/brand/home")
return response
        }catch(exception){
            throw exception
        }
    }
}
const brandSvc = new BrandService()
export default brandSvc;