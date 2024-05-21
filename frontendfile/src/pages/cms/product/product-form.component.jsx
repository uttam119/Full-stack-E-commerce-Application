// import { yupResolver } from "@hookform/resolvers/yup"
// import { Button, Col, Form, Image, Row } from "react-bootstrap"
// import { set, useForm } from "react-hook-form"
// import * as Yup from "yup"
// import ErrorComponent from "../../../component/common/validation-message/error-msg-component"
// import { useEffect, useState } from "react"
// import categorySvc from "../category/category.service"
// import Select from 'react-select'
// import CreatableSelect from "react-select/creatable";
// import brandSvc from "../brand/brand.service";
// import userService from "../users/user.service"
// const ProductFormComponent = ({ submitEvent, loading, data = null }) => {
//     console.log("hello hi data", data)
//     console.log("hello hi loading", loading)
//     console.log("hello hi submitevent", submitEvent)
//     const [thumb, setThumb] = useState()
//     const [cats, setCats] = useState()
//     const [brands, setBrands] = useState()
//     const [sellers, setSellers] = useState()

//     const brandPayload = Yup.object({
//         title: Yup.string().required(),
//         summary: Yup.string().required(),
//         category: Yup.array(Yup.object({
//             value: Yup.string(),
//             label: Yup.string()
//         })).required(),
//         price: Yup.number().min(1).required(),
//         brand: Yup.object({
//             value:Yup.string(),
//             label:Yup.string()
//         }).required(),
//         discount: Yup.number().min(0).max(99).default(0),
//         tag: Yup.array( Yup.object({
//             value:Yup.string(),
//             label:Yup.string(),
//             __isNew__:Yup.boolean()
//         })),
//         sellerId: Yup.object({
//             value:Yup.string(),
//             label:Yup.string()
//         }).required().nullable(),
//         description: Yup.string().optional().nullable(),
//         status: Yup.string().matches(/active|inactive/).required()

//     })
//     const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
//         resolver: yupResolver(brandPayload),

//     })
//     const onSubmit = (data) => {
//         let catIds= data.category.map((cat)=>cat.value)
//         data.category=catIds.join(",")
//         data.brand=data.brand?.value
//         data.sellerId=data.sellerId?.value

//         data.tag=data.tag.map((tag)=>tag.value)
//         data.tag=data.tag.join(",")
//         submitEvent(data)
//     }
//     const getCatLists = async () => {
//         try {
//             const response = await categorySvc.listAllCategories({ page: 1, limit: 1000 })
//             const catData = []
//             response.result.map((row, ind) => {
//                 let singleCat = {
//                     value: row._id,
//                     label: row.title
//                 }
//                 catData.push(singleCat)
//             })
//             setCats(catData)

//         } catch (exception) {
//             throw exception
//         }

//     }
//     const getBrandLists = async () => {
//         try {
//             const response = await brandSvc.listAllBrand({ page: 1, limit: 1000 })
//             const brandData = []
//             response.result.map((row, ind) => {
//                 let singleBrand = {
//                     value: row._id,
//                     label: row.title
//                 }
//                 brandData.push(singleBrand)
//             })
//             setBrands(brandData)

//         } catch (exception) {
//             throw exception
//         }

//     }
//     const getSellerLists = async () => {
//         try {
//             const response = await userService.listAllUsers("seller")
//             const userData = []
//             response.result.map((row, ind) => {
//                 let singleUser = {
//                     value: row._id,
//                     label: row.name
//                 }
//                 userData.push(singleUser)
//             })
//             setSellers(userData)

//         } catch (exception) {
//             throw exception
//         }

//     }
//     useEffect(() => {
//         getCatLists()
//         getBrandLists()
//         getSellerLists()
//     }, [])

//     useEffect(() => {
//         if (data) {
//             setValue("title", data.title)
//             setValue("status", data.status)
//             setValue("description", data.description)
//             setThumb(data.image)
//         }

//     }, [data])
//     console.log("thumb is ", thumb)

//     return (
//         <>

//             <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Title:
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="text"
//                             size="sm"
//                             placeholder="Enter Your brand Title"

//                             {...register("title", { required: true })}

