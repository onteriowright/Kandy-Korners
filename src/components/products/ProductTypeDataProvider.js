import React, { useState, useEffect } from "react";

export const ProductTypeContext = React.createContext();

export const ProductTypeProvider = props => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:5000/productTypes")
      .then(res => res.json())
      .then(setProductTypes);
  };

  const addProductTypes = productType => {
    return fetch("http://localhost:5000/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productType)
    }).then(getProductTypes);
  };

  useEffect(() => {
    getProductTypes();
  }, []);

  useEffect(() => {
    console.log("State Changed");
  }, [productTypes]);

  return (
    <ProductTypeContext.Provider
      value={{
        productTypes,
        addProductTypes
      }}>
      {props.children}
    </ProductTypeContext.Provider>
  );
};
