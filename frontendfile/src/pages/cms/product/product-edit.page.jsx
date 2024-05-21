import { Card, Container, NavLink, Spinner, Table } from "react-bootstrap";
import Heading from "../../../component/common/headings/headings.component";
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component";
import { FaTruckLoading } from "react-icons/fa";
import { useEffect, useState } from "react";
import BannerFormComponent from "./product-form.component";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import productSvc from "./product.service";

const ProductEdit = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const submitEvent = async (data) => {
    try {
      setLoading(true);
      console.log("i am in product-edit page");
      const response = await productSvc.updateProduct(data, params.id);
      toast.success(response.message);
      navigate("/admin/product");
    } catch (exception) {
      toast.error(exception.message);
      navigate("/admin/product");
    } finally {
      setLoading(false);
    }
  };
  const getById = async () => {
    try {
      let response = await productSvc.getProductById(params.id);
      console.log("-----", response.result);
      setData(response.result);
    } catch (exception) {
      toast.error("Error Fetching data");
      navigate("/admin/product");
    }
    console.log("edithahaxaina", data);
  };
  useEffect(() => {
    getById();
  }, []);
  console.log("edithaha", data);
  return (
    <>
      <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"product Edit"} type={"h1"}></Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "product List", url: "/admin/product" },
            { title: "product Edit", url: null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"product Edit"}
              type="h4"
              className={"float-start"}
            ></Heading>
          </Card.Header>
          <Card.Body>
            <BannerFormComponent
              submitEvent={submitEvent}
              loading={loading}
              data={data}
            />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default ProductEdit;
