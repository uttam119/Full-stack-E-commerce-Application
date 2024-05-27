import React from "react";

import {Container,Row,Col, Card, Nav} from "react-bootstrap"
import HomeComponent from "../../component/home";
import apple from "../../assets/images/brand/apple.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const landingTitleCss={
   backgroundColor:"#cccddd",
   margin:"20px"
}
const LandingPage = (props)=>{
   const isDarkTheme=useSelector((store)=>{
      return store.theme.isDarkTheme
   })
   console.log(isDarkTheme)
      return (
    <>
   
{/* <div style={homelayout}> */}
   

  <Container fluid className={isDarkTheme?"bg-dark":"bg-white"}>
    <Row>
 <Col sm={12} md={4} lg={4}>
 <HomeComponent.CategoryHomeListComponent/>
 
 
 </Col>
 

 <Col sm={12} md={8} lg={8}>
    <HomeComponent.BannerListHomeComponent/>
 </Col>
    </Row>
   
  </Container>
  <Container fluid className={isDarkTheme?"bg-dark":"bg-white"}>
  
      <HomeComponent.BrandHomeListComponent datame={isDarkTheme}/>
      

  </Container>

  <Container fluid className={isDarkTheme?"bg-dark":"bg-white"}>
  
  <HomeComponent.ProductHomeListComponent datame={isDarkTheme}/>
  

</Container>

   {/* <Container fluid>
      <Row>
      <Col sm={12} md={12} lg={{offset:2 ,span:8}} className="py-3">
      <h4 className="text-center">Brand List List</h4>

         
         </Col>
      </Row>
      <Row>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                    <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2}>
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4 >Apple</h4>
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         
      </Row>
   </Container> */}

 {/* <Container fluid>
  <Row>
   <Col sm={12} md={12} lg={{offset:2 ,span:8}} className="py-3">
      <h4 className="text-center">Product List</h4>

   </Col>
  </Row>
  <Row>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
           
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         <Col sm={6} md={4} lg={2} className="mb-3">
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>

         <Col sm={6} md={4} lg={2} className="mb-3" >
            <Card>
               <Card.Img variant="top" src={apple}></Card.Img>

                <Card.Body>
                  <Card.Text>
                  <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/product-list">
                     <h4>Product</h4>
                    </NavLink>
                    <hr />
                    <p>
                    <strong className="me-3">
                     Npr. 1000
                    </strong>
                    <del className="text-danger">Npr. 1500</del>
                    </p>
                    <NavLink to="/product-detail/productSlug" className={'btn btn-sm btn-warning'}>
                     View Detail
                    </NavLink>
                    <hr />
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
         
      </Row>
 </Container> */}

{/* </div> */}
   </> )
}

export default LandingPage;