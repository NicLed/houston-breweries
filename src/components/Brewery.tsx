import React, { Dispatch, SetStateAction } from "react";
import { BreweryType } from "../types/Brewery.type";

type BreweryProps = {
  brewery: BreweryType;
  setSelectedBrewery: Dispatch<SetStateAction<BreweryType>>;
  setDisplayMap: Dispatch<SetStateAction<boolean>>;
  breweryNameClean: (arg0: BreweryType) => string;
};

export const Brewery: React.FC<BreweryProps> = ({
  brewery,
  setSelectedBrewery,
  setDisplayMap,
  breweryNameClean,
}) => {
  const handleClick = () => {
    setSelectedBrewery(brewery);
    setDisplayMap(true);
  };

  const cleanName = breweryNameClean(brewery);

  return (
    <div onClick={handleClick}>
      <blockquote>
        <div>{cleanName}</div>
        <div>Brewery Type: {brewery.brewery_type}</div>
        <div>{brewery.street && brewery.street}</div>
        <div>
          {brewery.city}, {brewery.state}, {brewery.postal_code.slice(0, 5)}
        </div>
        <a href={brewery.website_url} target="_blank">
          {brewery.website_url}
        </a>
      </blockquote>
    </div>
  );
};
