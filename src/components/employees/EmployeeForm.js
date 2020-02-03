import React, { useContext, useRef } from "react";
import { LocationContext } from "../locations/LocationsDataProvider";
import { EmployeeContext } from "./EmployeeDataProvider";
import "./Employees.css";

export default props => {
  const { addEmployees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const employeeName = useRef("");
  const employeeLocation = useRef(0);
  const manager = useRef(0);
  const fullTime = useRef(0);
  const hourlyRate = useRef(0);

  const constructNewEmployee = () => {
    const locationId = parseInt(employeeLocation.current.value);
    const nameValue = employeeName.current.value;
    const managerStatus = manager.current.value;
    const time = fullTime.current.value;
    const hourly = hourlyRate.current.value;

    if (nameValue === "") {
      alert("Please enter name");
    } else if (locationId === 0) {
      alert("Please select a location");
    } else if (managerStatus === 0) {
      alert("Please select a requirement");
    } else if (time === 0) {
      alert("Please select a requirement");
    } else if (hourly === "") {
      alert("Please enter hourly rate");
    } else {
      addEmployees({
        name: nameValue,
        locationId: locationId,
        manager: managerStatus === "Yes" ? true : false,
        fullTime: time === "Yes" ? true : false,
        hourlyRate: parseInt(hourly, 10)
      }).then(() => props.history.push("/employees"));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Employees</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name</label>
          <br />
          <input type="text" name="employeeName" ref={employeeName} required autoFocus className="form-control" placeholder="Employee name" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <br />
          <select defaultValue="" name="location" ref={employeeLocation} className="form-control">
            <option value="0">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <h3>Are you a Manger</h3>
          <select defaultValue="" name="manager" ref={manager} className="form-control">
            <option value="0">Please select one...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <h3>Are you full time?</h3>
          <select defaultValue="" name="fullTime" ref={fullTime} className="form-control">
            <option value="0">Please select one...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <h3>Enter hourly rate</h3>
          <small>example: 150</small>
          <br />
          <input type="text" name="hourlyRate" ref={hourlyRate} required autoFocus className="form-control" placeholder="Hourly Rate" />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={clickEvent => {
          clickEvent.preventDefault();
          constructNewEmployee();
        }}
        className="btn btn-primary">
        Save Employee
      </button>
      <button
        onClick={clickEvent => {
          clickEvent.preventDefault();
          props.history.push("/employees");
        }}>
        Close
      </button>
    </form>
  );
};
