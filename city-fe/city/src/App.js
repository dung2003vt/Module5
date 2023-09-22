import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListCity from "./city/ListCity";
import CreateCity from "./city/CreateCity";
import EditCity from "./city/EditCity";
import ViewCity from "./city/ViewCity";
function App() {
  return (
      <>
        <Routes >
          <Route path={'/'} element={<ListCity/>}></Route>
          <Route path={'/create'} element={<CreateCity/>}></Route>
          <Route path={'/edit/:id'} element={<EditCity/>}></Route>
          <Route path={'/view/:id'} element={<ViewCity/>}></Route>
        </Routes>
      </>
  );
}

export default App;
