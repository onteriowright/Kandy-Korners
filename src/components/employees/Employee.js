import React from "react";
import "./Employees.css";

export default ({ employees }) => (
  <section className="employee">
    <h3>{employees.name}</h3>
    <div>Manager: {employees.manager === true ? "Yes" : "No"}</div>
    <div>Full Time: {employees.fullTime === true ? "Yes" : "No"}</div>
    <div>Hourly Rate: ${employees.hourlyRate}</div>
    <div>Location: {employees.location.name}</div>
  </section>
);
