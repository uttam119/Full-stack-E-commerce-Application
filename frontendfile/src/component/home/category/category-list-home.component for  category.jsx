import { useState, useEffect, useCallback } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import {
  FaBolt,
  FaFootballBall,
  FaListAlt,
  FaMobile,
  FaPhone,
  FaTshirt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { FaShirt } from "react-icons/fa";

// import {useState,useEffect} from "react;"

import "./category-list-home-component.css";
import categorySvc from "../../../pages/cms/category/category.service";
const CategoryHomeListComponentForCategory = (props) => {
  const [categoryList, setCategoryList] = useState();
  const getCatList = useCallback(async () => {
    try {
      const response = await categorySvc.listForHome();
      console.log("categorylitd", response);
      setCategoryList(response.result);
    } catch (exception) {
      //
    }
  }, []);

  useEffect(() => {
    getCatList();
  }, []);

  return (
    <>
      {/* <h3 className="mx-5 ">Category <FaListAlt size={15} className="me-2" color="red" /> <i></i></h3> */}
      <ListGroup as="ul">
        {categoryList &&
          categoryList.map((row, ind) => (
            <ListGroup.Item
              key={ind}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <NavLink
                    to={"/category/" + row.slug}
                    className={
                      "btn btn-link text-decoration-none category-menu-text"
                    }
                  >
                    {/* <FaBolt className="me-1" size={"20px"} /> */}
                 
                    <img
                      src={
                        import.meta.env.VITE_IMAGE_URL +
                        "/category/" +
                        row.image
                      }
                      alt=""
                    />
                       <h5> {row.title}</h5>
                  </NavLink>
                </div>
              </div>
              {/* <Badge bg="success" pill>
              14
            </Badge> */}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};
export default CategoryHomeListComponentForCategory;
