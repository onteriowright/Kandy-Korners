import React, { useState, useEffect } from "react";

export const EmployeeContext = React.createContext();

export const EmployeeProvider = props => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:5000/employees?_expand=location")
      .then(res => res.json())
      .then(setEmployees);
  };

  const addEmployees = employee => {
    return fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    }).then(getEmployees);
  };

  const deleteEmployees = employeeId => {
    return fetch(`http://localhost:5000/${employeeId}`, {
      method: "DELETE"
    }).then(getEmployees);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    console.log("State Changed");
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployees,
        deleteEmployees
      }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
