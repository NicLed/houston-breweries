import { BreweryType } from "../types/Brewery.type";

export const capitalizeBreweryType = (brewery: BreweryType) => {
  return (
    brewery.brewery_type.charAt(0).toUpperCase() +
    brewery.brewery_type.slice(1, brewery.brewery_type.length)
  );
};
