import { Navbar, Container, Nav, Row, Col, Button, Form } from "react-bootstrap"
import { FaAddressBook, FaBlog, FaHome, FaListAlt, FaProductHunt } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../../themeContext";
import { useAuth } from "../../../config/auth.config";
import { useSelector } from "react-redux";
const HomeHeaderComponent = () => {
    // const { isDarkTheme } = useTheme()
    // const { loggedInUser } = useAuth()
  const loggedInUser=useSelector((store)=>{
     return store.auth.loggedInUser
  })

    return (<>

        <Container fluid className="bg-success bg-opacity-50">
            <Row className="py-2">
                <Col sm={12} md={6}>
                    <strong>Welcome to E commerce</strong>
                </Col>
                <Col sm={12} md={6} >

                    {
                        loggedInUser ? <>
                            <NavLink className=" btn btn-sm btn-success float-end me-3" to="/login">
                            <i className="fa fa-right-to-bracket me-1"></i>
                                Logout</NavLink>
                            <Link className=" btn btn-sm btn-success float-end me-3" to={"/"+loggedInUser.role}>
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
                    {/* <ThemeSwitch/> */}
                </Col>


            </Row>

        </Container>

        {/* <Navbar variant={isDarkTheme ? "dark" : "light"} expand="lg" bg={isDarkTheme ? "dark" : "light"}> */}
        <Navbar variant="dark" expand="lg" bg="dark">
            <Container fluid style={{ minHeight: "70px" }}>
                <Navbar.Brand href="/">
                    Navbar
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="dropDown" >
                </Navbar.Toggle>

                <Navbar.Collapse id="dropDown">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" color="blue" to="/">
                            <FaHome size={15} className="me-2" color="red" />

                            Home



                        </NavLink >
                        <NavLink className="nav-link" to="/brand" > <FaHome size={15} className="me-2" color="red" />Brand</NavLink >
                        <NavLink className="nav-link" to="/list-all" > <FaProductHunt size={15} className="me-2" color="red" />Products</NavLink >
                        <Nav.Link  className="nav-link" to="/categories" > <FaListAlt size={15} className="me-2" color="red" />Categories</Nav.Link >
                        <Nav.Link  className="nav-link" to="/blogs" > <FaBlog size={15} className="me-2" color="red" />Blogs</Nav.Link >
                        <Nav.Link  className="nav-link" to="/contact" > <FaAddressBook size={15} className="me-2" color="red" />Contact</Nav.Link >
                    </Nav>

                    <Nav>
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



    </>)
}

export default HomeHeaderComponent;