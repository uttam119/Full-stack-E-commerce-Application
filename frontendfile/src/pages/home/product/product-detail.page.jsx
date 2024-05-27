import { useCallback, useEffect, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import productSvc from "../../cms/product/product.service"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetail =()=>{
  console.log("i am don in product detail")
    const [loading,setLoading] = useState(true)
    const params=useParams()
    const [detail,setDetail] =useState()
    const settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slideShow: 1,
        slidesToScroll: 1,
      };
      console.log(params.slug)
    const getProductDetail =useCallback(async()=>{
try{
  console.log("here is params",params.slug)
const response=await productSvc.getProductDetail(params.slug)
setDetail(response.result)
}catch(exception){
//
}finally{
    setLoading(false)
}

    },[])

    useEffect(()=>{
      console.log("goood")
getProductDetail()
    },[params])
return(
   <>
 
   <Container className="my-5">

    <Row>
        
       {
        loading? <><Col className="text-center">
        
        <Spinner variant="success" />
        </Col>
        
        </>
        :<>
      {
        detail && <>
         <Col sm={12} md={6} lg={4}>
         <Slider {...settings}>
        {
          detail.images && detail.images.map((image,indx)=>(
            <div key={indx}>
          

            <img className="img img-fluid" onError={(e)=>{
              e.target.src="https://placehold.jp/1400x600.png"
            }} src={import.meta.env.VITE_IMAGE_URL+"/product/"+image} alt="Product 231" />

            </div>
          ))
        }
      
      </Slider>
</Col>
<Col sm={12} md={6} lg={8}>
    <h4>{detail.title}</h4>
    <hr />
    <div>{detail.summary}</div>
    <p>
                    <strong className="me-3">
                     Npr. {detail.price}
                    </strong>
                    <del className="text-danger">Npr.{detail.price*detail.discount/100}</del>
                    </p>
    <div>
        {
            new Intl.NumberFormat("en-NP",{style:"currency",currency:"Npr"}).format(detail.afterDiscount)
        }
    </div>
</Col>

        </>
      }
        </>
       }
    </Row>

{/* <Row>
    <Col sm={12} dangerouslySetInnerHTML={{__html:detail.description}}>

    </Col>
</Row>
 */}



   </Container>
   
   
   </>
   )
}
export default ProductDetail