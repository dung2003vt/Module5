import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./store";

function App() {
  const dispatch = useDispatch();
  const x = useSelector(state => {
    console.log(state);
    return state;
  })
  return (
   <>
     <button onClick={() =>{
         dispatch(getData() )
     }}>Click</button>
       </>
  );
}

export default App;
