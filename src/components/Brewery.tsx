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
import { formatPhoneNumber } from "../helpers/formatPhoneNumber";

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
      <BreweryTitle>{cleanBreweryName(brewery.name)}</BreweryTitle>
      <TextContainer>
        <BoldText>Brewery Type:</BoldText> {capitalizeBreweryType(brewery.brewery_type)}
      </TextContainer>
      <TextContainer>{brewery.street && brewery.street}</TextContainer>
      <TextContainer>
        {brewery.city}, {brewery.state}, {brewery.postal_code.slice(0, 5)}
      </TextContainer>
      {brewery.phone && <TextContainer>
        <BoldText>Phone:</BoldText> {formatPhoneNumber(brewery.phone)}
      </TextContainer>}
      <BreweryLink href={brewery.website_url} target="_blank" onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {event.stopPropagation()}}>
        {brewery.website_url}
      </BreweryLink>
    </BreweryContainer>
  );
};
