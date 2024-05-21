

import { useCallback, useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap"

// import HomeComponent from "../../../component/home";
import { useParams, useSearchParams } from "react-router-dom";
import categorySvc from "../../cms/category/category.service";
import SingleProductGrid from "../../../component/home/product/single-product-grid.jsx"

const CategoryDetail = () => {

    const params = useParams();
    const[detail,setDetail]=useState()
    const getCatDetail=useCallback(async ()=>{
        try{  
            const response=await categorySvc.getCategoryDetail(params.catSlug)
            console.log("category-detail",response)
            setDetail(response.result)
        }catch(exception){
            //
        }
    },[])

    useEffect(()=>{
        getCatDetail()
    },[params])

    return (
        <>

           
            <Container className="my-5">

                <Row className="bg-light py-3 mb-5">

                    <Col sm={12} className="bg-success bg-opacity-25">
                      <h5>{detail?.detail[0]?.title}</h5>
                       


                    </Col>

                </Row>

                <Row>
                    {detail?.products && detail?.products.map((prod,ind)=>(
                        <SingleProductGrid 
                        
                        detail={prod}
                        key={ind}
                        />
                    ))
                    }
                </Row>
            </Container>

           
        </>
    )
}

export default CategoryDetail