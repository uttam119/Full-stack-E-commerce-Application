import {
  Badge,
  Card,
  Container,
  Image,
  Pagination,
  Spinner,
  Table,
} from "react-bootstrap";
import Heading from "../../../component/common/headings/headings.component.jsx";
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component.jsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import productSvc from "./product.service.js";
import PaginationComponent from "../../../component/common/pagination/pagination.component.jsx";
import { TableActionButton } from "../../../component/common/buttons/index.jsx";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);
  const getAllProducts = async ({ page = 1 }) => {
    try {
      setLoading(true);
      console.log("first");

      let response = await productSvc.listAllProduct({ page });
      console.log(response.result);

      setProductList(response.result);
      const pageInfo = { ...response.meta };
      const pages =
        pageInfo.total > pageInfo.limit
          ? Math.ceil(pageInfo.total / pageInfo.limit)
          : 1;
      pageInfo.pages = pages;
      console.log("pageinfo is ", pageInfo);
      setPagination(pageInfo);
    } catch (exception) {
      toast.error("Error fetching product List..");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await productSvc.deleteById(id);
      toast.success(response.message);
      getAllProducts({ page: +pagination.currentPage });
    } catch (exception) {
      toast.error(exception.message);
    }
  };

  useEffect(() => {
    getAllProducts({ page: 1 });
  }, []);
  return (
    <>
      <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"product List"} type={"h1"}></Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "product List", url: null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"product List"}
              type="h4"
              className={"float-start"}
            ></Heading>
            <NavLink
              className={"float-end btn btn-sm btn-success"}
              to="/admin/product/create"
            >
              <i className="fa fa-plus"></i> Add product
            </NavLink>
          </Card.Header>
          <Card.Body>
            <Table size="sm" bordered hover striped>
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Image(Thumb)</th>
      
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <>
                    <tr>
                      <td className="text-center" colSpan={5}>
                        <Spinner animation="border" variant="dark" />
                      </td>
                    </tr>
                  </>
                ) : productList && productList.length ? (
                  <>
                    {productList.map((row, ind) => (
                      <tr key={ind}>
                        <td>{row.title}</td>
                        <td>{row?.category?.title}</td>
                       
                        <td>
                          {
                            new Intl.NumberFormat("en-NP",{style:"currency",currency:"NPR"}).format(row.afterDiscount)

                          }
                        </td>
                        <td>
                          <Image
                            onError={(e) => {
                              e.target.src = "https://placehold.jp/400x200.png";
                            }}
                            src={
                              import.meta.env.VITE_IMAGE_URL +
                              "/product/" +
                              row.image
                            }
                            thumbnail
                            fluid
                            size="sm"
                            style={{ maxHeight: "60px", maxWidth: "60px" }}
                          ></Image>
                        </td>
                        {/* <td>{row.image}</td> */}
                        <td>
                          <a className="btn btn-sm btn-link" href={row.url}>
                            {row.description}
                          </a>
                        </td>
                        <td>
                          <Badge
                            bg={row.status === "active" ? "success" : "danger"}
                          >
                            {row.status}
                          </Badge>
                        </td>
                        {/* <td>{row._id}</td> */}
                        <td>
                          <TableActionButton
                            editUrl={"/admin/product/"+row._id}
                            deleteAction={deleteProduct}
                            id={row._id}
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td className="text-center" colSpan={5}>
                      Empty product list.Add product
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            {pagination && pagination.total>0 ? (
              <PaginationComponent
                pagination={pagination}
                fetchFunct={getAllProducts}
              />
            ) : (
              <></>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default ProductList;
