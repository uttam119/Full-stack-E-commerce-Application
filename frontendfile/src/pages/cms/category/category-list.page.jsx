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
import categorySvc from "./category.service.js";
import PaginationComponent from "../../../component/common/pagination/pagination.component.jsx";
import { TableActionButton } from "../../../component/common/buttons/index.jsx";


const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);
  const getAllCategories = async ({ page = 1 }) => {
    try {
      setLoading(true);
      console.log("first");

      let response = await categorySvc.listAllCategories({ page });
      console.log(response.result);

      setCategoryList(response.result);
      const pageInfo = { ...response.meta };
      const pages =
        pageInfo.total > pageInfo.limit
          ? Math.ceil(pageInfo.total / pageInfo.limit)
          : 1;
      pageInfo.pages = pages;
      console.log("pageinfo is ", pageInfo);
      setPagination(pageInfo);
    } catch (exception) {
      toast.error("Error fetching Category List..");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const response = await categorySvc.deleteById(id);
      toast.success(response.message);
      getAllCategories({ page: +pagination.currentPage });
    } catch (exception) {
      toast.error(exception.message);
    }
  };

  useEffect(() => {
    getAllCategories({ page: 1 });
  }, []);
  return (
    <>
      <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Category List"} type={"h1"}></Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Category List", url: null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Category List"}
              type="h4"
              className={"float-start"}
            ></Heading>
            <NavLink
              className={"float-end btn btn-sm btn-success"}
              to="/admin/category/create"
            >
              <i className="fa fa-plus"></i> Add category
            </NavLink>
          </Card.Header>
          <Card.Body>
            <Table size="sm" bordered hover striped>
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Parent</th>
                  <th>Image(Thumb)</th>
                  {/* <th>Link UrL</th> */}
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <>
                    <tr>
                      <td className="text-center" colSpan={6}>
                        <Spinner animation="border" variant="dark" />
                      </td>
                    </tr>
                  </>
                ) : categoryList && categoryList.length ? (
                  <>
                    {categoryList.map((row, ind) => (
                      <tr key={ind}>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>{row.parentId?.title}</td>
                       
                        <td>
                          <Image
                            onError={(e) => {
                              e.target.src = "https://placehold.jp/400x200.png";
                            }}
                            src={
                              import.meta.env.VITE_IMAGE_URL +
                              "/category/" +
                              row.image
                            }
                            thumbnail
                            fluid
                            size="sm"
                            style={{ maxHeight: "60px", maxWidth: "60px" }}
                          ></Image>
                        </td>
                        {/* <td>{row.image}</td> */}
                        {/* <td>
                          <a className="btn btn-sm btn-link" href={row.url}>
                            {row.url}
                          </a>
                        </td> */}
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
                            editUrl={"/admin/category/" + row._id}
                            deleteAction={deleteCategory}
                            id={row._id}
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    <td className="text-center" colSpan={6}>
                      Empty category list.Add Category
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            {pagination ? (
              <PaginationComponent
                pagination={pagination}
                fetchFunct={getAllCategories}
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
export default CategoryList;
