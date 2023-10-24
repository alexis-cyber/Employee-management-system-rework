import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = ({ getAllEmployees }) => {

  let token = localStorage.getItem("token");

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

  const navigate = useNavigate();

  function handleInputChange(e, fieldName) {
    setEmployee({
      ...employee,
      [fieldName]: e.target.value,
    });
  }

  const addNewEmployee = () => {
    try {
      axios
          .post("http://localhost:8000/employee/create", employee, {
              headers: { Authorization: `Bearer ${token}` }
          })
          .then((res) => alert("The employee " + res.data.name + " is added."))
          .then(navigate("/employees"))
          .then(() => getAllEmployees())
          .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-2 w-25">
      <Form>
        <Form.Group className="mb-1" controlId="formGroupName">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a name"
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formGroupSerialNo">
          <Form.Label>SerialNo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Add a SerialNo"
            onChange={(e) => handleInputChange(e, 'serialNo')}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formGroupPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Add a phone"
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formGroupAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add an address"
            onChange={(e) => handleInputChange(e, 'address')}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formGroupDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a department"
            onChange={(e) => handleInputChange(e, 'department.name')}
          />
        </Form.Group>
        <Button type="submit" className="mt-2" onClick={addNewEmployee}>
          Add Employee
        </Button>
      </Form>
    </div>
  );
};

export default AddEmployee;