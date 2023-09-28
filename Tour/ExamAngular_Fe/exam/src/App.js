import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListTour from "./tour/ListTour";
import CreateTour from "./tour/CreateTour";
import EditTour from "./tour/EditTour";
import ViewsTour from "./tour/ViewsTour";

function App() {
  return (
   <>
     <Routes>
       <Route path={'/'} element={<ListTour/>}></Route>
       <Route path={'/create'} element={<CreateTour/>}></Route>
       <Route path={'/edit/:id'} element={<EditTour/>}></Route>
       <Route path={'/view'} element={<ViewsTour/>}></Route>
     </Routes>
   </>
  );
}

export default App;
