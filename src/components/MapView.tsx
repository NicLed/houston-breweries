import React, { Dispatch, SetStateAction } from 'react';
import { BreweryType } from '../types/Brewery.type';

type MapViewProps = {
  selectedBrewery: BreweryType,
  setDisplayMap: Dispatch<SetStateAction<boolean>>,
}

export const MapView: React.FC<MapViewProps> = ({ selectedBrewery, setDisplayMap }) => {

  return (
    <>
      <button onClick={() => {setDisplayMap(false)}}>Go back to Brewery List</button>
      <div>{selectedBrewery.name}</div>

    </>
  )
}