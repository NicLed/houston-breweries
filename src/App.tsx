import React from "react";
import { useEffect, useState } from "react";
import { getAllHoustonBreweries } from "../server/controllers/getAllHoustonBreweries";
import { BreweriesList } from "./components/BreweriesList";
import { MainContainer, PageHeader } from "./styles";

const App: React.FC = () => {
  const [breweryList, setBreweryList] = useState([]);

  useEffect(() => {
    getHoustonBreweries();
  }, []);

  const getHoustonBreweries = async () => {
    const houstonBreweries = await getAllHoustonBreweries();
    setBreweryList(houstonBreweries.data);
  };

  return (
    <MainContainer>
      <PageHeader>Houston Breweries</PageHeader>
      <BreweriesList breweryList={breweryList} />
    </MainContainer>
  );
};

export default App;
