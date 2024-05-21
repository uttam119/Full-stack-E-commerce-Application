import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useState } from "react"
import CategoryFormComponent from "./category-form.component"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import categorySvc from "./category.service"

const CategoryCreate = ()=>{
    const [loading,setLoading]= useState(false)
const navigate = useNavigate()
    const submitEvent=async (data)=>{
        try{
            setLoading(true)
            const response = await categorySvc.createCategory(data)
            toast.success(response.message)
            navigate("/admin/category")

        }catch(exception){
            toast.error(exception.message)
            navigate("/admin/category")
        }finally{
            setLoading(false)
        }

        
    }
   
    
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Category Create"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Category List", url: "/admin/category" },
            { title: "Category Create", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Category Create"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
           <CategoryFormComponent submitEvent={submitEvent} 
            loading={loading}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default CategoryCreate