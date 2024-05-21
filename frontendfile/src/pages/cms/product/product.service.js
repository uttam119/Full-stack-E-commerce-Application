import HttpService from "../../../config/http.service";

class ProductService extends HttpService{
    listAllProduct = async({page})=>{
        console.log("second")
        try{
            let response = await this.getRequest("/v1/product?page="+page,{auth:true})
            console.log("me",response)
            console.log("third")
            return response

        }catch(exception){
            throw exception
        }
    }
    createProduct = async(data)=>{
        try{
            console.log("here is",data)
            const response = await this.postRequest("/v1/product",data,{ file:true,auth:true })
            return response;

        }catch(exception){
            throw exception
        }
    }

    deleteById=async(id)=>{
        try{
            const response = await this.deleteRequest("/v1/product/"+id,{auth:true })
            return response;

        }catch(exception){
            throw exception
        }

    }

    getProductById=async(id)=>{
        try{
 const response = await this.getRequest("/v1/product/"+id,{auth:true})
return response;
}catch(exception){
            throw exception;
        }
    }

    updateProduct=async(data,id)=>{
        try{
            console.log("i am in update product page")
            const response = await this.putRequest(
                "/v1/product/"+id,
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
const response =await this.getRequest("/v1/product/home")
return response
        }catch(exception){
            throw exception
        }
    }

    getProductDetail=async(slug)=>{
        try{
         const response= await this.getRequest("/v1/product/"+slug+"/slug")
        return response
        }catch(exception){
            throw exception;
        }
    }
}
const productSvc = new ProductService()
export default productSvc;