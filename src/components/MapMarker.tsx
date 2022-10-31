import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

type MapMarkerProps = {
  latitude: string;
  longitude: string;
};

export const MapMarker: React.FC<MapMarkerProps> = ({
  latitude,
  longitude,
}) => {
  const lat = {
    latitude,
  };

  const long = {
    longitude,
  };

  return (
    <div>
      <FontAwesomeIcon
        className="icon"
        icon={faBeer}
        size="2x"
        {...lat}
        {...long}
      />
    </div>
  );
};
