import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListCity(){
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    useEffect(() => {
        axios.get('http://localhost:8080/cities').then(res => {
            setList(res.data)
        })
    }, [])
    const deleteEmployee = (id) => {
        const confirmed = window.confirm("Are you sure?");
        if (confirmed) {
            axios.delete(`http://localhost:8080/cities/${id}`).then(() => {
                const updatedList = list.filter((item) => item.id !== id);
                setList(updatedList);
            });
        }
    }
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
                <h1 className="head">List City</h1>
                <Link to={'/create'}><button className="btn btn-primary">Create City</button></Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Area</th>
                        <th>Population</th>
                        <th>GDP</th>
                        <th colSpan="2" className="action">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((item, key) => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td><Link to={'/view/' + item.id}  style={{ textDecoration: "none" }}>{item.name}</Link></td>
                                <td>{item.country.name}</td>
                                <td>{item.area}</td>
                                <td>{item.population}</td>
                                <td>{item.gdp}</td>
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
    )
}