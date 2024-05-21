import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Col, Form, Image } from "react-bootstrap"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import ErrorComponent from "../../../component/common/validation-message/error-msg-component"
import { useEffect, useState } from "react"
const BannerFormComponent = ({ submitEvent, loading ,data=null}) => {
console.log("hello hi data",data)
console.log("hello hi loading",loading)
console.log("hello hi submitevent",submitEvent)
    const [thumb, setThumb] = useState()
  
    const bannerPayload = Yup.object({
        title: Yup.string().required(),
        url: Yup.string().url().optional().nullable(),
        status: Yup.string().matches(/active|inactive/).required()

    })
    const { register, handleSubmit, setValue,setError, formState: { errors } } = useForm({
        resolver: yupResolver(bannerPayload),
       
    })
    const onSubmit=(data)=>{
        console.log("myway is",data)
        submitEvent(data)
    }
    useEffect(()=>{
         if(data){
            setValue("title",data.title)
            setValue("status",data.status)
            setValue("url",data.url)
            setThumb(data.image)
         }

    },[data])
    console.log("thumb is ",)

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
                            placeholder="Enter Your Banner Title"
                          
                            {...register("title", { required: true })}

                        />
                        <ErrorComponent msg={errors?.title?.message}>

                        </ErrorComponent>



                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">

                    <Form.Label className="col-sm-3">
                        URL(Link)
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="url"
                            size="sm"
                            placeholder="Enter UrL"
                            {...register("url", { required: true })}

                        />
                        <ErrorComponent msg={errors?.url?.message}>

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


                    <Col sm={2}> <Image thumbnail src={thumb ? 
                        (
                            typeof thumb==="object"?URL.createObjectURL(thumb) :import.meta.env.VITE_IMAGE_URL+"/banner/"+thumb
                        )
                      : "https://placehold.jp/400x200.png"}>
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

export default BannerFormComponent  




// import { yupResolver } from "@hookform/resolvers/yup"
// import { Button, Col, Form, Image } from "react-bootstrap"
// import { useForm } from "react-hook-form"
// import * as Yup from "yup"
// import ErrorComponent from "../../../component/common/validation-message/error-msg-component"
// import { useEffect, useState } from "react"

// const BannerFormComponent = ({ submitEvent, loading, data = {} }) => {
//     console.log("Initial data:", data);
//     console.log("Loading status:", loading);
//     console.log("Submit event function:", submitEvent);

//     const [thumb, setThumb] = useState();
  
//     const bannerPayload = Yup.object({
//         title: Yup.string().required(),
//         url: Yup.string().url().optional().nullable(),
//         status: Yup.string().matches(/active|inactive/).required()
//     });

//     const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
//         resolver: yupResolver(bannerPayload),
//     });

//     const onSubmit = (formData) => {
//         console.log("Form data submitted:", formData);
//         submitEvent(formData);
//     };

//     useEffect(() => {
//         if (data) {
//             console.log("Updated data:", data);
//             // Set form values based on data if needed
//             setValue("title", data.title || "");
//             setValue("url", data.url || "");
//             setValue("status", data.status || "inactive");
//             if (data.image) {
//                 setThumb(data.image);
//             }
//         }
//     }, [data, setValue]);

//     return (
//         <>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group className="row mb-3">
//                     <Form.Label className="col-sm-3">Title:</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="text"
//                             size="sm"
//                             placeholder="Enter Your Banner Title"
//                             {...register("title", { required: true })}
//                         />
//                         <ErrorComponent msg={errors?.title?.message} />
//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">
//                     <Form.Label className="col-sm-3">URL(Link)</Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="url"
//                             size="sm"
//                             placeholder="Enter URL"
//                             {...register("url")}
//                         />
//                         <ErrorComponent msg={errors?.url?.message} />
//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">
//                     <Form.Label className="col-sm-3">Status:</Form.Label>
//                     <Col sm={9}>
//                         <Form.Select size="sm" {...register("status", { required: true })}>
//                             <option value="">Select Any One</option>
//                             <option value="active">Publish</option>
//                             <option value="inactive">UnPublish</option>
//                         </Form.Select>
//                         <ErrorComponent msg={errors?.status?.message} />
//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">
//                     <Form.Label className="col-sm-3">Image</Form.Label>
//                     <Col sm={7}>
//                         <Form.Control
//                             type="file"
//                             size="sm"
//                             accept="image/*"
//                             onChange={(e) => {
//                                 const file = e.target.files[0];
//                                 const ext = file.name.split(".").pop().toLowerCase();
//                                 if (["jpg", "jpeg", "gif", "svg", "webp", "png"].includes(ext)) {
//                                     if (file.size <= 3000000) {
//                                         setThumb(file);
//                                         setValue("image", file);
//                                     } else {
//                                         setError("image", { message: "File size should be less than 3MB" });
//                                     }
//                                 } else {
//                                     setError("image", { message: "Invalid file format" });
//                                 }
//                             }}
//                         />
//                         <ErrorComponent msg={errors?.image?.message} />
//                     </Col>
//                     <Col sm={2}>
//                         <Image thumbnail src={thumb ? URL.createObjectURL(thumb) : "https://placehold.jp/400x200.png"} />
//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="mb-3 row">
//                     <Col sm={{ offset: 3, span: 9 }}>
//                         <Button size="sm" variant="danger" type="reset" className="me-3" disabled={loading}>
//                             <i className="fa fa-undo"></i>Cancel
//                         </Button>
//                         <Button size="sm" variant="success" type="submit" className="me-3" disabled={loading}>
//                             <i className="fa fa-paper-plane"></i>Submit
//                         </Button>
//                     </Col>
//                 </Form.Group>
//             </Form>
//         </>
//     );
// };

// export default BannerFormComponent;
