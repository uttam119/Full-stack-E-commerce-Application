import axiosInstance from "./axios.config"

class HttpService {
    headers;
    #getHeaders=(config)=>{
        console.log(config)
        if(config.auth){
            const token = localStorage.getItem("token")
            console.log(token)
            this.headers={
                ...this.headers,
                "Authorization":"Bearer "+token
               
            }
        }
        if(config.file){
            this.headers={
                ...this.headers,
                "Content-Type":"multipart/form-data"
            }
        }
        console.log("Headers:", this.headers);
    }
    postRequest = async(url,data={},config={})=>{
        try{
            this.#getHeaders(config)
            let response = await axiosInstance.post(url,data,{
                headers:{
                    ...this.headers
                }
            })
            return response

        }catch(exception){
            throw(exception)
        }

    }
    getRequest = async(url,config={})=>{
        try{
            console.log("third here")
            this.#getHeaders(config)
            console.log("fourth")
            let response = await axiosInstance.get(url,{
                headers:{
                    ...this.headers
                }
            })
            console.log(response)
            return response

        }catch(exception){
            throw(exception)
        }

    }
    deleteRequest = async(url,config={})=>{
        try{
            console.log("third here")
            this.#getHeaders(config)
            console.log("fourth")
            let response = await axiosInstance.delete(url,{
                headers:{
                    ...this.headers
                }
            })
            console.log(response)
            return response

        }catch(exception){
            throw(exception)
        }

    }

    putRequest=async(url,data,config={})=>{
        try{
            console.log("damna")
            this.#getHeaders(config)
            let response = await axiosInstance.put(url,data,{
                headers:{
                    ...this.headers
                }
            })
            return response

        }catch(exception){
            throw(exception)
        }
    }
    
}
export default HttpService;