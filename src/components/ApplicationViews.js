import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./MainProvider";
import LocationsListComponent from "./locations/LocationsListComponent";
import ProductsListComponent from "./products/ProductsListComponent";

export default props => {
  return (
    <>
      <h2>Kandy Korners</h2>
      <small>Welcome to the Kandy Shop</small>
      <address>Visit us at one of our lovely locations</address>
      <div>110th street</div>

      <MainProvider>
        <Route exact path="/">
          <LocationsListComponent />
        </Route>

        <Route exact path="/products">
          <ProductsListComponent />
        </Route>
      </MainProvider>
    </>
  );
};
