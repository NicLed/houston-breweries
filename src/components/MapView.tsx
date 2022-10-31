import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BreweryType } from "../types/Brewery.type";
import { getBreweryCoordinates } from '../../server/controllers/getBreweryCoordinates';
import { Map } from './Map';

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
        map = await getBreweryCoordinates(selectedBrewery.street, selectedBrewery.city, selectedBrewery.state);
        setLatitude(map.data.results[0].geometry.location.lat);
        setLongitude(map.data.results[0].geometry.location.lng);
      } else {
        setLatitude('0');
        setLongitude('0');
      }
    }
  }


  const cleanName = breweryNameClean(selectedBrewery);

  return (
    <div>
      <button
        onClick={() => {
          setDisplayMap(false);
        }}
      >
        Go back to Brewery List
      </button>
      <div>{cleanName}</div>
      <div>{selectedBrewery.street && selectedBrewery.street}</div>
      <div>{selectedBrewery.city}, {selectedBrewery.state}, {selectedBrewery.postal_code.slice(0, 5)}</div>
      <Map latitude={latitude} longitude={longitude} />
    </div>
  );
};
