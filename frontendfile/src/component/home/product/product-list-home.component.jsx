import { useState, useEffect, useCallback } from "react";
import { ListGroup, Badge, Col, Row, Card } from "react-bootstrap";
import { FaBolt, FaFootballBall, FaListAlt, FaMobile, FaPhone, FaTshirt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { FaShirt } from "react-icons/fa";

// import {useState,useEffect} from "react;"

import "./product-list-home-component.css";

import productSvc from "../../../pages/cms/product/product.service";
import { useSelector } from "react-redux";
const ProductHomeListComponent = ({datame}) => {
  const [data, setData] = useState();
const getProductList=useCallback(async()=>{
  try{
  const response= await productSvc.listForHome()
  console.log("productlitd",response)
  setData(response.result)
  }catch(exception){
    //
  }
},[])
const imageStyle = {
  width: "80%",

  height: '200px',  // Set a fixed height
  // objectFit: 'cover', // Ensures the image covers the area, cropping if necessary
  // objectPosition: 'center' // Center the image
};


  useEffect(() => {
   getProductList()
  },[]);



//   const isDarkTheme=useSelector((store)=>{
//     return store.theme.isDarkTheme
//  })

  return (
    <>
  
     <Row>
      <Col sm={12} md={12} lg={{offset:2 ,span:8}} className="py-3">
      <h4  className={`text-center ${datame ? 'text-white' : 'text-dark'}`}>Product List </h4>

         
         </Col>
      </Row>

    <Row>
        {
    data && data.map((row,indx)=>(
            
         <Col sm={6} md={4} lg={2}>
            <Card className="my-4">
               <Card.Img className="my-4 mx-5 " variant="top"
                src={import.meta.env.VITE_IMAGE_URL+"/product/"+row.images[0]}
                style={imageStyle}
               ></Card.Img>

                <Card.Body>
                  <Card.Text>
                    <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to={"/product-detail/"+row.slug}>
                     <h4 className="text-center">{row.title}</h4>

                     
                     {/* <h4>{row.description}</h4> */}
                    </NavLink>
                  </Card.Text>
                </Card.Body>



            </Card>
         
        
         
         </Col>
        ))
    }
         </Row>
   
    </>
  );
};
export default ProductHomeListComponent;
