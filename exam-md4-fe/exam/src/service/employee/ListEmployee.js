import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListEmployee() {
    const [list, setList] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8080/employees').then(res => {
            console.log(res.data)
            setList(res.data)
        })
    }, [])
    const deleteEmployee = (id) => {
        const confirmed = window.confirm("Are you sure?");
        if (confirmed) {
            axios.delete(`http://localhost:8080/employees/${id}`).then(() => {
                const updatedList = list.filter((item) => item.id !== id);
                setList(updatedList);
            });
        }
    }
   ;
    return (
        <>
            <div className="container">
                <h1 className="head">List Employee</h1>
               <Link to={'/create'}><button className="btn btn-primary">Create Employee</button></Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Branch</th>
                        <th colSpan="2" className="action">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, key) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={'/view/' + item.id}  style={{ textDecoration: "none" }}>{item.name}</Link></td>
                                <td>{item.code}</td>
                                <td>{item.age}</td>
                                <td>{item.salary}</td>
                                <td>{item.branch.name}</td>
                                <td className="action">
                                    <Link to={'/edit/' + item.id}><button className="btn btn-warning">Edit</button></Link></td>
                                    <td className="action"><button onClick={() => deleteEmployee(item.id)} className="btn btn-danger">Delete
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