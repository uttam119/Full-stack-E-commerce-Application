import { useEffect, useState } from "react"
import brandSvc from "../../../pages/cms/brand/brand.service";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BrandHomeListComponent=()=>{
    const [data,setData]=useState()


    const getAllList=async()=>{
        try{
     const response = await brandSvc.listForHome()
     console.log(response.result)
     console.log(response.result.result)
     setData(response.result)
        }catch(exception){
            //
        }
            
    }
    const imageStyle = {
        width: "80%",

        height: '200px',  // Set a fixed height
        // objectFit: 'cover', // Ensures the image covers the area, cropping if necessary
        // objectPosition: 'center' // Center the image
    };

    useEffect(()=>{
     getAllList()
    },[])
    
    return(
        <>
        <Row>
      <Col sm={12} md={12} lg={{offset:2 ,span:8}} className="py-3">
      <h4 className="text-center">Brand List </h4>

         
         </Col>
      </Row>

    <Row>
        {
    data && data.map((row,indx)=>(
         
         <Col sm={6} md={4} lg={2}>
            <Card className="my-4">
               <Card.Img className="my-4 mx-5 " variant="top"
                src={import.meta.env.VITE_IMAGE_URL+"/brand/"+row.image}
                style={imageStyle}
               ></Card.Img>

                <Card.Body>
                  <Card.Text>
                    <NavLink className={"btn-link text-center"} style={{textDecoration:"none"}} to="/brand/apple">
                     <h4>{row.title}</h4>
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
    )

}
export default BrandHomeListComponent