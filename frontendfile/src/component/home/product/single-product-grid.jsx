import { Card, Col} from "react-bootstrap"
import { NavLink } from "react-router-dom"

const SingleProductGrid = ({detail}) => {
    console.log("jere",detail)
    console.log("impodf",detail.slug)
    return (
        
        
        <>
      
    
{
    detail && 
    <Col sm={6} md={4} lg={2} className="mb-3">
        <Card>
            <Card.Img variant="top"  src={import.meta.env.VITE_IMAGE_URL+"/product/"+detail.images[0]}></Card.Img>

            <Card.Body>
                <Card.Text as={"div"}>
                    <NavLink className={"btn-link text-center"} style={{ textDecoration: "none" }} to={"/product-detail/"+detail.slug}>
                        <h4>{detail.title}</h4>
                    </NavLink>
                    <hr />
                    <p>
                        <strong className="me-3">
                            {new Intl.NumberFormat("en-NP",{style:"currency",currency:"Npr"}).format(detail.afterDiscount)}
                        </strong>
                        <p>

                        </p>

                       {
                        detail.discount?<>
                         <del className="text-danger">
                         {new Intl.NumberFormat("en-NP",{style:"currency",currency:"Npr"}).format(detail.price)}
                            
                            </del></>:<></>
                       }
                    </p>
                    <NavLink to={"/product-detail/"+detail.slug} className={'btn btn-sm btn-warning'}>
                        View Detail
                    </NavLink>
                    <hr />
                </Card.Text>
            </Card.Body>



        </Card>



    </Col>
}


        </>
    )

}
export default SingleProductGrid