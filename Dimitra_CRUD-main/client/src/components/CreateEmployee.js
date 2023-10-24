import React from 'react';
import AddEmployee from './AddEmployee';
import Header from './Header';

const CreateEmployee = ({
  employee,
  getAllEmployees,
  employees,
  setEmployee,
}) => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <AddEmployee
          employee={employee}
          getAllEmployees={getAllEmployees}
          employees={employees}
          setEmployee={setEmployee}
        />
      </div>
    </div>
  );
};

export default CreateEmployee;
