import React, { useContext } from "react";
import { ProductContext } from "./ProductsDataProvider";
import { ProductTypeContext } from "./ProductTypeDataProvider";
import Product from "./Product";
import "./styles/Products.css";

export default () => {
  const { products } = useContext(ProductContext);
  const { productTypes } = useContext(ProductTypeContext);

  return (
    <div className="products">
      {products.map(product => {
        const foundProductType = productTypes.find(type => type.id === product.productId);
        return <Product key={product.id} products={product} productTypes={foundProductType} />;
      })}
    </div>
  );
};
