import React from "react";
import "./styles/Products.css";

export default ({ products, productTypes }) => (
  <section className="product">
    <h3 className="product__name">{products.product}</h3>
    <div className="product__FK">{productTypes.type}</div>
  </section>
);
