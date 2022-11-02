export const cleanBreweryName = (breweryName: string) => {
  return breweryName.includes("â")
    ? breweryName.slice(0, breweryName.indexOf("â") - 1)
    : breweryName;
};
