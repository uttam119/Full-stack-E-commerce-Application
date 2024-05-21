import { Badge, Card, Container, Image, Pagination, Spinner, Table } from "react-bootstrap";
import Heading from "../../../component/common/headings/headings.component";
import BreadCrumb from "../../../component/common/breadcrumb/breadcrumb.component";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import bannerSvc from "./banner.service.js";
import PaginationComponent from "../../../component/common/pagination/pagination.component.jsx";
import { TableActionButton } from "../../../component/common/buttons/index.jsx";

const BannerList = () => {
  const [bannerList, setBannerList] = useState([]);
  const [pagination, setPagination] = useState();
  const [loading, setLoading] = useState(true);
  const getAllBanners = async ({page=1}) => {
    try {
      setLoading(true)
        console.log("first")
    
      let response = await bannerSvc.listAllBanner({page});
      console.log(response.result)


      setBannerList(response.result);
      const pageInfo = {...response.meta}
      const pages = pageInfo.total>pageInfo.limit?(Math.ceil(pageInfo.total/pageInfo.limit)):1;
      pageInfo.pages=pages
      console.log("pageinfo is ",pageInfo);
      setPagination(pageInfo)
     
    } catch (exception) {
      toast.error("Error fetching Banner List..");
    }finally{
        setLoading(false)
    }
  };

  const deleteBanner=async(id)=>{
   try{
        const response = await bannerSvc.deleteById(id)
        toast.success(response.message)
        getAllBanners({page:+pagination.currentPage})
   }catch(exception){
    toast.error(exception.message)
   }
  }
 

  useEffect(() => {
    getAllBanners({page:1});
  }, []);
  return (
    <>
      <Container fluid className="px-4">
        <Heading className={"mt-4"} value={"Banner List"} type={"h1"}>
        
        </Heading>

        <BreadCrumb
          data={[
            { title: "Dashboard", url: "/admin" },
            { title: "Banner List", url: null },
          ]}
        ></BreadCrumb>
        <Card className="mb-4">
          <Card.Header>
            <Heading
              value={"Banner List"}
              type="h4"
              className={"float-start"}
            ></Heading>
            <NavLink
              className={"float-end btn btn-sm btn-success"}
              to="/admin/banner/create"
            >
              <i className="fa fa-plus"></i> Add banner
            </NavLink>
          </Card.Header>
          <Card.Body>
            <Table size="sm" bordered hover striped>
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Image(Thumb)</th>
                  <th>Link UrL</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
             
              { loading ? <>
                  <tr>
                    <td className="text-center" colSpan={5}>
                      <Spinner animation="border" variant="dark" />
                    </td>
                  </tr>
              </>:(
                bannerList && bannerList.length? <>

                
                {

                    bannerList.map((row,ind)=>(
                     
                      <tr key = {ind}>
                        <td>{row.title}</td>
                        <td>
                          <Image onError ={(e)=>{
                            e.target.src="https://placehold.jp/400x200.png"

                          }} src={import.meta.env.VITE_IMAGE_URL+"/banner/"+row.image} thumbnail fluid size="sm" style={{maxHeight:"60px",maxWidth:"60px"}}></Image>
                        </td>
                        {/* <td>{row.image}</td> */}
                        <td><a className="btn btn-sm btn-link" href={row.url}>
                          {row.url}
                          </a>
                          </td>
                        <td><Badge bg={row.status==="active"?"success":"danger" }>{row.status}</Badge></td>
                        {/* <td>{row._id}</td> */}
                        <td>
                          <TableActionButton
                          editUrl={"/admin/banner/"+row._id}
                          deleteAction={deleteBanner}
                          id={row._id}
                          
                          />
                        </td>

                      </tr>
                    ))

                }
                
                
                </>:<tr>
                    <td className="text-center" colSpan={5}>
                        Empty banner list.Add Banner
                    </td>
                </tr>
              )
                }
              </tbody>
            </Table>
            {
              pagination? <PaginationComponent pagination={pagination} fetchFunct={getAllBanners}/>:<></>
            }

          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
export default BannerList;
