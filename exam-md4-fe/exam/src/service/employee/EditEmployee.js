import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditEmployee(){
    const [branch, setBranch] = useState([])
    const [employee, setEmployee] = useState({})
    const {id} = useParams();
    const navigate= useNavigate()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:8080/branch`).then(res => {
            setBranch(res.data)
        })
    },[])
    useEffect(() => {
        axios.get(`http://localhost:8080/employees/${id}`).then(res => {
            setEmployee(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={employee}
                    enableReinitialize={true}
                    onSubmit={(values)=>{
                        values.branch =  {
                            id: values.branch
                        }
                        axios.put(`http://localhost:8080/employees/${id}`,values).then(()=>{
                            navigate('/')
                        })
                    }}>
                <Form>
                    <div className="container-employee">
                        <div >
                            <h1 id="title-form" className="head">Update employee</h1>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field type="text" className="form-control" name ={'name'} id="name" placeholder="Enter name"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">Code</label>
                                <Field type="text" className="form-control" id="code" name ={'code'} placeholder="Enter code"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label">Age</label>
                                <Field type="number" className="form-control" name ={'age'} id="age" placeholder="Enter age"></Field>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="salary-c" className="form-label">Salary</label>
                                <Field type="number" name ={'salary'} className="form-control" id="salary" placeholder="Enter salary"></Field>
                            </div>
                            <div className="mb-3">
                                <Field as="select" name="branch">
                                    <option selected>Open this menu</option>
                                    {branch.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="mb-3" >
                                <button id="btn-form" className="btn btn-primary">Save</button>
                                <Link to={'/'}><button className="btn btn-secondary">Close</button></Link>
                            </div>
                        </div>
                    </div>
               {/*Name<br/>*/}
               {/*     <Field name ={'name'}></Field><br/>*/}
               {/*     Code<br/>*/}
               {/*     <Field name ={'code'}></Field><br/>*/}
               {/*     Age<br/>*/}
               {/*     <Field name ={'age'}></Field><br/>*/}
               {/*     Salary<br/>*/}
               {/*     <Field name ={'salary'}></Field><br/>*/}
               {/*     Branch<br/>*/}
               {/*     <Field as="select" name="branch">*/}
               {/*         <option selected>Open this menu</option>*/}
               {/*         {branch.map((item) => (*/}
               {/*             <option key={item.id} value={item.id}>*/}
               {/*                 {item.name}*/}
               {/*             </option>*/}
               {/*         ))}*/}
               {/*     </Field><br/>*/}
               {/*     <button>Save</button>*/}
               {/*     <button><Link to={'/'}>Close</Link></button>*/}
                </Form>
            </Formik>
        </>
    )
}