import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BreweryType } from "../types/Brewery.type";
import { getBreweryCoordinates } from "../../server/controllers/getBreweryCoordinates";
import { Map } from "./Map";
import {
  BackButton,
  BreweryLink,
  BreweryTitle,
  MapViewContainer,
  TextContainer,
} from "../styles";

type MapViewProps = {
  selectedBrewery: BreweryType;
  setDisplayMap: Dispatch<SetStateAction<boolean>>;
  breweryNameClean: (arg0: BreweryType) => string;
};

export const MapView: React.FC<MapViewProps> = ({
  selectedBrewery,
  setDisplayMap,
  breweryNameClean,
}) => {
  const [latitude, setLatitude] = useState(selectedBrewery.latitude);
  const [longitude, setLongitude] = useState(selectedBrewery.longitude);

  useEffect(() => {
    getMapAsync();
  }, []);

  const getMapAsync = async () => {
    if (!selectedBrewery.latitude || !selectedBrewery.longitude) {
      let map;

      if (selectedBrewery.street) {
        map = await getBreweryCoordinates(
          selectedBrewery.street,
          selectedBrewery.city,
          selectedBrewery.state
        );
        setLatitude(map.data.results[0].geometry.location.lat);
        setLongitude(map.data.results[0].geometry.location.lng);
      } else {
        setLatitude("0");
        setLongitude("0");
      }
    }
  };

  const cleanName = breweryNameClean(selectedBrewery);

  return (
    <MapViewContainer>
      <BreweryTitle>{cleanName}</BreweryTitle>
      <TextContainer>
        Brewery Type: {selectedBrewery.brewery_type}
      </TextContainer>
      <TextContainer>
        {selectedBrewery.street && selectedBrewery.street}
      </TextContainer>
      <TextContainer>
        {selectedBrewery.city}, {selectedBrewery.state},{" "}
        {selectedBrewery.postal_code.slice(0, 5)}
      </TextContainer>
      <BreweryLink href={selectedBrewery.website_url} target="_blank">
        {selectedBrewery.website_url}
      </BreweryLink>
      <Map latitude={latitude} longitude={longitude} />
      <BackButton
        onClick={() => {
          setDisplayMap(false);
        }}
      >
        Go back to Brewery List
      </BackButton>
    </MapViewContainer>
  );
};
