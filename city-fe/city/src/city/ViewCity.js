import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
export default function ViewCity() {
    const [city, setCity] = useState({
        name: '',
        area: '',
        gdp: '',
        population: '',
        introduce: '',
        country: {
            name: ''
        }
    })
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/cities/${id}`).then(res => {
            setCity(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <div className="container-view">
                <h1>Name : {city.name}</h1>
                <p>Country : {city.country.name}</p>
                <p>Area : {city.area}</p>
                <p>Salary : {city.gdp}</p>
                <p>Population : {city.population}</p>
                <p>Introduce : {city.introduce}</p>
                <Link to={'/edit/'+ city.id}><button className="btn btn-warning">Edit</button></Link>
                <Link to={'/'}><button className="btn btn-secondary">Close</button></Link>
            </div>
        </>
    )
}