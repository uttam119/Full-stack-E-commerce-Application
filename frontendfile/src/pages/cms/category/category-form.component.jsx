import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Col, Form, Image } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import categorySvc from "./category.service";
import ErrorComponent from "../../../component/common/validation-message/error-msg-component"
import { useEffect, useState } from "react"

const CategoryFormComponent = ({ submitEvent, loading ,data=null}) => {

    const [thumb, setThumb] = useState()
    const [allCats,setAllCats] =useState()
  
    const categoryPayload = Yup.object({
        title: Yup.string().required(),
        description:Yup.string().optional().nullable(),
        parentId:Yup.string().optional().nullable(),
       
        status: Yup.string().matches(/active|inactive/).required()

    })
    const { register, handleSubmit, setValue,setError, formState: { errors } } = useForm({
        resolver: yupResolver(categoryPayload),
       
    })
    const onSubmit=(data)=>{
        submitEvent(data)
    }

    const getAllCategories=async()=>{
        try{
            const response = await categorySvc.listAllCategories({page:1,limit:100})
           setAllCats(response.result)
        }catch(exception){

            throw exception
        }
    }
    useEffect(()=>{
getAllCategories()
    },[])
    useEffect(()=>{
        console.log("djfdfd is",data)
// if(data){
//     console.log("expensive",data)
//     setValue("title",data.title)
   
//     setValue("status",data.status)
//     setValue("url",data.url)
// }
    },[data])

    return (
        <>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="row mb-3">

                    <Form.Label className="col-sm-3">
                        Title:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Enter Your Category Title"
                          
                            {...register("title", { required: true })}

                        />
                        <ErrorComponent msg={errors?.title?.message}>

                        </ErrorComponent>



                    </Col>
                </Form.Group>
                

                
                <Form.Group className="row mb-3">

                    <Form.Label className="col-sm-3">
                        Sub-Category of: 
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Select size="sm" {...register("parentId", { required: false })}>
                            <option value="">Select Any One</option>
                           {
                            allCats && allCats.map((row,ind)=>(

                             <option value={row._id} key={ind}>{row.title}</option>
                            ))
                           }
                        </Form.Select>
                          {/* <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Enter status"
                            {...register("status", { required: true })}

                        /> */}
                        <ErrorComponent msg={errors?.parentId?.message}>

                        </ErrorComponent>



                    </Col>
                </Form.Group>
               
                <Form.Group className="row mb-3">

<Form.Label className="col-sm-3">
    Description:
</Form.Label>
<Col sm={9}>
    <Form.Control
        as="textarea"
        size="sm"
        rows={5}
        style={{resize:"none"}}
        placeholder="Enter Description...."
      
        {...register("description")}

    />
    <ErrorComponent msg={errors?.description?.message}>

    </ErrorComponent>



</Col>
</Form.Group>



                <Form.Group className="row mb-3">

<Form.Label className="col-sm-3">
    Status:
</Form.Label>
<Col sm={9}>
    <Form.Select size="sm" {...register("status", { required: true })}>
        <option value="">Select Any One</option>
        <option value="active">publish</option>
        <option value="inactive">UnPublish</option>
    </Form.Select>
      {/* <Form.Control
        type="text"
        size="sm"
        placeholder="Enter status"
        {...register("status", { required: true })}

    /> */}
    <ErrorComponent msg={errors?.status?.message}>

    </ErrorComponent>



</Col>
</Form.Group>
                <Form.Group className="row mb-3">

                    <Form.Label className="col-sm-3">
                        Image
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control
                            type="file"
                            size="sm"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                const ext = (file.name.split(".")).pop()
                                if (
                                    ["jpg", "jpeg", "gif", "svg", "webp", "png"].includes(ext.toLowerCase())) {
                                    if (file.size <= 3000000) {
                                        setThumb(file)
                                        setValue("image", file)
                                    } else {
                                        setError("image", { message: "File size should be less than 3mb" })
                                    }
                                } else {
                                    setError("image", { message: "Invalid file Format" })
                                }

                            }}
                        />
                        <ErrorComponent msg={errors?.image?.message}>

                        </ErrorComponent>



                    </Col>


                    <Col sm={2}> <Image thumbnail src={thumb ? URL.createObjectURL(thumb) : "https://placehold.jp/400x200.png"}>
                    </Image>
                    </Col>

                </Form.Group>
                <Form.Group className="mb-3 row">
                    <Col sm={{ offset: 3, span: 9 }}>
                        <Button size="sm" variant="danger" type="reset" className="me-3" disabled={loading}>
                            <i className="fa fa-undo"></i>Cancel
                        </Button>
                        <Button size="sm" variant="success" type="submit" className="me-3" disabled={loading}>
                            <i className="fa fa-paper-plane"></i>Submit
                        </Button>

                    </Col>

                </Form.Group>



            </Form>
        </>
    )
}

export default CategoryFormComponent