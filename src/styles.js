import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: 0;
`;

export const PageHeader = styled.h1`
  color: #393f09;
  background-color: #f9f6ee;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-bottom: 1px solid grey;
  border-radius: 2px;
  font-size: 55px;
  font-family: "Goblin One", cursive;
`;

export const BreweryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  background-color: #f9f6ee;
  width: 50%;
  border-bottom: 1px solid grey;
  border-radius: 2px;
  margin-top: 5px;
`;

export const MapViewContainer = styled.div`
  background-color: #f9f6ee;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-top: 5px;
`;

export const MapContainer = styled.div`
  height: 500px;
  width: 500px;
  margin: 50px 0 25px 0;
`;

export const BreweryLink = styled.a`
  color: #e0861c;
`;

export const BackButton = styled.button`
  width: 25%;
  height: 50px;
  border: 2px solid;
  border-radius: 2px;
  color: #e0861c;
  margin: 25px 0 25px 0;
`;

export const BreweryTitle = styled.div`
  color: #393f09;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
`;

export const TextContainer = styled.div`
  color: #393f09;
  font-size: 18;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`;
