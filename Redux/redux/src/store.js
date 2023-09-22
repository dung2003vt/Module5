import {createStore} from "redux";

const setup = () => {
    return {
       name : 'hello'
    }
}
const store = createStore(setup);
export default store;