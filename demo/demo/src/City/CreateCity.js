import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function CreateCity(){
    const [country, setCountry] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/countries`).then(res => {
            setCountry(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={{
                name: '',
                area:'',
                population:'',
                gdp:'',
                introduce:'',
                country:'',
            }} onSubmit={(values) =>  {
                values.country =  {
                    id: values.country
                }
                console.log(values)
                axios.post('http://localhost:8080/cities',values).then(() =>{
                    navigate('/')
                })
            }}>
                <Form>
                    <div className="container-cities">
                        <div >
                            <h1 id="title-form" className="head">Create city</h1>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field type="text" className="form-control" name ={'name'} id="name" placeholder="Enter name"></Field>
                            </div>
                            <div className="mb-3">Country
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
                                <label htmlFor="population" className="form-label">Population</label>
                                <Field type="text" className="form-control" name ={'population'} id="population" placeholder="Enter population"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="introduce" className="form-label">Introduce</label>
                                <Field type="text" name ={'introduce'} className="form-control" id="introduce" placeholder="Enter introduce"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gdp" className="form-label">GDP</label>
                                <Field type="text" name ={'gdp'} className="form-control" id="gdp" placeholder="Enter gdp"></Field>
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