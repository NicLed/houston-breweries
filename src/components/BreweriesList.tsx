import React from 'react';
import { useState } from 'react';
import { Brewery } from './Brewery';
import { BreweryType } from '../types/Brewery.type';
import { MapView } from './MapView';

type BreweriesListProps = {
  breweryList: BreweryType[],
}

export const BreweriesList: React.FC<BreweriesListProps> = ({ breweryList }) => {
  const [ displayMap, setDisplayMap ] = useState(false);
  const [ selectedBrewery, setSelectedBrewery ] = useState({} as BreweryType);

  return (
    <>
      {displayMap ? <MapView selectedBrewery={selectedBrewery} setDisplayMap={setDisplayMap} />
        : breweryList.map((brewery, i) => {
          return <Brewery brewery={brewery} key={i} setSelectedBrewery={setSelectedBrewery} setDisplayMap={setDisplayMap} />
      })}
    </>
  )
};
