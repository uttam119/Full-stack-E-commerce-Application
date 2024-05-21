import { Breadcrumb } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const BreadCrumb=({data})=>{
return (
    <>
     <Breadcrumb>


     {

       data.map((row,index)=>(
        <li className="breadcrumb-item" key={index}>
            {
                row.url? <NavLink to={row.url}> {row.title} </NavLink> :row.title
            }
        </li>

     
       ))

     }






 </Breadcrumb>
    </>
)
}
export default BreadCrumb