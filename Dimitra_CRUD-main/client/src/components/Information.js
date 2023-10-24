import React from 'react';
import EmployeeList from './EmployeeList';
import HeaderInformation from './HeaderInformation';

const Information = ({ employee, getAllEmployees, employees, setEmployee }) => {
  return (
    <div>
      <HeaderInformation />
      <EmployeeList
        employee={employee}
        getAllEmployees={getAllEmployees}
        employees={employees}
        setEmployee={setEmployee}
      />
    </div>
  );
};

export default Information;
