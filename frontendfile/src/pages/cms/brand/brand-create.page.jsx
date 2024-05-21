import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useState } from "react"
import BrandFormComponent from "./brand-form.component"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import brandSvc from "./brand.service"

const BrandCreate = ()=>{
    const [loading,setLoading]= useState(false)
const navigate = useNavigate()
    const submitEvent=async (data)=>{
        try{
            setLoading(true)
            const response = await brandSvc.createBrand(data)
            toast.success(response.message)
            navigate("/admin/brand")

        }catch(exception){
            toast.error(exception.message)
            navigate("/admin/brand")
        }finally{
            setLoading(false)
        }

        
    }
   
    
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Brand Create"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Brand List", url: "/admin/brand" },
            { title: "Brand Create", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Brand Create"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
           <BrandFormComponent submitEvent={submitEvent} 
            loading={loading}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default BrandCreate