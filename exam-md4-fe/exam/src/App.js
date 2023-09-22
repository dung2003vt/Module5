import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListEmployee from "./service/employee/ListEmployee";
import CreateEmployee from "./service/employee/CreateEmployee";
import EditEmployee from "./service/employee/EditEmployee";
import ViewEmployee from "./service/employee/ViewEmployee";

function App() {
  return (
      <>
        <Routes >
          <Route path={'/'} element={<ListEmployee/>}></Route>
          <Route path={'/create'} element={<CreateEmployee/>}></Route>
          <Route path={'/edit/:id'} element={<EditEmployee/>}></Route>
          <Route path={'/view/:id'} element={<ViewEmployee/>}></Route>
        </Routes>
      </>
  );
}

export default App;
