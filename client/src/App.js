import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/About';
import Project from './Page/Projects';
import Contact from './Page/Contact';
import Dashboard from './Page/Dashboard/Dashboard';
import Login from './Page/Login/Login/Login';
import Signup from './Page/Login/Signup';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Book from './Page/Dashboard/Book';
import BookingList from './Page/Dashboard/BookingList';
import Review from './Page/Dashboard/Review';
import OrderList from './Page/Dashboard/OrderList';
import AddService from './Page/Dashboard/AddService';
import MakeAdmin from './Page/Dashboard/MakeAdmin';
import ManageService from './Page/Dashboard/ManageService';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Project></Project>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<Book></Book>}></Route>
          <Route path='book' element={<Book></Book>}></Route>
          <Route path='bookList' element={<BookingList></BookingList>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='orderList' element={<OrderList/>}></Route>
          <Route path='addService' element={<AddService/>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
          <Route path='manageService' element={<ManageService/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
