import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useState } from "react"
import BannerFormComponent from "./banner-form.component"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import bannerSvc from "./banner.service"

const BannerCreate = ()=>{
    const [loading,setLoading]= useState(false)
const navigate = useNavigate()
    const submitEvent=async (data)=>{
        try{
            setLoading(true)
            const response = await bannerSvc.createBanner(data)
            toast.success(response.message)
            navigate("/admin/banner")

        }catch(exception){
            toast.error(exception.message)
            navigate("/admin/banner")
        }finally{
            setLoading(false)
        }

        
    }
   
    
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Banner Create"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Banner List", url: "/admin/banner" },
            { title: "Banner Create", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Banner Create"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
           <BannerFormComponent submitEvent={submitEvent} 
            loading={loading}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default BannerCreate