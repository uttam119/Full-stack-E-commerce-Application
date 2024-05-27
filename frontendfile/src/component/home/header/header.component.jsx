import { Navbar, Container, Nav, Row, Col, Button, Form } from "react-bootstrap"
import { FaAddressBook, FaBlog, FaHome, FaListAlt, FaProductHunt } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../../themeContext";
import { useAuth } from "../../../config/auth.config";
import { useSelector } from "react-redux";
import ThemeSwitch from "../../../component/common/switcher/theme-switcher.jsx"
import Hello from "../../../component/common/switcher/hello-me.jsx";
const HomeHeaderComponent = () => {
    // const { isDarkTheme } = useTheme()
    // const { loggedInUser } = useAuth()
  const loggedInUser=useSelector((store)=>{
     return store.auth.loggedInUser
  })

 
  const isDarkTheme=useSelector((store)=>{
    return store.theme.isDarkTheme
 })

    return (<>

        <Container fluid className="bg-success bg-opacity-50">
            <Row className="py-2">
                <Col sm={12} md={6}>
                    <strong className="mx-5 " >Welcome to E commerce</strong>
                </Col>
                <Col sm={12} md={6} >

                    {
                        loggedInUser ? <>
                            <NavLink className=" btn btn-sm btn-success float-end me-5" to="/login">
                            <i className="fa fa-right-to-bracket me-1"></i>
                                Logout</NavLink>
                            <Link className=" btn btn-sm btn-success float-end me-5" to={"/"+loggedInUser.role}>
                               <i className="fa fa-user me-1"></i>
                                {loggedInUser.name}
                            </Link>


                        </> : <>

                            <NavLink className=" btn btn-sm btn-success float-end me-3" to="/login">
                                <i className="fa fa-power-off me-1"></i>
                                Login</NavLink>
                            <Link className=" btn btn-sm btn-success float-end me-3" to="/register">
                                <i className="fa fa-right-to-bracket me-1"></i>
                                Sign Up
                            </Link>



                        </>

                    }
                    <ThemeSwitch/>
                  
                </Col>


            </Row>

        </Container>

        <Navbar variant={isDarkTheme ? "dark" : "light"} expand="lg" bg={isDarkTheme ? "dark" : "light"}>
        {/* <Navbar variant="dark" expand="lg" bg="dark"> */}
            <Container fluid style={{ minHeight: "70px" }} >
               
                <Navbar.Toggle aria-controls="dropDown" >
                </Navbar.Toggle>

                <Navbar.Collapse id="dropDown">
                    <Nav className="me-auto mx-5">
                        <NavLink className="nav-link ms-5" color="blue" to="/">
                            <FaHome size={15} className=" ml-5 me-2" color="red" />

                            Home



                        </NavLink >
                        <NavLink className="nav-link ms-5" to="/brand" > <FaHome size={15} className="me-4" color="red" />Brand</NavLink >
                        <NavLink className="nav-link ms-5" to="/product" > <FaProductHunt size={15} className="me-4" color="red" />Products</NavLink >
                        <NavLink  className="nav-link ms-5" to="/category" > <FaListAlt size={15} className="me-4" color="red" />Categories</NavLink >
                        <NavLink  className="nav-link ms-5" to="/blogs" > <FaBlog size={15} className="me-4" color="red" />Blogs</NavLink >
                        <NavLink  className="nav-link ms-5" to="/contact" > <FaAddressBook size={15} className="me-4" color="red" />Contact</NavLink >
                    </Nav>

                    <Nav className="ms-auto">
                        <Container>

                            <Row>
                                <Form>

                                    <Form.Group className="row">

                                        <Col sm={12}>

                                            <Form.Control
                                                type="search" placeholder="Enter Your Search...." />

                                        </Col>
                                    </Form.Group>

                                </Form>
                            </Row>
                        </Container>
                    </Nav>

                  

                     

                </Navbar.Collapse>
             

            </Container>



        </Navbar>
        <div style={{ borderBottom: '1px solid #ccc', margin: '0 15px' }}></div>
      


    </>)
}

export default HomeHeaderComponent;