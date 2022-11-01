const axios = require('axios');
import { googleMapsAPIKey } from '../../config';

export const getBreweryCoordinates = (address: string, city: string, state: string) => {
  const formattedAddress = replaceWhiteSpace(address);
  const formattedCity = replaceWhiteSpace(city);
  const formattedState = replaceWhiteSpace(state);

  const mapURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress},+${formattedCity},+${formattedState}&key=${googleMapsAPIKey}`;

  return axios.get(mapURL);
};

const replaceWhiteSpace = (string: string) => {
  let formattedString = string;

  if (string !== null && string.includes(' ')) {
    let splitString = string.split(' ');
    for (let i = 0; i < splitString.length; i++) {
      formattedString += splitString[i] + '+';
    }
  }

  return formattedString;
};
