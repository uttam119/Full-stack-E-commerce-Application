import { BrowserRouter ,Routes,Route} from "react-router-dom";
import LandingPage from "../pages/home/landing.page.jsx"
import Error404Page from "../pages/home/error/404.page";
import CategoryDetail from "../pages/home/category/category-detail.page"
import LoginPage from "../pages/common/auth/login/login.page.jsx";
import RegisterPage from "../pages/common/auth/register/register.page.jsx";
import HomeLayout from "../pages/layout/home.layout.jsx";
import AdminLayout from "../pages/layout/admin.layout.jsx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{toast} from "react-toastify";
import AdminDashboardPage from "../pages/cms/dashboard/dashboard.page.jsx";
import ForgetPassword from "../pages/common/auth/forget-password.jsx";
import ActivateUser from "../pages/common/auth/activate-user.page.jsx";
import ResetPassword from "../pages/common/auth/reset-password.page.jsx";
import AuthProvider from "./auth.config.jsx";
import PermissionCheck from "./checkPermission.config.jsx";
import BannerList from "../pages/cms/banner/banner-list page.jsx";


const Routing =()=>{
 

    return (
      
        <>
         <AuthProvider>
        <ToastContainer theme ="dark"/>
        
        <BrowserRouter>
        
        
        <Routes>

  <Route path="/" element ={<HomeLayout/>}>

<Route index element ={<LandingPage/>}></Route>
  <Route path="login" element ={<LoginPage/>}></Route>
  <Route path="register" element ={<RegisterPage/>}></Route>
  <Route path="activate/:token" element ={<ActivateUser/>}></Route>
  <Route path="forget-password" element ={<ForgetPassword/>}></Route>
  <Route path="set-password/:token" element ={<ResetPassword/>}></Route>
  <Route path ="category" element ={<>All List of Cats</>}></Route>
  <Route path ="category/:slug" element ={<CategoryDetail/>}></Route>
  <Route path="*" element ={<Error404Page/>}></Route>
  </Route>
 
  <Route path ="/admin"   element ={<PermissionCheck role={"admin"} Component={<AdminLayout></AdminLayout>}> </PermissionCheck>}>
<Route index element ={<AdminDashboardPage/>}></Route>
<Route path='banner' element={<BannerList/>}></Route>
<Route path="*" element ={<Error404Page/>}></Route>




  </Route>
  <Route path ="/seller"   element ={<PermissionCheck role={"seller"} Component={<AdminLayout></AdminLayout>}> </PermissionCheck>}>
<Route index element ={<AdminDashboardPage/>}></Route>
<Route path="*" element ={<Error404Page/>}></Route>




  </Route>
  </Routes>

 
       
        
        
        </BrowserRouter>
        </AuthProvider>
        
        </>
    )

}

export default Routing;