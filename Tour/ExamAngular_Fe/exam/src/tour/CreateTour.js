import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function CreateTour() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                title: '',
                price:'',
                description:'',
            }} onSubmit={(values) =>  {
                console.log(values)
                axios.post('http://localhost:3000/tuors',values).then(() =>{
                    navigate('/')
                })
            }}>
                <Form>
                    <div className="container-tour">
                        <div >
                            <h1 id="title-form" className="head">Create tour</h1>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <Field type="text" className="form-control" name ={'title'} id="title" placeholder="Enter title"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <Field type="text" className="form-control" id="price" name ={'price'} placeholder="Enter price"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <Field type="text" className="form-control" id="description" name ={'description'} placeholder="Enter description"></Field>
                            </div>
                            <div className="mb-3" >
                                <button id="btn-form" className="btn btn-primary">Save</button>
                                <Link to={'/'}><button className="btn btn-secondary">Close</button></Link>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}