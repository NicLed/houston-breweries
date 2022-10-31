import { BreweryType } from "../types/Brewery.type";

export const cleanBreweryName = (brewery: BreweryType) => {
  return brewery.name.includes("â")
    ? brewery.name.slice(0, brewery.name.indexOf("â") - 1)
    : brewery.name;
};
