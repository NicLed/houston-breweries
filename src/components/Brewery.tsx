import React, { Dispatch, SetStateAction } from "react";
import {
  BreweryContainer,
  BreweryLink,
  BreweryTitle,
  TextContainer,
} from "../styles";
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
    <BreweryContainer onClick={handleClick}>
      <BreweryTitle>{cleanName}</BreweryTitle>
      <TextContainer>Brewery Type: {brewery.brewery_type}</TextContainer>
      <TextContainer>{brewery.street && brewery.street}</TextContainer>
      <TextContainer>
        {brewery.city}, {brewery.state}, {brewery.postal_code.slice(0, 5)}
      </TextContainer>
      <BreweryLink href={brewery.website_url} target="_blank">
        {brewery.website_url}
      </BreweryLink>
    </BreweryContainer>
  );
};
