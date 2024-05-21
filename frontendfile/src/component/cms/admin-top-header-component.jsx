import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const AdminTopHeader = () => {
    return (
        <>
            <Navbar className="sb-topnav" expand variant="dark" bg="dark">
                <NavLink className={"navbar-brand ps-3"} to={"/"}>
                    Admin Pannel
                </NavLink>
                <Button onClick={(event) => {
                    event.preventDefault()
                    document.body.classList.toggle("sb-sidenav-toggled")
                }} className=" order-1 order-lg-0 me-4 me-lg-0 text-white" size="sm" variant="link">
                    <i className="fas fa-bars"></i>

                </Button>

                <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>
                <Nav className="ms-auto ms-md-0 me-3 me-lg-4">
                    <Dropdown className="nav-item">
                        <Dropdown.Toggle className="btn-link text-white">
                            <i className="fas fa-user fa-fw"></i>

                        </Dropdown.Toggle>
                        <Dropdown.Menu align={"end"}>
                            <li>
                                <NavLink className={"dropdown-item"} to="/">Change Password</NavLink>
                                <NavLink className={"dropdown-item"} to="/">Update Profile</NavLink>
                                <NavLink className={"dropdown-item"} to="/">Logout</NavLink>

                            </li>

                        </Dropdown.Menu>


                    </Dropdown>


                </Nav>

            </Navbar>



        </>
    )
}

export default AdminTopHeader;