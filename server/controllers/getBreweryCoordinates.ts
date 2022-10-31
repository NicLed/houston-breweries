const axios = require('axios');
import { googleMapsAPIKey } from '../../config';

export const getBreweryCoordinates = (address: string, city: string, state: string) => {
  const formattedAddress = removeWhiteSpace(address);
  const formattedCity = removeWhiteSpace(city);
  const formattedState = removeWhiteSpace(state);

  const mapURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress},+${formattedCity},+${formattedState}&key=${googleMapsAPIKey}`;

  return axios.get(mapURL);
};

const removeWhiteSpace = (string: string) => {
  let formattedString = '';

  if (string !== null && string.includes(' ')) {
    let splitString = string.split(' ');
    for (let i = 0; i < splitString.length; i++) {
      formattedString += splitString[i] + '+';
    }
  } else {
    formattedString = string;
  }

  return formattedString;
};
