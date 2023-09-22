import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListCity(){
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cities').then(res => {
            setList(res.data)
        })
    }, [])
    const deleteCity = (id) => {
            const confirmed = window.confirm("Are you sure?");
            if (confirmed) {
                axios.delete(`http://localhost:8080/cities/${id}`).then(() => {
                    const updatedList = list.filter((item) => item.id !== id);
                    setList(updatedList);
                });
            }
        }
    ;
    return (
        <>
            <div className="container">
                <h1 className="head">List City</h1>
                <Link to={'/create'}><button className="btn btn-primary">Create City</button></Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Area</th>
                        <th>GDP</th>
                        <th colSpan="2" className="action">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={'/view/' + item.id}  style={{ textDecoration: "none" }}>{item.name}</Link></td>
                                <td>{item.country.name}</td>
                                <td>{item.area}</td>
                                <td>{item.gdp}</td>
                                <td className="action">
                                    <Link to={'/edit/' + item.id}><button className="btn btn-warning">Edit</button></Link></td>
                                <td className="action"><button onClick={() => deleteCity(item.id)} className="btn btn-danger">Delete
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