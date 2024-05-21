import { NavLink } from "react-router-dom"
import { useAuth } from "../../config/auth.config";
import { useSelector } from "react-redux";

const AdminSideBar = () => {
  // const { loggedInUser } = useAuth();
  const loggedInUser=useSelector((store)=>{
    return store.auth.loggedInUser
  })
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Web Pages</div>
              <NavLink className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-home"></i>
                </div>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/admin">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </NavLink>
              <div className="sb-sidenav-menu-heading">Core Features</div>
              <NavLink className="nav-link" to="/admin/banner">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Banner Manage
              </NavLink>
              <NavLink className="nav-link" to="/admin/category">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Category Manage
              </NavLink>
              <NavLink className="nav-link" to="/admin/brand">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Brand Manage
              </NavLink>
              <NavLink className="nav-link" to="/admin/product">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Product Manage
              </NavLink>
              <NavLink className="nav-link" to="/admin/team">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Team Manage
              </NavLink>

              <NavLink className="nav-link" to="/admin/contact">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Contact Manage
              </NavLink>
              <div className="sb-sidenav-menu-heading">Other Features</div>

              <NavLink className="nav-link" to="/admin/blog">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Blog Manage
              </NavLink>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {loggedInUser.name}
          </div>
        </nav>
      </div>
    </>
  )
}
export default AdminSideBar;
