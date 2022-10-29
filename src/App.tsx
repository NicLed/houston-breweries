import React from 'react';
import { useEffect, useState } from 'react';
import { getAllHoustonBreweries } from '../server/controllers/getAllHoustonBreweries';
import { BreweriesList } from './components/BreweriesList';
import { MapView } from './components/MapView';
import { BreweryType } from './types/Brewery.type';

const App: React.FC = () => {
  const [ breweryList, setBreweryList ] = useState([]);

  useEffect(() => {
    getHoustonBreweries();
  }, [])

  const getHoustonBreweries = async () => {
    const houstonBreweries = await getAllHoustonBreweries();
    setBreweryList(houstonBreweries.data);
  };

    return (
      <>
        <h1>Houston Breweries</h1>
        {<BreweriesList breweryList={breweryList} />}
      </>
    );
}

export default App;