//                         />
//                         <ErrorComponent msg={errors?.title?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Summary:
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="textarea"
//                             rows={5}
//                             size="sm"
//                             placeholder="Enter summary"
//                             {...register("summary", { required: true })}

//                         />
//                         <ErrorComponent msg={errors?.description?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>

//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Description
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="textarea"
//                             rows={5}
//                             size="sm"
//                             placeholder="Enter Description"
//                             {...register("description")}

//                         />
//                         <ErrorComponent msg={errors?.description?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Category:
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Select options={cats} isMulti required onChange={(selCat) => {
//                             setValue("category", selCat)
//                         }}>


//                         </Select>
//                         {/* <Form.Control
//                             type="text"
//                             size="sm"
//                             placeholder="Enter status"
//                             {...register("status", { required: true })}

//                         /> */}
//                         <ErrorComponent msg={errors?.category?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>

//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Price In Npr:
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="Number"
//                             size="sm"
//                             placeholder="Enter Your Product Price"

//                             {...register("price", { required: true, min: 1, })}

//                         />
//                         <ErrorComponent msg={errors?.price?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>

//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Discount (%):
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Control
//                             type="Number"
//                             size="sm"
//                             placeholder="Enter Your Discount "

//                             {...register("price", { required: false, min: 0, max: 99 })}

//                         />
//                         <ErrorComponent msg={errors?.discount?.message}>

//                         </ErrorComponent>



//                     </Col>

//                 </Form.Group>
//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Brand
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Select options={brands}  required onChange={(selBrand) => {
//                             setValue("brand", selBrand)
//                         }}>


//                         </Select>
//                         {/* <Form.Control
//         type="text"
//         size="sm"
//         placeholder="Enter status"
//         {...register("status", { required: true })}

//     /> */}
//                         <ErrorComponent msg={errors?.brand?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">

// <Form.Label className="col-sm-3">
//     Seller:
// </Form.Label>
// <Col sm={9}>
//     <Select options={sellers}  onChange={(selSeller)=>{
//         setValue("sellerId",selSeller)
//     }}> 


//     </Select>
     
//     <ErrorComponent msg={errors?.sellerId?.message}>

//     </ErrorComponent>



// </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">

// <Form.Label className="col-sm-3">
//     Tags:
// </Form.Label>
// <Col sm={9}>
    
//    <CreatableSelect isMulti isClearable options={[]} onChange={(tags)=>{
//     setValue("tag",tags)
//    }}></CreatableSelect>
//     <ErrorComponent msg={errors?.seller?.message}>

//     </ErrorComponent>



// </Col>
//                 </Form.Group>




//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Status:
//                     </Form.Label>
//                     <Col sm={9}>
//                         <Form.Select size="sm" {...register("status", { required: true })}>
//                             <option value="">Select Any One</option>
//                             <option value="active">publish</option>
//                             <option value="inactive">UnPublish</option>
//                         </Form.Select>
//                         {/* <Form.Control
//                             type="text"
//                             size="sm"
//                             placeholder="Enter status"
//                             {...register("status", { required: true })}

//                         /> */}
//                         <ErrorComponent msg={errors?.status?.message}>

//                         </ErrorComponent>



//                     </Col>
//                 </Form.Group>
//                 <Form.Group className="row mb-3">

//                     <Form.Label className="col-sm-3">
//                         Image
//                     </Form.Label>
//                     <Col sm={3}>
//                         <Form.Control
//                             type="file"
//                             size="sm"
//                             accept="image/*"
//                             multiple
//                             onChange={(e) => {
//                                 const images=[]
//                                 const file =Object.values( e.target.files);
//                                file.map((image)=>{
//                                 const ext = (image.name.split(".")).pop()
//                                 if (
//                                     ["jpg", "jpeg", "gif", "svg", "webp", "png"].includes(ext.toLowerCase())) {
//                                         if (image.size <= 3000000) {
//                                             images.push(image)
//                                         }
//                                         else{
//                                             setError("images","File size exceed ")
//                                         }
//                                     }else{
//                                         setError("images","File Format not suppported for "+image.name)
//                                     }
//                                })
//                                setThumb(images)
//                                setValue("image",images)
//                             }}
//                         />
//                         <ErrorComponent msg={errors?.images?.message}>

//                         </ErrorComponent>



//                     </Col>
//                      <Col sm={6}>

//                       <Row>

//                         {
//                             thumb && thumb.map((image,ind)=>(
//                                 <Col sm={2} className="mb-3" key={ind}>
                                    
//                                 <Image thumbnail src={
//                                     image ? (
//                                         typeof image === "object" ? URL.createObjectURL(image) : import.meta.env.VITE_IMAGE_URL + "/brand/" + thumb
//                                     )
//                                     : "https://placehold.jp/400x200.png"  
//                                     } />
                             
//                                 </Col>
                                
                                   
                               
//                             ))
//                         }
//                       </Row>


//                      </Col>
                
                  

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
//     )
// }

// export default ProductFormComponent





import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import ErrorComponent from "../../../component/common/validation-message/error-msg-component";
import { useEffect, useState } from "react";
import categorySvc from "../category/category.service";
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import brandSvc from "../brand/brand.service";
import userService from "../users/user.service";

const ProductFormComponent = ({ submitEvent, loading, data = null }) => {
    const [thumb, setThumb] = useState([]);
    const [cats, setCats] = useState([]);
    const [brands, setBrands] = useState([]);
    const [sellers, setSellers] = useState([]);

    const brandPayload = Yup.object({
        title: Yup.string().required(),
        summary: Yup.string().required(),
        category: Yup.array(Yup.object({
            value: Yup.string(),
            label: Yup.string()
        })).required(),
        price: Yup.number().min(1).required(),
        brand: Yup.object({
            value: Yup.string(),
            label: Yup.string()
        }).required(),
        discount: Yup.number().min(0).max(99).default(0),
        tag: Yup.array(Yup.object({
            value: Yup.string(),
            label: Yup.string(),
            __isNew__: Yup.boolean()
        })),
        // sellerId: Yup.object({
        //     value: Yup.string(),
        //     label: Yup.string()
        // }).nullable(),
        description: Yup.string().optional().nullable(),
        status: Yup.string().matches(/active|inactive/).required(),
        images: Yup.array().of(
            Yup.mixed().test("fileSize", "File size too large", value => value.size <= 3000000)
                .test("fileType", "Unsupported File Format", value => ["image/jpg", "image/jpeg", "image/gif", "image/svg+xml", "image/webp", "image/png"].includes(value.type))
        )
    });

    const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm({
        resolver: yupResolver(brandPayload),
    });

    const onSubmit = async (formData) => {
        let catIds = formData.category.map(cat => cat.value);
        let tagIds = formData.tag.map(tag => tag.value);
        
        // Create a FormData object to include all form fields and images
        const dataToSend = new FormData();
        dataToSend.append('title', formData.title);
        dataToSend.append('summary', formData.summary);
        dataToSend.append('category', catIds.join(","));
        dataToSend.append('price', formData.price);
        dataToSend.append('brand', formData.brand?.value);
        dataToSend.append('discount', formData.discount);
        dataToSend.append('tag', tagIds.join(","));
        dataToSend.append('sellerId', formData.sellerId?.value);
        dataToSend.append('description', formData.description);
        dataToSend.append('status', formData.status);
        
        formData.images.forEach((image, index) => {
            dataToSend.append(`images`, image, image.name);
        });

        submitEvent(dataToSend);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const images = [];

        files.forEach((file) => {
            const ext = file.name.split(".").pop().toLowerCase();
            if (["jpg", "jpeg", "gif", "svg", "webp", "png"].includes(ext) && file.size <= 3000000) {
                images.push(file);
            } else {
                if (!["jpg", "jpeg", "gif", "svg", "webp", "png"].includes(ext)) {
                    setError("images", { type: "manual", message: `File format not supported for ${file.name}` });
                } else if (file.size > 3000000) {
                    setError("images", { type: "manual", message: `File size exceeds limit for ${file.name}` });
                }
            }
        });

        setThumb(images);
        setValue("images", images);
    };

    const getCatLists = async () => {
        try {
            const response = await categorySvc.listAllCategories({ page: 1, limit: 1000 });
            const catData = response.result.map(row => ({
                value: row._id,
                label: row.title
            }));
            setCats(catData);
        } catch (exception) {
            throw exception;
        }
    };

    const getBrandLists = async () => {
        try {
            const response = await brandSvc.listAllBrand({ page: 1, limit: 1000 });
            const brandData = response.result.map(row => ({
                value: row._id,
                label: row.title
            }));
            setBrands(brandData);
        } catch (exception) {
            throw exception;
        }
    };

    const getSellerLists = async () => {
        try {
            const response = await userService.listAllUsers("seller");
            const userData = response.result.map(row => ({
                value: row._id,
                label: row.name
            }));
            setSellers(userData);
        } catch (exception) {
            throw exception;
        }
    };

    useEffect(() => {
        getCatLists();
        getBrandLists();
        getSellerLists();
    }, []);

    useEffect(() => {
        if (data) {
            setValue("title", data.title);
            setValue("status", data.status);
            setValue("description", data.description);
            setThumb(data.image || []);
        }
    }, [data, setValue]);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Title:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Enter Your brand Title"
                            {...register("title", { required: true })}
                        />
                        <ErrorComponent msg={errors?.title?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Summary:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="textarea"
                            rows={5}
                            size="sm"
                            placeholder="Enter summary"
                            {...register("summary", { required: true })}
                        />
                        <ErrorComponent msg={errors?.summary?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Description</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="textarea"
                            rows={5}
                            size="sm"
                            placeholder="Enter Description"
                            {...register("description")}
                        />
                        <ErrorComponent msg={errors?.description?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Category:</Form.Label>
                    <Col sm={9}>
                        <Select options={cats} isMulti required onChange={(selCat) => {
                            setValue("category", selCat);
                        }} />
                        <ErrorComponent msg={errors?.category?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Price In Npr:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="Number"
                            size="sm"
                            placeholder="Enter Your Product Price"
                            {...register("price", { required: true, min: 1 })}
                        />
                        <ErrorComponent msg={errors?.price?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Discount (%):</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="Number"
                            size="sm"
                            placeholder="Enter Your Discount"
                            {...register("discount", { required: false, min: 0, max: 99 })}
                        />
                        <ErrorComponent msg={errors?.discount?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Brand</Form.Label>
                    <Col sm={9}>
                        <Select options={brands} required onChange={(selBrand) => {
                            setValue("brand", selBrand);
                        }} />
                        <ErrorComponent msg={errors?.brand?.message} />
                    </Col>
                </Form.Group>
                {/* <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Seller</Form.Label>
                    <Col sm={9}>
                        <Select options={sellers} required onChange={(selSeller) => {
                            setValue("sellerId", selSeller);
                        }} />
                        <ErrorComponent msg={errors?.sellerId?.message} />
                    </Col>
                </Form.Group> */}
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Tags:</Form.Label>
                    <Col sm={9}>
                        <CreatableSelect
                            isMulti
                            onChange={(selOpt) => {
                                setValue("tag", selOpt);
                            }}
                        />
                        <ErrorComponent msg={errors?.tag?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Status:</Form.Label>
                    <Col sm={9}>
                        <Form.Check
                            type="radio"
                            label="Active"
                            value="active"
                            {...register("status")}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="Inactive"
                            value="inactive"
                            {...register("status")}
                            inline
                        />
                        <ErrorComponent msg={errors?.status?.message} />
                    </Col>
                </Form.Group>
                <Form.Group className="row mb-3">
                    <Form.Label className="col-sm-3">Image</Form.Label>
                    <Col sm={3}>
                        <Form.Control
                            type="file"
                            size="sm"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                        <ErrorComponent msg={errors?.images?.message} />
                    </Col>
                    <Col sm={6}>
                        <Row>
                            {thumb.map((image, ind) => (
                                <Col sm={2} className="mb-3" key={ind}>
                                    <Image
                                        thumbnail
                                        src={URL.createObjectURL(image)}
                                    />
                                </Col>
                            ))}
                        </Row>
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
    );
};

export default ProductFormComponent;
