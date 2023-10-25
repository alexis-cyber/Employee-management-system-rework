import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const EmployeeList = ({
  employee,
  getAllEmployees,
  employees,
  setEmployee,
}) => {
  // States
  const [isEdit, setIsEdit] = useState(false);
  const [updatedValue, setUpdatedValue] = useState({
    name: '',
    phone: '',
    address: '',
    profession: '',
    hours: '',
  });
  const [currentEmploy, setCurrentEmploy] = useState({});
  const [id, setId] = useState(null);

  // Delete part
  function deleteEmployee(id) {
      try {
          let result = window.confirm(
              "Are you sure you want to delete this employee?"
          );

              if (result) {
                const newEmployees = employees.map((employee) => {
                  if (id === employee._id) {
                    axios
                      .delete(`http://localhost:8000/${id}`)
                      .then((res) => alert(res.data.msg))
                      .then(() => getAllEmployees())
                      .catch((err) => console.log(err));
                  }
                  return employee;
                });
                console.log('from the delete function', newEmployees);
              }
            } catch (error) {
              console.log(error);
            }
          }

  // Edit part
  function handleInputChange(e) {
    setUpdatedValue({
      ...updatedValue,
      [e.target.name]: e.target.value,
    });
    console.log(updatedValue);
  }

  function updateEmployee(id, employee) {
    console.log(id);
    setIsEdit(true);
    setId(id);
    setCurrentEmploy(employee);
  }

  function saveChanges() {
    try {
      console.log('this is the id', id);
      axios
        .put(`http://localhost:8000/${id}`, {
          name: updatedValue.name,
        //   profession: updatedValue.profession,
        //   hours: updatedValue.hours,
          phone: updatedValue.phone,
          address: updatedValue.address,
        })
        .then((res) => console.log(res.data))
        .then(() => getAllEmployees())
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
    setIsEdit(false);
  }

  return (
      <div>
          {!isEdit ? (
              <div className="m-4">
                  <div className="text-center">
                      <Button
                          variant="primary"
                          onClick={() => getAllEmployees()}
                      >
                          Employee List
                      </Button>
                  </div>
                  <Table
                      striped
                      bordered
                      hover
                      variant="light"
                      className="mt-4"
                  >
                      <thead>
                          <tr>
                              <th>S.NO</th>
                              <th>NAME</th>
                              <th>ID</th>
                              <th>PHONE</th>
                              <th>DEPARTMENT</th>
                              <th>PROFESSION</th>
                              <th>WORKING HOURS</th>
                              <th>ADDRESS</th>
                              <th>ACTION</th>
                          </tr>
                      </thead>
                      <tbody>
                          {employees.map((employee) => (
                              <tr key={employee._id}>
                                  <td>{employee.serialNo}</td>
                                  <td>{employee.name}</td>
                                  <td>{employee._id}</td>
                                  <td>{employee.phone}</td>
                                  <td>{employee.department.name}</td>
                                  <td>{employee.profession}</td>
                                  <td>{employee.hours}</td>
                                  <td>{employee.address}</td>
                                  <td colSpan={2}>
                                      <Button
                                          variant="danger"
                                          onClick={() =>
                                              deleteEmployee(employee._id)
                                          }
                                      >
                                          Delete
                                      </Button>
                                      <Button
                                          variant="primary"
                                          className="ms-2"
                                          onClick={() =>
                                              updateEmployee(
                                                  employee._id,
                                                  employee
                                              )
                                          }
                                      >
                                          Update
                                      </Button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </Table>
              </div>
          ) : (
              <div className="text-center mt-4 ">
                  <Form className="d-flex justify-content-center">
                      <Form.Group className="m-2" controlId="formGroupName">
                          <Form.Label>Employee Name</Form.Label>
                          <Form.Control
                              type="text"
                              name="name"
                              // placeholder={currentEmploy.name}
                              placeholder="test"
                              onChange={(e) => handleInputChange(e)}
                              value={updatedValue.name}
                              onFocus={() =>
                                  setCurrentEmploy({
                                      ...currentEmploy,
                                      name: "",
                                  })
                              }
                          />
                      </Form.Group>
                        {/* Part to update profession */}
                      {/* <Form.Group className="m-2" controlId="formGroupName">
                          <Form.Label>Profession</Form.Label>
                          <Form.Control
                              type="text"
                              name="profession"
                              // placeholder={currentEmploy.profession}
                              placeholder="test"
                              onChange={(e) => handleInputChange(e)}
                              value={updatedValue.profession}
                              onFocus={() =>
                                  setCurrentEmploy({
                                      ...currentEmploy,
                                      profession: "",
                                  })
                              }
                          />
                      </Form.Group> */}



                      {/* Part to update hours */}
                      {/* <Form.Group className="m-2" controlId="formGroupName">
                          <Form.Label>Working hours</Form.Label>
                          <Form.Control
                              type="number"
                              name="hours"
                              // placeholder={currentEmploy.hours}
                              placeholder="test"
                              onChange={(e) => handleInputChange(e)}
                              value={updatedValue.hours}
                              onFocus={() =>
                                  setCurrentEmploy({
                                      ...currentEmploy,
                                      hours: "",
                                  })
                              }
                          />
                      </Form.Group> */}

                      <Form.Group className="m-2" controlId="formGroupName">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                              type="text"
                              name="phone"
                              // placeholder={currentEmploy.phone}
                              placeholder="test"
                              onChange={(e) => handleInputChange(e)}
                              value={updatedValue.phone}
                              onFocus={() =>
                                  setCurrentEmploy({
                                      ...currentEmploy,
                                      phone: "",
                                  })
                              }
                          />
                      </Form.Group>
                      <Form.Group className="m-2" controlId="formGroupName">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                              type="text"
                              name="address"
                              // placeholder={currentEmploy.address}
                              placeholder="test"
                              onChange={(e) => handleInputChange(e)}
                              value={updatedValue.address}
                              onFocus={() =>
                                  setCurrentEmploy({
                                      ...currentEmploy,
                                      address: "",
                                  })
                              }
                          />
                      </Form.Group>
                  </Form>
                  <div>
                      <Button
                          variant="primary"
                          className="m-1"
                          onClick={() => saveChanges()}
                      >
                          Save
                      </Button>
                      <Button variant="danger" onClick={() => setIsEdit(false)}>
                          Cancel
                      </Button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default EmployeeList;
