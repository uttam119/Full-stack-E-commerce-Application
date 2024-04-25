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
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Col,
  Container,
  Row,
  FormControl,
  Form,
  Button,
  FormSelect,
  Image,
} from "react-bootstrap";

import HomeComponent from "../../../../component/home";

import { FaPaperPlane, FaUndo } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authSvc from "../service/auth.service";

const RegisterPage = () => {
  const [thumb, setThumb] = useState();
  const registerSchema = yup.object({
    name: yup.string().min(2).required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    role: yup.string().matches(/customer|seller/),
  });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    try {
      console.log("hafsdfh")
      const response = await authSvc.register(data);
      console.log(response);
      console.log("i am gernaf")
       toast.success(response.msg)
    } catch (exception) {
      console.log(exception);
      toast.error(exception.message);
    }
  };
  console.log(errors);

  return (
    <>
      <Container className="my-5">
        <Row className="bg-success bg-opacity-25">
          <Col sm={12} md={12} lg={12} className="py-3">
            <h1 className="text-center">Register</h1>
            <hr />
          </Col>

          <Col sm={12} md={12} lg={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="name">
                  Name:
                </Form.Label>

                <Col sm={9}>
                  <FormControl
                    type="name"
                    placeholder="Enter Your Name"
                    size="sm"
                    {...register("name", { required: true })}
                  />
                  <em className="text-danger">
                    {errors.name && errors.name.message}
                  </em>
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="email">
                  UserName:
                </Form.Label>

                <Col sm={9}>
                  <FormControl
                    type="email"
                    placeholder="Enter Your UserName"
                    size="sm"
                    {...register("email", { required: true })}
                  />
                  <em className="text-danger">
                    {errors.name && errors.name.message}
                  </em>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="image">
                  Image(Only jpg, jpeg,png):
                </Form.Label>

                <Col sm={7}>
                  <FormControl
                    type="file"
                    size="sm"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setThumb(file);
                      setValue("image", file);
                    }}
                  />
                  <em className="text-danger"></em>
                </Col>
                <Col sm={2}>
                  <Image
                    thumbnail
                    src={
                      thumb
                        ? URL.createObjectURL(thumb)
                        : "https://placehold.jp/{200}x{200}.png"
                    }
                  />
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3" htmlFor="role">
                  Role:
                </Form.Label>

                <Col sm={9}>
                  <Form.Select>
                    <option value="customer">customer</option>
                    <option value="Seller">seller</option>
                  </Form.Select>
                  <em className="text-danger"></em>
                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
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
                    <FaPaperPlane /> Register
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
