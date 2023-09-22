import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
export default function ViewEmployee() {
    const [employee, setEmployee] = useState({
        name: '',
        code: '',
        age: '',
        salary: '',
        branch: {
            name: ''
        }
    })
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/employees/${id}`).then(res => {
            setEmployee(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <><h1 className="head">Detail Employee</h1>
            <div className="container-view">
                <h3>Name : {employee.name}</h3>
                <span>Code : {employee.code}</span>
                <p>Age : {employee.age}</p>
                <p>Salary : {employee.salary}</p>
                <p>Branch : {employee.branch.name}</p>

            </div>
        </>
    )
}