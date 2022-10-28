import React from 'react';
import { BreweryType } from './Breweries';

const Brewery: React.FC<BreweryType> = ({ brewery }) => {

  return (
    <>
      <div>{brewery.name}</div>
      <div>{brewery.brewery_type}</div>
      <div>{brewery.street}</div>
      <a href={brewery.website_url}>{brewery.website_url ? brewery.website_url : "No URL available."}</a>
    </>
  );
};

export default Brewery