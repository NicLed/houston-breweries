import React from 'react';
import { BreweryType } from './Breweries';

const Brewery: React.FC<BreweryType> = ({ brewery }) => {

  return (
    <div>{brewery.name}</div>
  );
};

export default Brewery