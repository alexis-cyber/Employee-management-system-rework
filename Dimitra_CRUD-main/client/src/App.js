import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs, OurAim, OurVision } from './pages/AboutUs';
import{
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from './pages/Events';
import Sidebar from './components/Sidebar';
import Contact from './pages/ContactUs'
import Support from './pages/Support';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Information from './components/Information';
import CreateEmployee from './components/CreateEmployee';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer';


function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    serialNo: '',
    name: '',
    phone: '',
    status: 'false',
    department: {
      name: '',
      acronym: '',
    },
    address: '',
  });
  function getAllEmployees() {
    try {
      axios
        .get('http://localhost:8000/employees')
        .then((res) => {
          setEmployees(res.data);
          console.log('ALL', res.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllEmployees();
  }, []);
  return (
    <BrowserRouter className="App">
       <Sidebar/>
      <Routes>
      <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/about-us/aim' element={<OurAim/>} />
        <Route path='/about-us/vision' element={<OurVision/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/services1' element={<ServicesOne/>} />
        <Route path='/services/services2' element={<ServicesTwo/>} />
        <Route path='/services/services3' element={<ServicesThree/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/events/events1' element={<EventsOne/>} />
        <Route path='/events/events2' element={<EventsTwo/>} />
        <Route path='/support' element={<Support/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/employees"
          element={
            <Information
              employee={employee}
              getAllEmployees={getAllEmployees}
              employees={employees}
              setEmployee={setEmployee}
            />
          }
        />
        <Route
          path="/employee/create"
          element={
            <CreateEmployee
              employee={employee}
              getAllEmployees={getAllEmployees}
              employees={employees}
              setEmployee={setEmployee}
            />
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;


