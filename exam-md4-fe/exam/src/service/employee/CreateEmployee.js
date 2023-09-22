import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export default function CreateEmployee(){
    const [branch, setBranch] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8080/branch`).then(res => {
            setBranch(res.data)
        })
    },[])
    return (
        <>
            <Formik initialValues={{
                name: '',
                code:'',
                age:'',
                salary:'',
                branch:'',
            }} onSubmit={(values) =>  {
                values.branch =  {
                    id: values.branch
                }
                console.log(values)
                axios.post('http://localhost:8080/employees',values).then(() =>{
                    navigate('/')
                })
            }}>
                <Form>
                <div className="container-employee">
                    <div >
                        <h1 id="title-form" className="head">Create employee</h1>
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