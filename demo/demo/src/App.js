import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListCity from "./City/ListCity";
import CreateCity from "./City/CreateCity";
import UpdateCity from "./City/UpdateCity";
import ViewsCity from "./City/ViewsCity";

function App() {
  return (
      <>
      <Routes>
        <Route path={"/"} element={<ListCity/>}></Route>
        <Route path={"/create"} element={<CreateCity/>}></Route>
        <Route path={"/edit/:id"} element={<UpdateCity/>}></Route>
        <Route path={"/views/:id"} element={<ViewsCity/>}></Route>
      </Routes>
      </>
  );
}

export default App;
