import React from 'react';
import { Brewery } from './Brewery';
import { BreweryType } from '../types/types';

type BreweriesListProps = {
  breweryList: BreweryType[],
}

export const BreweriesList: React.FC<BreweriesListProps> = ({ breweryList }) => {
  return (
    <>
      {breweryList.map((brewery, i) => {
        return <Brewery brewery={brewery} key={i}/>
      })}
    </>
  )
};
