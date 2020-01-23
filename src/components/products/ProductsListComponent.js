import React, { useContext } from "react";
import { ProductContext } from "./ProductsDataProvider";
import Product from "./Product";
import "./styles/Products.css";

export default () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} products={product} />
      ))}
    </div>
  );
};
