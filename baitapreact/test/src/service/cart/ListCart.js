import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListCart() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/carts').then(res => {
            setList(res.data.carts)
            console.log(res.data.carts)
        })
    }, [])
    const deleteCart = (id) => {
        const confirmed = window.confirm("Are you sure?");
        if (confirmed) {
            axios.delete(`https://dummyjson.com/carts/${id}`).then(() => {
                const updatedList = list.filter((item) => item.id !== id);
                setList(updatedList);
            });
        }
    };
    return (
        <>
            <div className="container">
                <h1 className="head">Cart</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Total Product</th>
                        <th>Discounted Total</th>
                        <th>Total Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, key) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.totalProducts}</td>
                                <td>{item.discountedTotal}</td>
                                <td>{item.totalQuantity}</td>
                                <td>{item.total} $</td>
                                <td><Link to={'/views-cart/' + item.id}><button className="btn btn-primary">View cart ({item.totalProducts})</button></Link></td>
                                <td className="action"><button onClick={() => deleteCart(item.id)} className="btn btn-danger">Delete </button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <Link to={'/'} className="btn btn-primary">Home</Link>
            </div>
        </>
    )
}
