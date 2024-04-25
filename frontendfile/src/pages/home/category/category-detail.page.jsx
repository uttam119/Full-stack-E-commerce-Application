

import { Col, Row, Container } from "react-bootstrap"

// import HomeComponent from "../../../component/home";
import { useParams, useSearchParams } from "react-router-dom";

const CategoryDetail = () => {

    const params = useParams();
    const [query] = useSearchParams();
    return (
        <>

           
            <Container className="my-5">

                <Row>

                    <Col sm={12} className="bg-success bg-opacity-25">
                        Detail of category <em>"{params.slug}"</em>
                        On query:{query.get("price")},{query.get("search")}



                    </Col>

                </Row>
            </Container>

           
        </>
    )
}

export default CategoryDetail