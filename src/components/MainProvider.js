import React from "react";
import { LocationsProvider } from "./locations/LocationsDataProvider";
import { ProductProvider } from "./products/ProductsDataProvider";
import { ProductTypeProvider } from "./products/ProductTypeDataProvider";
import { EmployeeProvider } from "./employees/EmployeeDataProvider";

export default props => {
  return (
    <>
      <LocationsProvider>
        <ProductProvider>
          <EmployeeProvider>
            <ProductTypeProvider>{props.children}</ProductTypeProvider>
          </EmployeeProvider>
        </ProductProvider>
      </LocationsProvider>
    </>
  );
};
