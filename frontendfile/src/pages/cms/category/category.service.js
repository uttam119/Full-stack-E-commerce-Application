import HttpService from "../../../config/http.service";

class CategoryService extends HttpService{
    listAllCategories = async({page,limit=10})=>{
        console.log("second")
        try{
            let response = await this.getRequest("/v1/category?page="+page+"&limit="+limit,{auth:true})
            console.log("me",response)
            console.log("third")
            return response

        }catch(exception){
            throw exception
        }
    }
    createCategory = async(data)=>{
        try{
            const response = await this.postRequest("/v1/category",data,{ file:true,auth:true })
            return response;

        }catch(exception){
            throw exception
        }
    }

    deleteById=async(id)=>{
        try{
            const response = await this.deleteRequest("/v1/category/"+id,{auth:true })
            return response;

        }catch(exception){
            throw exception
        }

    }

    getCategoryById=async(id)=>{
        try{
 const response = await this.getRequest("/v1/category/"+id,{auth:true})
return response;
}catch(exception){
            throw exception;
        }
    }
    listForHome=async()=>{
        try{
            const response = await this.getRequest("/v1/category/home")
             return response
        }catch(exception){
            throw exception
        }
    }
    getCategoryDetail=async(slug)=>{
       try{
const response=await this.getRequest("/v1/category/"+slug+"/slug")
return response      
}catch(exception){
        throw exception
       } 
    }
        
}
const categorySvc = new CategoryService()
export default categorySvc;