import React, { useState, useEffect } from "react";

export const LocationContext = React.createContext();

export const LocationsProvider = props => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("http://localhost:5000/locations")
      .then(res => res.json())
      .then(setLocations);
  };

  const addLocation = location => {
    return fetch("http://localhost:5000/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(location)
    }).then(getLocations);
  };

  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    console.log("State Changed");
  }, [locations]);

  return (
    <LocationContext.Provider
      value={{
        locations,
        addLocation
      }}>
      {props.children}
    </LocationContext.Provider>
  );
};
