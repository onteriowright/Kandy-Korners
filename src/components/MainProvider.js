import React from "react";
import { LocationsProvider } from "./locations/LocationsDataProvider";
import { ProductProvider } from "./products/ProductsDataProvider";
import { ProductTypeProvider } from "./products/ProductTypeDataProvider";

export default props => {
  return (
    <>
      <LocationsProvider>
        <ProductProvider>
          <ProductTypeProvider>{props.children}</ProductTypeProvider>
        </ProductProvider>
      </LocationsProvider>
    </>
  );
};
