import React from "react";
// import "./landing.page.module.css;"
import {Container,Row,Col} from "react-bootstrap"
import HomeComponent from "../../component/home";
// import HomeHeaderComponent from "../../component/home/header/header.component";
// import HomeFooterComponent from "../../component/home/footer/footer.component";
// import CategoryHomeListComponent from "../../component/home/category/category-list-home.component";
// import BannerListHomeComponent from "../../component/home/banner/banner-list-home.component";

const LandingPage = (props)=>{
    return (
    <>
   


  <Container fluid>
    <Row>
 <Col sm={12} md={4} lg={3}>
 <HomeComponent.CategoryHomeListComponent/>
 
 </Col>

 <Col sm={12} md={8} lg={9}>
    <HomeComponent.BannerListHomeComponent/>
 </Col>
    </Row>
  </Container>

        
 

   </> )
}

export default LandingPage;