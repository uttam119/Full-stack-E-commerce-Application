import { useCallback, useEffect, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import productSvc from "../../cms/product/product.service"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetail =()=>{
    const [loading,setLoading] = useState()
    const params=useParams()
    const [detail,setDetail] =useState()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slideShow: 1,
        slidesToScroll: 1,
      };
    const getProductDetail =useCallback(async()=>{
try{
const response=await productSvc.getProductDetail(params.slug)
setDetail(response.result[0])
}catch(exception){
//
}finally{
    setLoading(false)
}

    },[])

    useEffect(()=>{
getProductDetail()
    },[])
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
        {/* <div>
          <img className="img img-fluid" src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img className="img img-fluid" src={banner2} alt="banner2" />
        </div>
        <div>
          <img className="img img-fluid" src={banner3} alt="banner3" />
        </div>
        <div>
          <img className="img img-fluid" src={banner2} alt="banner21" />
        </div>
        <div>
          <img className="img img-fluid" src={banner1} alt="banner231" />
        </div> */}
      </Slider>
</Col>
<Col sm={12} md={6} lg={8}>
    <h4>{detail.title}</h4>
    <hr />
    <div>{detail.summary}</div>
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

<Row>
    <Col sm={12} dangerouslySetInnerHTML={{__html:detail.description}}>

    </Col>
</Row>




   </Container>
   
   
   </>
   )
}
export default ProductDetail