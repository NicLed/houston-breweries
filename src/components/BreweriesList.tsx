import React from 'react';
import { Brewery } from './Brewery';
import { BreweryType, BreweriesListType } from '../types/types';

type BreweriesListProps = {
  breweryList: BreweriesListType[],
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
