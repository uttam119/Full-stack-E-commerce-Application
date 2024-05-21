import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useEffect, useState } from "react"
import BannerFormComponent from "./banner-form.component"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import bannerSvc from "./banner.service"

const BannerEdit = ()=>{
    const [loading,setLoading]= useState(false)
     const[data,setData]=useState()
const navigate = useNavigate()
const params=useParams()
    const submitEvent=async (data)=>{
      try{
        setLoading(true)
        console.log("i am in banner-edit page")
        const response = await bannerSvc.updateBanner(data,params.id)
        toast.success(response.message)
        navigate("/admin/banner")

    }catch(exception){
        toast.error(exception.message)
        navigate("/admin/banner")
    }finally{
        setLoading(false)
    }

        
    }
   const getById=async()=>{
    try{
    let response=await bannerSvc.getBannerById(params.id)
    console.log("-----",response.result)
    setData(response.result)
   

    }catch(exception){
      toast.error("Error Fetching data")
      navigate("/admin/banner")
    }
    console.log("edithahaxaina",data)

   }
   useEffect(()=>{
  getById()
   },[])
   console.log("edithaha",data)
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Banner Edit"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Banner List", url: "/admin/banner" },
            { title: "Banner Edit", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Banner Edit"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
          
           <BannerFormComponent 
          
           submitEvent={submitEvent} 
            loading={loading}
            data={data}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default BannerEdit