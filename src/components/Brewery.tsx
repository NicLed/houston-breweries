import React, { Dispatch, SetStateAction } from "react";
import { capitalizeBreweryType } from "../helpers/capitalizeBreweryType";
import { cleanBreweryName } from "../helpers/cleanBreweryName";
import {
  BoldText,
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

  return (
    <BreweryContainer onClick={handleClick}>
      <BreweryTitle>{cleanBreweryName(brewery)}</BreweryTitle>
      <TextContainer>
        <BoldText>Brewery Type:</BoldText> {capitalizeBreweryType(brewery)}
      </TextContainer>
      <TextContainer>{brewery.street && brewery.street}</TextContainer>
      <TextContainer>
        {brewery.city}, {brewery.state}, {brewery.postal_code.slice(0, 5)}
      </TextContainer>
      <TextContainer>
        <BoldText>Phone:</BoldText> {brewery.phone}
      </TextContainer>
      <BreweryLink href={brewery.website_url} target="_blank">
        {brewery.website_url}
      </BreweryLink>
    </BreweryContainer>
  );
};
