import React from "react";
import "././styles/KandyKorner.css";
import { LocationsProvider } from "./locations/LocationsDataProvider";
import LocationsListComponent from "./locations/LocationsListComponent";
import { ProductProvider } from "./products/ProductsDataProvider";
import ProductsListComponent from "./products/ProductsListComponent";

export default () => (
  <>
    <h2>Kandy Korners</h2>
    <small>Welcome to the Kandy Shop</small>
    <address>Visit us at one of our lovely locations</address>
    <div>110th street</div>

    <article>
      <LocationsProvider>
        <LocationsListComponent />
      </LocationsProvider>
    </article>

    <article>
      <ProductProvider>
        <ProductsListComponent />
      </ProductProvider>
    </article>
  </>
);
