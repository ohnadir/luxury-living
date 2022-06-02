import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import About from './Page/About';
import Project from './Page/Projects';
import Contact from './Page/Contact';
import Admin from './Page/Admin';
import Login from './Page/Login/Login/Login';
import Signup from './Page/Login/Signup';


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
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
