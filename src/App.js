
import './App.css';
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Books from './Books';
import Topbar from './Topbar';
import Addbook from './Addbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBook from './ViewBook';
import EditBook from './EditBook';
function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
        <Route path="/add_book" element={<Addbook/>}></Route>
        <Route path="/book/:id" element={<ViewBook/>}></Route>
        <Route path="/edit-book/:id" element={<EditBook/>}></Route>
       </Routes>
      
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
