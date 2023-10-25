import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Information from './components/Information';
import CreateEmployee from './components/CreateEmployee';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

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
    profession: '',
    hours: '',
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
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
    </BrowserRouter>
  );
}

export default App;
