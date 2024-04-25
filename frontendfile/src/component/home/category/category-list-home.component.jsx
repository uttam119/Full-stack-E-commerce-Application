import { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { FaBolt, FaFootballBall, FaMobile, FaPhone, FaTshirt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { FaShirt } from "react-icons/fa";

// import {useState,useEffect} from "react;"

import "./category-list-home-component.css";
const CategoryHomeListComponent = (props) => {
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    console.log("I am always called");
  });

  // const [categoryList,setCategoryList]=useState(null)

  // // useEffect(()=>{
  // //     console.log("i am always called.")
  // // })

  // useEffect(() => {
  //     //only one execution of the  code on the very first render

  //     console.log('I am always Called')
  //     setCategoryList('Here')
  // },[]);

  // useEffect(()=>{
  //     console.log('Only calls on category list')
  // },[categoryList])
  return (
    <>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
            <NavLink to ={"/category/clothing" }className={"btn btn-link text-decoration-none category-menu-text"}>

            <FaTshirt className="me-1" size={"20px"} />
              Clothing
            </NavLink>
            </div>
          </div>
          <Badge bg="success" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
            <NavLink to ={"/category/Electronics" }className={"btn btn-link text-decoration-none category-menu-text"}>
              <FaBolt className="me-1" size={"20px"} />
              Electronics
              </NavLink>
            </div>
          </div>
          <Badge bg="success" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
            <NavLink to ={"/category/SmartPhones" }className={"btn btn-link text-decoration-none category-menu-text"}>
              <FaMobile className="me-1" size={"20px"} />
              Smart Phones
              </NavLink>
            </div>
          </div>
          <Badge bg="success" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
            <NavLink to ={"/category/Sports" }className={"btn btn-link text-decoration-none category-menu-text"}>
              <FaFootballBall className="me-1" size={"20px"} />
              Sports

              </NavLink>
            </div>
          </div>
          <Badge bg="success" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};
export default CategoryHomeListComponent;
