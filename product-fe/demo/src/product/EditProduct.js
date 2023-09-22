import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditProduct(){
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate= useNavigate()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then(res => {
            setProduct(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={product}
                    enableReinitialize={true}
                    onSubmit={(values)=>{
                        axios.put(`http://localhost:8080/products/${id}`,values).then(()=>{
                            navigate('/')
                        })
                    }}>
                <Form>
                    <div className="container-employee">
                        <div>
                            <h1 id="title-form" className="head">Update Product</h1>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field type="text" className="form-control" name={'name'} id="name"
                                       placeholder="Enter name"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <Field type="text" className="form-control" id="description" name={'description'}
                                       placeholder="Enter description"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <Field type="number" className="form-control" name={'price'} id="age"
                                       placeholder="Enter price"></Field>
                            </div>
                            <div className="mb-3">
                                <button id="btn-form" className="btn btn-primary">Save</button>
                                <Link to={'/'}>
                                    <button className="btn btn-secondary">Close</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}