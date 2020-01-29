import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeDataProvider";
import Employee from "./Employee";

export default props => {
  const { employees } = useContext(EmployeeContext);

  return (
    <>
      <h1>Employees</h1>

      <button onClick={() => props.history.push("employees/create")}>Register New Employee</button>

      <section className="employees">
        {employees.map(employee => (
          <Employee key={employee.id} employees={employee} />
        ))}
      </section>
    </>
  );
};
