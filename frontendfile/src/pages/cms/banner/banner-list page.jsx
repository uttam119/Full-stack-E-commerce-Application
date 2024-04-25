import { Card, Container } from "react-bootstrap";
import Heading from "../../../component/common/headings/headings.component";
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component";
import { NavLink } from "react-router-dom";
const BannerList=()=>{
return(
    <>
    <Container fluid className="px-4">
   <Heading className={"mt-4"} value={"Banner List"} type={"h1"}> </Heading>
   
  <BreadCrumb data={[{title:"Dashboard",url:"/admin" },{title:"Banner List",url:null}]} ></BreadCrumb>
    <Card className="mb-4">
        <Card.Header>
         <Heading value={"Banner List"} type="h4" className={"float-start"}></Heading>
         <NavLink className={"float-end btn btn-sm btn-success"} to="/admin/banner/create">
            <i className="fa fa-plus"></i>&nbsp:Add banner
         </NavLink>


        </Card.Header>
        <Card.Body>

        </Card.Body>
    </Card>
    </Container>
    



    </>
)
}
export default BannerList;