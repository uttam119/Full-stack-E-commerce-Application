import { Outlet } from 'react-router-dom';
import HomeComponent from '../../component/home';
const HomeLayout =()=>{
    return (
        <>
        <HomeComponent.HomeHeaderComponent></HomeComponent.HomeHeaderComponent>
        
        


<Outlet></Outlet>



        <HomeComponent.HomeFooterComponent  ></HomeComponent.HomeFooterComponent>
        
        </>
    )
}

export default HomeLayout;