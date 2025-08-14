import React, { useEffect, useRef } from "react";

export default function Map({ lat, lng }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 10
      });
    }
  }, [lat, lng]);

  return <div ref={mapRef} className="map"></div>;
}
