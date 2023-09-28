import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListTour() {
    const [tour,setTour] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/tuors').then(res => {
            setTour(res.data)
        })
    }, [])
    const deleteTour = (id) => {
            const confirmed = window.confirm("Are you sure?");
            if (confirmed) {
                axios.delete(`http://localhost:3000/tuors/${id}`).then(() => {
                    const updatedList = tour.filter((item) => item.id !== id);
                    setTour(updatedList);
                });
            }
        }
    ;
    return (
        <>
            <div className="container">
                <h1 className="head">List Tour</h1>
                <Link to={'/create'}><button className="btn btn-primary">Create Tour</button></Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th colSpan="2" className="action" style={{textAlign:'center'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tour.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={'/view/' + item.id}  style={{ textDecoration: "none" }}>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td className="action">
                                    <Link to={'/edit/' + item.id}><button className="btn btn-warning">Edit</button></Link></td>
                                <td className="action"><button onClick={() => deleteTour(item.id)} className="btn btn-danger">Delete
                                </button>
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