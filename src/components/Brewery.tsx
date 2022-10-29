import React, { Dispatch, SetStateAction } from "react";
import { BreweryType } from "../types/Brewery.type";

type BreweryProps = {
  brewery: BreweryType;
  setSelectedBrewery: Dispatch<SetStateAction<BreweryType>>;
  setDisplayMap: Dispatch<SetStateAction<boolean>>;
};

export const Brewery: React.FC<BreweryProps> = ({
  brewery,
  setSelectedBrewery,
  setDisplayMap,
}) => {
  const handleClick = () => {
    setSelectedBrewery(brewery);
    setDisplayMap(true);
  };

  const zipCode = brewery.postal_code.slice(0, 5);

  return (
    <div onClick={handleClick}>
      <blockquote>
        <div>{brewery.name}</div>
        <div>{brewery.brewery_type}</div>
        <div>{brewery.street}</div>
        <div>
          {brewery.city}, {brewery.state}, {zipCode}
        </div>
        <a href={brewery.website_url} target="_blank">
          {brewery.website_url}
        </a>
      </blockquote>
    </div>
  );
};
