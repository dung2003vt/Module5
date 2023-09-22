import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditEmployee(){
    const [country, setCountry] = useState([])
    const [city, setCity] = useState({})
    const {id} = useParams();
    const navigate= useNavigate()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:8080/countries`).then(res => {
            setCountry(res.data)
        })
    },[])
    useEffect(() => {
        axios.get(`http://localhost:8080/cities/${id}`).then(res => {
            setCity(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={city}
                    enableReinitialize={true}
                    onSubmit={(values)=>{
                        values.branch =  {
                            id: values.branch
                        }
                        axios.put(`http://localhost:8080/cities/${id}`,values).then(()=>{
                            navigate('/')
                        })
                    }}>
                <Form>
                        <div className="container-city">
                            <div >
                                <h1 id="title-form-u" className="head">Create city</h1>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <Field type="text" className="form-control" name ={'name'} id="name" placeholder="Enter name"></Field>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label><br/>
                                    <Field as="select" name="country">
                                        <option selected>Open this menu</option>
                                        {country.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="area" className="form-label">Area</label>
                                    <Field type="text" className="form-control" id="area" name ={'area'} placeholder="Enter area"></Field>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gdp" className="form-label">GDP</label>
                                    <Field type="text" className="form-control" id="gdp" name ={'gdp'} placeholder="Enter area"></Field>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="population" className="form-label">Population</label>
                                    <Field type="text" className="form-control" name ={'population'} id="population" placeholder="Enter population"></Field>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="introduce" className="form-label">Introduce</label>
                                    <Field type="text" name ={'introduce'} className="form-control" id="introduce" placeholder="Enter introduce"></Field>
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