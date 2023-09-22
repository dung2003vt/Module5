import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";

function App() {
    const x = useSelector(state => {
        console.log(state)
        return state;
    })
  return (
   <>
   </>
  );
}

export default App;
