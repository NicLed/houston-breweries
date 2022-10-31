import React from "react";
import { useState } from "react";
import { Brewery } from "./Brewery";
import { BreweryType } from "../types/Brewery.type";
import { MapView } from "./MapView";

type BreweriesListProps = {
  breweryList: BreweryType[];
};

export const BreweriesList: React.FC<BreweriesListProps> = ({
  breweryList,
}) => {
  const [displayMap, setDisplayMap] = useState(false);
  const [selectedBrewery, setSelectedBrewery] = useState({} as BreweryType);

  const notInPlanningStages = breweryList.filter((brewery) => {
    return brewery.brewery_type !== 'planning';
  });

  const breweryNameClean = (brewery: BreweryType) =>
  {return brewery.name.includes('â') ? brewery.name.slice(0, brewery.name.indexOf('â') - 1) : brewery.name;}

  return (
    <>
      {!displayMap ? (
        notInPlanningStages.map((brewery, i) => {



          return (
            <Brewery
              brewery={brewery}
              key={i}
              setSelectedBrewery={setSelectedBrewery}
              setDisplayMap={setDisplayMap}
              breweryNameClean={breweryNameClean}
            />
          );
        })
      ) : (
        <MapView
          selectedBrewery={selectedBrewery}
          setDisplayMap={setDisplayMap}
          breweryNameClean={breweryNameClean}
        />
      )}
    </>
  );
};
