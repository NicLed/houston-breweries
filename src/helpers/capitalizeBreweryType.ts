export const capitalizeBreweryType = (breweryType: string) => {
  return (
    breweryType.charAt(0).toUpperCase() +
    breweryType.slice(1, breweryType.length)
  );
};
