import { NavLink } from "react-router-dom"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const TableActionButton = ({editUrl,deleteAction,id}) => {

    const handleDelete=(e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteAction(id)
            }
          });

    }
    return (
        <>

        {
            editUrl ?
            <NavLink className={"btn btn-sm btn-info rounded-circle"} to={editUrl}>

            <i className="fa fa-pen text-white"></i>
        </NavLink> 
        : <></>
        }
            
            <NavLink className={"btn btn-sm btn-danger rounded-circle me-1"} onClick={handleDelete} to="/admin/banner/id">

                <i className="fa fa-trash text-white"></i>
            </NavLink>

        </>
    )
}