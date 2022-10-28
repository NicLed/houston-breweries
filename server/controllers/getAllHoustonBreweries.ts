const axios = require('axios');

export const getAllHoustonBreweries = () => {
  return axios.get('https://api.openbrewerydb.org/breweries?by_city=Houston&per_page=50');
};