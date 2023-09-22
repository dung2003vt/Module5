import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const reducer = (initialState, action) => {
    if (action.type == 'a'){
        return action.payload;
    }
    return {
        name : 'ajskna'
    }
}
export const getData = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:8080/products')
        dispatch({
            type : 'a',
            payload : res.data
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
export default store;