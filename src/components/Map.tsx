import React from "react";
import GoogleMapReact from "google-map-react";
import { googleMapsAPIKey } from "../../config";
import { MapContainer } from "../styles";
import { MapMarker } from "./MapMarker";

type MapProps = {
  latitude: string;
  longitude: string;
};

export const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const defaultProps = {
    center: {
      lat: Number(latitude),
      lng: Number(longitude),
    },
    zoom: 15,
  };

  return (
    <MapContainer>
      {latitude !== "0" && longitude !== "0" ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapMarker latitude={latitude} longitude={longitude} />
        </GoogleMapReact>
      ) : (
        "Sorry, we don't have location data for this brewery."
      )}
    </MapContainer>
  );
};
