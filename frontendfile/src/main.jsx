import React from 'react'
import ReactDOM from 'react-dom/client'
// import LandingPage from "./pages/home/landing.page.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
 import "./assets/css/main.css"
 import "@fortawesome/fontawesome-free/css/all.min.css"
 import Routing from "./config/router.config";
import store from './config/store.config';
import { Provider } from 'react-redux';
// import "./pages/home/landing.page.module.css";
// import App from './App.jsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
<>
<Provider store={store}>
<Routing/>
</Provider>
    {/* <App /> */}
{/* <LandingPage name ="Uttam Parajuli"  userlist={[{name:'UTTAM'}]}  address="kathmanduu" title ={pageTitle}></LandingPage> */}
    {/* <Component1></Component1> */}

  {/* //  </React.StrictMode>  */}
  </>
)
