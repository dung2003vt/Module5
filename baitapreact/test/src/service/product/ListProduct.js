import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListProduct() {
    const [list, setList] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100&skip=0').then(res => {
            setList(res.data.products);
            console.log(res.data)
        });
        axios.get('https://dummyjson.com/carts').then(res => {
            setCart(res.data);
        });
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(list.length / itemsPerPage);
    let startPage;
    let endPage;
    if (totalPages <= 3) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 1) {
            startPage = 1;
            endPage = 3;
        } else if (currentPage >= totalPages) {
            startPage = totalPages - 2;
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
    }
    let startPages = 1;
    let endPages = Math.ceil(list.length/itemsPerPage)

    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < Math.ceil(list.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="head">List Product</h1>
                <Link to={'/cart'}><button className="btn btn-primary">Cart ({cart.total})</button></Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Brand</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td><Link to={'/views-product/' + item.id}><img src={item.thumbnail} alt={''} width="120px" height="120px" /></Link></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.brand}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="page">
                    <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1} className="btn btn-primary">
                        Previous
                    </button> <button
                        key={startPages}
                        onClick={() => setCurrentPage(startPages)}
                        className={currentPage === startPages ? "active" : ""} className="btn btn-primary">
                        {startPages}
                    </button>   ----    {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
                        <button
                            key={startPage + index}
                            onClick={() => setCurrentPage(startPage + index)}
                            className={currentPage === startPage + index ? "active" : ""} className="btn btn-primary">
                            {startPage + index}
                        </button>
                    ))}    ----     <button
                        key={endPages}
                        onClick={() => setCurrentPage(endPages)}
                        className={currentPage === endPages ? "active" : ""} className="btn btn-primary">
                        {endPages}
                    </button> <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages} className="btn btn-primary">
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}