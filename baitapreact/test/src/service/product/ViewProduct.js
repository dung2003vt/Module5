import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function ViewProduct(){
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            setProduct(res.data)
            console.log(res.data.name)
        })
    }, [])
    return (
        <div className="view-product">

            <img src={product.thumbnail} alt={''} width="120px" height="120px" />
            <h3>Name: {product.title}</h3>
            <span>Description: {product.description}</span>
            <p>Price: {product.price}</p>
            <p>Discount Percentage: {product.discountPercentage}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <Link to={'/'} className="btn btn-primary">Home</Link>
        </div>
    )
}