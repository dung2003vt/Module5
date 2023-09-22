import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateProduct() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{
                name: '',
                description: '',
                price: '',
            }} onSubmit={(values) => {
                axios.post('http://localhost:8080/products', values).then(() => {
                    navigate('/')
                })
            }}>
                <Form>
                    <div className="container-employee">
                        <div>
                            <h1 id="title-form" className="head">Create Product</h1>
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

                {/*<Form>Name<br/>*/}
                {/*    <Field name ={'name'}></Field><br/>*/}
                {/*    Description<br/>*/}
                {/*    <Field name ={'description'}></Field><br/>*/}
                {/*    Price<br/>*/}
                {/*    <Field name ={'price'}></Field><br/>*/}
                {/*    <button>Save</button>*/}
                {/*    <button><Link to={'/'}>Close</Link></button>*/}
                {/*</Form>*/}
            </Formik>
        </>
    )

}