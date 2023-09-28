import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditTour(){
    const [tour, setTour] = useState({})
    const {id} = useParams();
    const navigate= useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/tuors/${id}`).then(res => {
            setTour(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={tour}
                    enableReinitialize={true}
                    onSubmit={(values)=>{

                        axios.put(`http://localhost:3000/tuors/${id}`,values).then(()=>{
                            navigate('/')
                        })
                    }}>
                <Form>
                    <div className="container-tour">
                        <div >
                            <h1 id="title-form-u" className="head">Create post</h1>
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