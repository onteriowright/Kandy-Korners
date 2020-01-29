import React, { useState, useEffect } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = props => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(setProducts);
  };

  const addProducts = products => {
    return fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products)
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("State Changed");
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addProducts
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};
