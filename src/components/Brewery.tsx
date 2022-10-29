import React from 'react';
import { BreweryType } from '../types/types';

type BreweryProps = {
  brewery: BreweryType,
}

export const Brewery: React.FC<BreweryProps> = ({ brewery }) => {

  const handleClick = () => {
    console.log("Clicked")
  }

  const zipCode = brewery.postal_code.slice(0, 5);

  return (
    <div onClick={handleClick}>
      <blockquote>
      <div>{brewery.name}</div>
      <div>{brewery.brewery_type}</div>
      <div>{brewery.street}</div>
      <div>{brewery.city}, {brewery.state}, {zipCode}</div>
      <a href={brewery.website_url} target="_blank">{brewery.website_url}</a>
      </blockquote>
    </div>
  );
};
