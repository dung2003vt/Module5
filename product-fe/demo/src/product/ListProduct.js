import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/products').then(res => {
            setList(res.data)
        })
    }, [])
    const deletePhone = (id) => {
        const confirmed = window.confirm("Are you sure?");
        if (confirmed) {
            axios.delete(`http://localhost:8080/products/${id}`).then(() => {
                const updatedList = list.filter((item) => item.id !== id);
                setList(updatedList);
            });
        }
    };
    return (
        <>
            <div className="container">
            <h1>List Product</h1>
                <Link to={'/create'}><button className="btn btn-primary">Create phone</button></Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, key) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={'/edit/' + item.id}><button  className="btn btn-warning">Edit</button></Link>
                            <button onClick={() => deletePhone(item.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        </>
    )
}