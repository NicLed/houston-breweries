import React from 'react';
import Brewery from './Brewery';

export type BreweryType = {
  id: String,
  name: String,
  brewery_type: String,
  street: String,
  address_2: String,
  address_3?: String,
  city: String,
  state: String,
  county_province?: String,
  postal_code: String,
  country: String,
  longitude: String,
  latitude: String,
  phone: String,
  website_url: String,
  updated_at: String,
  created_at: String,
}

const BreweriesList: React.FC<BreweryType> = ({ breweryList }) => {
  return (
    <>
      {breweryList.map((brewery: BreweryType, i) => {
        return <Brewery brewery={brewery} key={i}/>
      })}
    </>
  )
};

export default BreweriesList;