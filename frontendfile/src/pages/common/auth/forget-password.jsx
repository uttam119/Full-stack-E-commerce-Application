import {Container,Row,Col,Form,FormGroup, FormControl,FormLabel,Button} from "react-bootstrap"

import {FaUndo,FaPaperPlane} from 'react-icons/fa';
import {useForm} from "react-hook-form";
import { useState } from "react";
import authSvc from "./service/auth.service";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const ForgetPassword=()=>{
    const [loading,setLoading] =useState()
    const{register,handleSubmit,formState:{errors,isLoading}} =useForm() 
    const navigate = useNavigate() ;
     const submitHandle= async (data)=>{
            try{
                let response = await authSvc.sendForgetPassword(data)
                 toast.success("You will receive email shortly for further processing.Please stay tuned")
                   navigate("/")
                }catch(exception){
                toast.error(exception.message)
                console.log(exception)
            }
console.log(data);
        }
    

    return (
        <>
         <Container className="my-5">
        <Row className="bg-success bg-opacity-25">
          <Col sm={12} md={12} lg={12} className="py-3">
            <h1 className="text-center">Forget Password</h1>
            <p className="text-center" style={{fontSize:"small"}}> 
            
            <em>please provide your registered email</em>
            </p>
            <hr />
          </Col>

          <Col sm={12} md={12} lg={{offset:2, span:8} } className="p-5 bg-light mb-5">
         {
            loading ?"Loading..." : <>
         
            <Form onSubmit={handleSubmit(submitHandle)}>
            <FormGroup className="row mb-3">
            <FormLabel className="col-sm-3" htmlFor="userName">
                  UserName:
                </FormLabel>

                <Col sm={9}>
                  <FormControl
                    type="email"
                 
                    placeholder="Enter Your userName"
                    {...register("email")}
                    size="sm"
                  />
                  <em className="text-danger">
                    
                    {errors.email && errors.email.message}
                  </em>
                </Col>
                </FormGroup>
             
              <FormGroup className="row mb-3">
                <Col sm={{ offset: 3, span: 9 }}>
                  <Button
                    type="reset"
                    size="sm"
                    variant="danger"
                    className=" me-3"
                  >
                    <FaUndo /> Reset
                  </Button>

                  <Button
                    type="submit"
                    size="sm"
                    variant="success"
                    className=" me-3"
                  >
                    <FaPaperPlane /> Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            </>
         }
            
          </Col>
        </Row>
      </Container>
        
        
        
        
     </>   
    )
    }
export default ForgetPassword;