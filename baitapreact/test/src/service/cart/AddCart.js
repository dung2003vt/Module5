import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function CreateEmployee() {
    const [cart, setCart] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.post(`https://dummyjson.com/carts/add`).then(res => {
            setCart(res.data)
        })
    }, [])
}