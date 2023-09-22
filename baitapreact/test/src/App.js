import './App.css';
import {Route, Routes} from "react-router-dom";
import ListProduct from "./service/product/ListProduct";
import ListCart from "./service/cart/ListCart";
import ViewsCart from "./service/cart/ViewsCart";
import ViewProduct from "./service/product/ViewProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<ListProduct/>}></Route>
        <Route path={'/views-product/:id'} element={<ViewProduct/>}></Route>
          <Route path={'/cart'} element={<ListCart/>}></Route>
          <Route path={'/views-cart/:id'} element={<ViewsCart/>}></Route>
      </Routes>
    </>
  );
}

export default App;
