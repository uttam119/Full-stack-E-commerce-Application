// const LoginPage = () => {
//   return (
//     <>
//       <div className="form-group row mb-3">
//         <label htmlFor="password" className="col-sm-3">
//           Password
//         </label>

//         <div className="col-sm-9">
//           <input type="Password" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;
import { useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from "yup";

import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import { FaPaperPlane, FaUndo } from "react-icons/fa";
import authSvc from "../service/auth.service";
import {toast} from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // const [emailErr,setEmailErr] =useState();
  // const [data,setData] = useState();
  const navigate= useNavigate();

  const loginSchema= yup.object().shape({
    email:yup.string().email("Username should be a valid email").required("Email is required"),
    password:yup.string().required("Password is required")
  })

  const {
    
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:yupResolver(loginSchema)
  })

  //     const emailChange=(e)=>{
  //         const {value,required}=e.target;
  //         if(required && !value){
  //             setEmailErr("Email is required")

  //         }else{
  //             const pattern=/\S+@\S+\.\S/
  //            if(! pattern.test(value)){
  //             setEmailErr("Invalid email format");
  //            }else{
  //             setEmailErr(null);
  //             setData({
  //                 ...data,
  //                 email:value
  //             })
  //         }
  //     }
  // }
  // console.log(data)
  const onSubmit= async(value)=>{
    try{
 const response = await authSvc.login(value)
  toast.success("Welcome to Admin Pannel")
  Navigate("/"+response.result.role)
  console.log(response);
 
    }catch(exception){
      console.log(exception.message)
      toast.error(exception.message,{theme:"colored"})
    }
  
  }


  return (
    <>
      <Container className="my-5">
        <Row className="bg-success bg-opacity-25">
          <Col sm={12} md={12} lg={12} className="py-3">
            <h1 className="text-center">Login</h1>
            <hr />
          </Col>

          <Col
            sm={12}
            md={12}
            lg={{ offset: 2, span: 8 }}
            className="p-5 bg-light mb-5"
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="userName">
                  UserName:
                </Form.Label>

                <Col sm={9}>
                  <FormControl
                    type="email"
                    // onChange={emailChange}
                    // name="email"
                    //  required
                    placeholder="Enter Your userName"
                    {...register("email")}
                    size="sm"
                  />
                  <em className="text-danger">
                    
                    {errors.email && errors.email.message}
                  </em>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="Password">
                  Password
                </Form.Label>

                <Col sm={9}>
                  <FormControl
                    type="password"
                    className="form-control form-control-sm"
                    name="password"
                    id="password"
                    //  required
                    {...register("password", { required: true })}
                    placeholder="Enter Your Password..."
                  />
                  <em className="text-danger">
                  {errors.password && errors.password.message}
                  </em>
                </Col>

                <Form.Group className="row mb-3">
                  <Col sm={{ span: 9, offset: 3 }}>
                    <a href="/forget-password">Forget password</a>
                  </Col>
                </Form.Group>
              </Form.Group>



              {/* <div className="form-group row mb-3">
    <div className="offset-sm-3 col-sm-9">


        <button type="reset" className="btn btn-sm btn-danger me-3">
            Reset
        </button>


        <button type="submit" className="btn btn-sm btn-success me-3">
            Login
        </button>
    </div>
</div> */}

              <Form.Group className="row mb-3">
                <Col sm={{ span: 9, offset: 3 }}>
                  <Button
                    type="reset"
                    variant="danger"
                    size="sm"
                    className="me-3"
                  >
                   <FaUndo /> Reset
                  </Button>

                  <Button
                    type="submit"
                    variant="success"
                    size="sm"
                    className="me-3"
                  >
                   <FaPaperPlane /> Login
                  </Button>
                </Col>
              </Form.Group>
            </Form>
            or <a href="/register">Register An Account</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
