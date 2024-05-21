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
import BannerList from "../pages/cms/banner/banner-list.page"
import BannerCreate from "../pages/cms/banner/banner-create.page";
import BannerEdit from "../pages/cms/banner/banner-edit.page.jsx";
import {Provider, useDispatch }from "react-redux"
import store from "./store.config.js";
import { useEffect } from "react";
import { loggedInUserSet } from "../reducers/auth.reducers.jsx";
import CategoryList from "../pages/cms/category/category-list.page.jsx";
import CategoryCreate from "../pages/cms/category/category-create.page.jsx";
import CategoryEdit from "../pages/cms/category/category-edit.page.jsx";
import BrandList from "../pages/cms/brand/brand-list.page.jsx";
import BrandCreate from "../pages/cms/brand/brand-create.page.jsx";
import BrandEdit from "../pages/cms/brand/brand-edit.page.jsx";
import ProductList from "../pages/cms/product/product-list.page.jsx";
import ProductCreate from "../pages/cms/product/product-create.page.jsx";
import ProductEdit from "../pages/cms/product/product-edit.page.jsx";
import ProductDetail from "../pages/home/product/product-detail.page.jsx";
// import {BannerList,BannerCreate,BannerEdit} from "../pages/cms/banner/index.jsx";


const Routing =()=>{
 const dispatch=useDispatch()
 useEffect(()=>{
  dispatch(loggedInUserSet())
 },[])

    return (
      
        <>
         {/* <AuthProvider> */}
         {/* <Provider store={store}> */}
        {/* <ToastContainer theme ="dark"/> */}
        
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
  <Route path ="category/:catSlug" element ={<CategoryDetail/>}></Route>
  <Route path ="product-detail/:slug" element ={<ProductDetail/>}></Route>
  <Route path="*" element ={<Error404Page/>}></Route>
  </Route>
 <Route>
  <Route path ="/admin"   element ={<PermissionCheck role={"admin"} Component={<AdminLayout></AdminLayout>}> </PermissionCheck>}>
<Route index element ={<AdminDashboardPage/>}></Route>

<Route path="banner" element={<BannerList/>}></Route>
<Route path="banner/create" element={<BannerCreate/>}></Route>
<Route path="banner/:id" element={<BannerEdit/>}></Route>



<Route path="category" element={<CategoryList/>}></Route>
<Route path="category/create" element={<CategoryCreate/>}></Route>
<Route path="category/:id" element={<CategoryEdit/>}></Route>

<Route path="brand" element={<BrandList/>}></Route>
<Route path="brand/create" element={<BrandCreate/>}></Route>
<Route path="brand/:id" element={<BrandEdit/>}></Route>


<Route path="product" element={<ProductList/>}></Route>
<Route path="product/create" element={<ProductCreate/>}></Route>
<Route path="product/:id" element={<ProductEdit/>}></Route>
<Route path="*" element ={<Error404Page/>}></Route>
</Route>
{/* <Route>
  <Route path ="/admin"   element ={<AdminLayout/>}>
<Route index element ={<AdminDashboardPage/>}></Route>
<Route path='banner' element={<BannerList/>}></Route>
<Route path="*" element ={<Error404Page/>}></Route>
</Route> */}



  </Route>
  <Route path ="/seller"   element ={<PermissionCheck role={"seller"} Component={<AdminLayout></AdminLayout>}> </PermissionCheck>}>
<Route index element ={<AdminDashboardPage/>}></Route>
<Route path="*" element ={<Error404Page/>}></Route>




  </Route>
  <Route path="*" element ={<Error404Page/>}></Route>
  </Routes>

 
       
        
        
        </BrowserRouter>
        {/* </AuthProvider> */}
        {/* </Provider> */}
        </>
    )

}

export default Routing;