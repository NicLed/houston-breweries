import * as React from 'react';
import { useEffect, useState } from 'react';
import { getAllHoustonBreweries } from '../server/controllers/getAllHoustonBreweries';

const App: React.FC = () => {
  const [ breweryList, setBreweryList ] = useState([]);

  useEffect(() => {
    getHoustonBreweries();
  }, [])

  const getHoustonBreweries = async () => {
    const houstonBreweries = await getAllHoustonBreweries();
    console.log(houstonBreweries.data);
    setBreweryList(houstonBreweries.data);
  };

    return (
      <>
        <h1>
          Hello
        </h1>
      </>
    );
}

export default App;