import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListProduct from "./product/ListProduct";
import CreateProduct from "./product/CreateProduct";
import EditProduct from "./product/EditProduct";

function App() {
  return (
      <>
        <Routes >
          <Route path={'/'} element={<ListProduct/>}></Route>
          <Route path={'/create'} element={<CreateProduct/>}></Route>
          <Route path={'/edit/:id'} element={<EditProduct/>}></Route>
        </Routes>
      </>
  );
}

export default App;
