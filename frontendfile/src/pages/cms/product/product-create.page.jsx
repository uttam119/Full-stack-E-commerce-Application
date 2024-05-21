import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useState } from "react"
import ProductFormComponent from "./product-form.component"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import productSvc from "./product.service"

const ProductCreate = ()=>{
    const [loading,setLoading]= useState(false)
const navigate = useNavigate()
    const submitEvent=async (data)=>{
        try{
            setLoading(true)
            const response = await productSvc.createProduct(data)
            toast.success(response.message)
            navigate("/admin/product")

        }catch(exception){
            toast.error(exception.message)
            navigate("/admin/product")
        }finally{
            setLoading(false)
        }

        
    }
   
    
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"product Create"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "product List", url: "/admin/product" },
            { title: "product Create", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"product Create"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
           <ProductFormComponent submitEvent={submitEvent} 
            loading={loading}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default ProductCreate