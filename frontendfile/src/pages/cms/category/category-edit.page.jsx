import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap"
import Heading from "../../../component/common/headings/headings.component"
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component"
import { FaTruckLoading } from "react-icons/fa"
import { useEffect, useState } from "react"
import CategoryFormComponent from "./category-form.component"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import bannerSvc from "./category.service"
import categorySvc from "./category.service"

const CategoryEdit = ()=>{
    const [loading,setLoading]= useState(false)
     const[data,setData]=useState()
const navigate = useNavigate()
const params=useParams()
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
   const getById=async()=>{
    try{
    let response=await bannerSvc.getCategoryById(params.id)
    setData(response.result)
    console.log(response)

    }catch(exception){
      toast.error("Error Fetching data")
      navigate("/admin/category")
    }

   }
   useEffect(()=>{
  getById()
   },[])
    
    return(<>
    <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"category Edit"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "category List", url: "/admin/category" },
            { title: "category Edit", url:null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"category Edit"}
              type="h4"
              className={"float-start"}
            ></Heading>
           
          </Card.Header>
          <Card.Body>
           <CategoryFormComponent submitEvent={submitEvent} 
            loading={loading}
            value={data}
           />
          </Card.Body>
        </Card>
      </Container>
    </>)

}
export default CategoryEdit