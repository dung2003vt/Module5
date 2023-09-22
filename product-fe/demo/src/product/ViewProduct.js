import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
export default function ViewEmployee() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
    })
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then(res => {
            setProduct(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <><h1 className="head">Detail Product</h1>
            <div className="container-view">
                <h1>Name : {product.name}</h1>
                <span>Description : {product.description}</span>
                <p>Price : {product.price}</p>
                <Link to={'/'}>
                    <button className="btn btn-secondary">Close</button>
                </Link>
            </div>
        </>
    )
}