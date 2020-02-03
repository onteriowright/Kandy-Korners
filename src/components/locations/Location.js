import React from "react";
import "./styles/Locations.css";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__name">Location: {location.name}</h3>
    <address className="location__address">Address: {location.address}</address>
    <div className="location__accessiblity">Handicap Accesible: {location.handicapAccesible === true ? "Yes" : "No"}</div>
  </section>
);
