import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewsCart() {
    const [list, setList] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://dummyjson.com/carts/${id}`).then(res => {
            setList(res.data.products)
            console.log(res.data.products)
        })
    }, [])
    return (
        <>
            <div className="container">
                <h1 className="head">List Product</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, key) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.total}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Link to={'/cart'} className="btn btn-primary">Cart</Link>
            </div>
        </>
    )
}