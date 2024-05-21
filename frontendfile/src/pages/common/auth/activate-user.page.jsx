import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import authSvc from "./service/auth.service";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUndo, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const ActivateUser = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const verifyToken = async () => {
    try {
      const response = await authSvc.verifyActivationToken(params.token);
      setLoading(false);
    } catch (exception) {
      console.error(exception);
      toast.error(exception.message);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyToken();
  }, [params]);

  const submitHandle = async (data) => {
    try {
      const response = await authSvc.submitForPasswordSet(params.token, data);
      console.log(response);
      toast.success(response.message);
      navigate("/login");
    } catch (exception) {
      console.error(exception);
      toast.error(exception.message);
    }
  };

  return (
    <>
      <Container className="my-5">
        <Row className="bg-success bg-opacity-25">
          <Col sm={12} md={12} lg={12} className="py-3">
            <h1 className="text-center">Activate User</h1>
            <hr />
          </Col>

          <Col
            sm={12}
            md={12}
            lg={{ offset: 2, span: 8 }}
            className="p-5 bg-light mb-5"
          >
            {loading ? (
              "Loading..."
            ) : (
              <>
                <Form onSubmit={handleSubmit(submitHandle)}>
                  <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3" htmlFor="password">
                      Password:
                    </Form.Label>

                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Enter Your Password"
                        size="sm"
                        {...register("password", { required: true })}
                      />
                      <em className="text-danger">
                        {errors.password && errors.password.message}
                      </em>
                    </Col>
                  </Form.Group>
                  <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3" htmlFor="confirmPassword">
                      Confirm Password:
                    </Form.Label>

                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Your Password"
                        size="sm"
                        {...register("confirmPassword", { required: true })}
                      />
                      <em className="text-danger">
                        {errors.confirmPassword && errors.confirmPassword.message}
                      </em>
                    </Col>
                  </Form.Group>

                  <Form.Group className="row mb-3">
                    <Col sm={{ offset: 3, span: 9 }}>
                      <Button
                        type="reset"
                        size="sm"
                        variant="danger"
                        className="me-3"
                        onClick={() => reset()}
                      >
                        <FaUndo /> Reset
                      </Button>

                      <Button
                        type="submit"
                        size="sm"
                        variant="success"
                        className="me-3"
                      >
                        <FaPaperPlane /> Register
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ActivateUser;
