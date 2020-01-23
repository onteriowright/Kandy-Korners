import React from "react";
import "./KandyKorner.css";
import { LocationsProvider } from "./locations/LocationsDataProvider";
import LocationsListComponent from "./locations/LocationsListComponent";

export default () => (
  <>
    <h2>Kandy Korners</h2>
    <small>Welcome to the Kandy Shop</small>
    <address>Visit us at one of our lovely locations</address>
    <div>110 street</div>

    <article>
      <LocationsProvider>
        <LocationsListComponent />
      </LocationsProvider>
    </article>
  </>
);
