import * as React from 'react';
import { BreweryType } from '../types/types';

type MapViewProps = {
  selectedBrewery: BreweryType
}

export const MapView: React.FC<MapViewProps> = ({ selectedBrewery }) => {
  return (
    <>
      <div>selectedBrewery.name</div>
    </>
  )
}