
import HomeComponent from "../../../component/home"
import {Container ,Col,Row} from "react-bootstrap"

const Error404Page=()=>{
    return (
        <>
       
        <Container>


<Row className=" mt-5 bg-danger bg-opacity-25">


    <Col sm={12} className="py-3">
<p className="text-danger my-3">Oops !The page you are looking for does not exist</p>
<a className="btn-link ">
    Go to Home Page
</a>
    </Col>
</Row>

        </Container>
        
        </>
    )
}

export default Error404Page;