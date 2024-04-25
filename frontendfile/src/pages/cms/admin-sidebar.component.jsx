import { NavLink } from "react-router-dom";
import { useAuth } from "../../config/auth.config";

const AdminSidebar = () => {
  const { loggedInUser } = useAuth();

  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidebnav-menu">
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
                  <i className="fas fa-rachometer-alt"></i>
                </div>
                DashBoard
              </NavLink>
                <div className="sb-sidenav-menu-heading">Core Feature</div>
              <NavLink className="nav-link" to="/admin/banner">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-images"></i>
                </div>
                Brand Manage
              </NavLink>
              <NavLink className="nav-link" to="/admin/brand">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Category Manage
              </NavLink>


            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AdminSidebar;
